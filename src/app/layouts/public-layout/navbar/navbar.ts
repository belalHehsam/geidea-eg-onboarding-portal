import { LanguageService } from './../../../core/services/language';
import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { LucideAngularModule, Menu, X, Globe, Sun, Moon } from 'lucide-angular';
import { ThemeService } from '../../../core/services/theme';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, TranslocoPipe, LucideAngularModule],
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly themeService = inject(ThemeService);
  readonly languageService = inject(LanguageService);

  readonly isMenuOpen = signal(false);
  readonly themeIcon = signal('moon');
  // for lucide icons
  readonly Menu = Menu;
  readonly X = X;
  readonly Globe = Globe;
  readonly Sun = Sun;
  readonly Moon = Moon;

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.themeIcon() === 'sun' ? this.themeIcon.set('moon') : this.themeIcon.set('sun');
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }
}
