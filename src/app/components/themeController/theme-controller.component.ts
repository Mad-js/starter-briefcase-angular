import { Component } from '@angular/core';
import { HttpThemeService } from '../../services/theme/http-theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-controller',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './theme-controller.component.html',
  styleUrl: './theme-controller.component.css'
})
export class ThemeControllerComponent {
  isDarkTheme: boolean = false;

  constructor(private _httpThemeService: HttpThemeService) {}

  ngOnInit(): void {
    // Suscribirse al observable para obtener el estado del tema
    this._httpThemeService.isDarkTheme$.subscribe(theme => this.isDarkTheme = theme);
  }

  handleThemeToggle(): void {
    // Alternar el tema
    this._httpThemeService.toggleTheme();
  }
}
