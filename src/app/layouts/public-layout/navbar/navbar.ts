import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme';
import { LanguageService } from '../../../core/services/language';
import { TranslocoPipe } from '@jsverse/transloco';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [TranslocoPipe, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly themeService = inject(ThemeService);
  readonly languageService = inject(LanguageService);
}
