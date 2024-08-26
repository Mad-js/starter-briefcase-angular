import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpThemeService {
  private isDarkThemeSubject = new BehaviorSubject<boolean>(false);
  isDarkTheme$ = this.isDarkThemeSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      const storedTheme = localStorage.getItem('theme');
      const isDarkTheme = storedTheme === 'true';
      this.isDarkThemeSubject.next(isDarkTheme);
      this.updateTheme(isDarkTheme);
    }
  }

  toggleTheme(): void {
    const newTheme = !this.isDarkThemeSubject.value;
    this.isDarkThemeSubject.next(newTheme);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', newTheme.toString());
    }
    this.updateTheme(newTheme);
  }

  private updateTheme(isDarkTheme: boolean): void {
    if (isPlatformBrowser(this.platformId)) {
      if (isDarkTheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
}
