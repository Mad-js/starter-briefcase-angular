import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ThemeControllerComponent } from '../../components/themeController/theme-controller.component';
import { HttpThemeService } from '../../services/theme/http-theme.service';
import { CommonModule } from '@angular/common';
import { LanguageDropdownComponent } from '../../components/lenguageDropdown/language-dropdown.component';
import { NavigationMenuComponent } from '../../components/navigation/navigationMenu/navigation-menu.component';


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    ToolbarModule,
    AvatarModule,
    ButtonModule,
    ThemeControllerComponent,
    CommonModule,
    LanguageDropdownComponent,
    NavigationMenuComponent
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  isDarkTheme: boolean = false;

  constructor(
    private _httpThemeService: HttpThemeService,
  ) {}

  ngOnInit(): void {
    this._httpThemeService.isDarkTheme$.subscribe(theme => this.isDarkTheme = theme);
  }
}
