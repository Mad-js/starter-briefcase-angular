import { Component } from '@angular/core';
import { HttpLenguageService } from '../../services/lenguage/http-lenguage.service';
import { HttpThemeService } from '../../services/theme/http-theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-dropdown.component.html',
  styleUrl: './language-dropdown.component.css'
})
export class LanguageDropdownComponent {
  language: string = 'es'; // Idioma predeterminado
  isDarkTheme: boolean = false; // Ejemplo de tema, ajusta según tu servicio de tema

  constructor(private _httpLenguageService: HttpLenguageService, private _httpThemeService: HttpThemeService) {}

  ngOnInit(): void {
    this._httpLenguageService.language$.subscribe(lang => this.language = lang);
    this._httpThemeService.isDarkTheme$.subscribe((theme: boolean) => this.isDarkTheme = theme);
  }

  handleLanguageChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this._httpLenguageService.setLanguage(selectElement.value);
  }
}
