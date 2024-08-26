import { Component } from '@angular/core';
import { HttpThemeService } from '../../../services/theme/http-theme.service';
import { NavItemComponent } from '../navItem/nav-item.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [NavItemComponent, TranslateModule, CommonModule],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.css'
})
export class NavigationMenuComponent {
  isDarkTheme: boolean = false;

  constructor(
    private _httpThemeService: HttpThemeService,
  ) {
    this._httpThemeService.isDarkTheme$.subscribe(theme => this.isDarkTheme = theme);
  }
}
