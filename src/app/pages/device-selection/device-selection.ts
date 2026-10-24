import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { ArrowLeft, LucideAngularModule } from 'lucide-angular';
import { ProductCard } from '../../features/products/components/product-card/product-card';
import { Product } from '../../features/products/models/product.model';
import { Dialog } from '@angular/cdk/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ProductDetailsDialog } from '../../features/products/components/product-details-dialog/product-details-dialog';
import { Reveal } from '../../shared/directives/reveal';

@Component({
  selector: 'app-device-selection',
  imports: [RouterLink, TranslocoPipe, LucideAngularModule, ProductCard, Reveal],
  templateUrl: './device-selection.html',
})
export class DeviceSelection {
  readonly ArrowLeft = ArrowLeft;

  readonly selectedProductId = signal<string | null>(null);
  readonly detailsProductId = signal<string | null>(null);

  private readonly dialog = inject(Dialog);
  private readonly overlay = inject(Overlay);
  private readonly breakpointObserver = inject(BreakpointObserver);

  readonly products: Product[] = [
    {
      id: 'go-smarttt',
      name: 'Go Smart',
      description: 'Receive payments',
      image: 'assets/home-i-2.avif',
    },
    {
      id: 'go-smart-odmm',
      name: 'Go Smart ODM',
      description: 'Receive payments',
      image: 'assets/home-i-1.avif',
      badge: 'Free',
    },
    {
      id: 'go-smart-bill',
      name: 'Go Smart with Bill Payments',
      description: 'Receive payments and pay bills',
      image: 'assets/home-i-2.avif',
    },
    {
      id: 'go-tap',
      name: 'Go Tap',
      description: 'Take payments on your phone',
      image: 'assets/home-i-1.avif',
    },
    {
      id: 'go-smart',
      name: 'Go Smart',
      description: 'Receive payments',
      image: 'assets/home-i-2.avif',
      cardSchemes: [
        { name: 'mada', logo: '/assets/meeza.svg' },
        { name: 'Visa', logo: '/assets/visa.svg' },
        { name: 'Mastercard', logo: '/assets/mc.svg' },
      ],
      specifications: [
        'Accepts multiple payment methods',
        'Contactless payments',
        'Simple setup and management',
        'Digital reporting',
      ],
    },
  ];

  onProductSelected(id: string): void {
    this.selectedProductId.set(id);
  }

  onDetailsRequested(id: string): void {
    const product = this.products.find((item) => item.id === id);

    if (!product) return;

    const isMobile = this.breakpointObserver.isMatched('(max-width: 767px)');

    const positionStrategy = this.overlay.position().global().centerHorizontally();

    if (isMobile) {
      positionStrategy.bottom('0');
    } else {
      positionStrategy.centerVertically();
    }

    this.dialog.open(ProductDetailsDialog, {
      data: product,

      width: '100%',
      maxWidth: isMobile ? '100%' : '720px',

      positionStrategy,

      hasBackdrop: true,
      backdropClass: 'product-dialog-backdrop',

      scrollStrategy: this.overlay.scrollStrategies.block(),

      autoFocus: 'first-tabbable',
      restoreFocus: true,
    });
  }
}
