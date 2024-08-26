import { Component } from '@angular/core';
import { HttpThemeService } from '../../../services/theme/http-theme.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  isDarkTheme: boolean = false;

  constructor(private _httpThemeService: HttpThemeService) {}

  ngOnInit(): void {
    this._httpThemeService.isDarkTheme$.subscribe(theme => this.isDarkTheme = theme);
  }

}
