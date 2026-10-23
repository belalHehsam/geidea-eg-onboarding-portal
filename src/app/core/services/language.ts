import { inject, Injectable, signal } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
export type Language = 'en' | 'ar';
@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly transloco = inject(TranslocoService);
  private readonly storageKey = 'language';

  private readonly _currentLang = signal<Language>('en');
  readonly currentLang = this._currentLang.asReadonly(); //to avoid using set or update to the original signal from outside service

  constructor() {
    const savedLang = localStorage.getItem(this.storageKey);
    this.setLanguage(savedLang === 'en' ? 'en' : 'ar');
  }

  toggleLanguage() {
    this.setLanguage(this._currentLang() === 'en' ? 'ar' : 'en');
  }
  setLanguage(lang: Language) {
    this._currentLang.set(lang);

    // Change translations
    this.transloco.setActiveLang(lang);

    // Update HTML language and direction
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    localStorage.setItem(this.storageKey, lang);
  }
}
