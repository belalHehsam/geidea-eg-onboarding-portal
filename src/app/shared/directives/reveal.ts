import { AfterViewInit, Directive, ElementRef, OnDestroy, inject, input } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: {
    class: 'app-reveal',
    '[style.--reveal-delay]': 'revealDelay() + "ms"',
    '[style.--reveal-duration]': 'revealDuration() + "ms"',
  },
})
export class Reveal implements AfterViewInit, OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  readonly revealDelay = input(0);
  readonly revealDuration = input(600);

  ngAfterViewInit(): void {
    const element = this.element.nativeElement;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      element.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            element.classList.add('is-visible');
            this.observer?.unobserve(element);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
      },
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
