import { Component } from '@angular/core';
import { HttpThemeService } from '../../../../services/theme/http-theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-wrapper',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './page-wrapper.component.html',
  styleUrl: './page-wrapper.component.css'
})
export class PageWrapperComponent {
  isDarkTheme: boolean = false;

  constructor(private _httpThemeService: HttpThemeService) {}

  ngOnInit(): void {
    this._httpThemeService.isDarkTheme$.subscribe(theme => this.isDarkTheme = theme);
  }
}
