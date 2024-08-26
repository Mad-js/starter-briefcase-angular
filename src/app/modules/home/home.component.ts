import { Component } from '@angular/core';
import { PageWrapperComponent } from '../../components/common/page/custom/page-wrapper.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageWrapperComponent, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public fondo = 'assets/fondo.webp';

}
