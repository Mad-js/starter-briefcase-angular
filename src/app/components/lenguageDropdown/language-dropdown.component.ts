import { Component, OnInit } from '@angular/core';
import { HttpTranslationService } from '../../services/lenguage/http-translation.service';
import { HttpThemeService } from '../../services/theme/http-theme.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-language-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './language-dropdown.component.html',
  styleUrls: ['./language-dropdown.component.css']
})
export class LanguageDropdownComponent implements OnInit {
  selectedLanguage: string = 'es';
  isDarkTheme: boolean = false;
  usFlag = 'assets/flags/usa.png';
  ecFlag = 'assets/flags/ec.svg';
  dropdownOpen: boolean = false;

  constructor(
    private translationService: HttpTranslationService,
    private themeService: HttpThemeService
  ) {}

  ngOnInit(): void {
    this.selectedLanguage = this.translationService.currentLanguage;
    this.themeService.isDarkTheme$.subscribe(isDark => this.isDarkTheme = isDark);
  }

  changeLanguage(language: string): void {
    this.translationService.setLanguage(language);
    this.selectedLanguage = language;
    this.dropdownOpen = false; // Close the dropdown after selection
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
