import { Component, Input } from '@angular/core';
import { HttpThemeService } from '../../../services/theme/http-theme.service';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css'
})
export class NavItemComponent {
  @Input() label: string = '';
}
