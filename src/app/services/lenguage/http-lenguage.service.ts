import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HttpLenguageService {
  private readonly defaultLanguage = 'es'; // Idioma predeterminado
  private languageSubject = new BehaviorSubject<string>(this.getStoredLanguage() || this.defaultLanguage);

  language$ = this.languageSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  private getStoredLanguage(): string | null {
    // Comprobar si estamos en un entorno del navegador
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('language');
    }
    return null;
  }

  setLanguage(lang: string): void {
    // Comprobar si estamos en un entorno del navegador
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('language', lang);
    }
    this.languageSubject.next(lang);
  }
}
