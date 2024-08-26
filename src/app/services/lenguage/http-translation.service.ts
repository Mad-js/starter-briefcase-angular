import { Injectable } from '@angular/core';
import { HttpLenguageService } from './http-lenguage.service';
import en from '../../../assets/i18n/en.json';
import es from '../../../assets/i18n/es.json';
import { map } from 'rxjs/operators'; // Importa el operador map
import { Observable } from 'rxjs'; // Importa Observable

@Injectable({
  providedIn: 'root'
})
export class HttpTranslationService {
  private translations: { [key: string]: any } = {
    en,
    es
  };

  constructor(private _httpLenguageService: HttpLenguageService) {}

  getTranslations(): Observable<any> {
    return this._httpLenguageService.language$.pipe(
      map((language: string) => this.translations[language] || {})
    );
  }
}
