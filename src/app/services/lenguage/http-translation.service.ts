import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HttpTranslationService {
  private readonly LANGUAGE_KEY = 'selectedLanguage';

  constructor(
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const savedLanguage = localStorage.getItem(this.LANGUAGE_KEY) || 'en';
      this.translateService.setDefaultLang('en');
      this.translateService.use(savedLanguage);
    } else {
      // Fallback language for server-side rendering
      this.translateService.setDefaultLang('en');
    }
  }

  get currentLanguage(): string {
    return this.translateService.currentLang || 'en';
  }

  setLanguage(language: string): void {
    if (isPlatformBrowser(this.platformId)) {
      this.translateService.use(language);
      localStorage.setItem(this.LANGUAGE_KEY, language);
    } else {
      // Fallback language handling for server-side rendering
      this.translateService.use(language);
    }
  }

  getTranslation(key: string): string {
    return this.translateService.instant(key);
  }
}
