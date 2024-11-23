import { inject, Injectable } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root'
})
export class LanguageService
{
  cookie = inject(SsrCookieService)

  changeLang(lang: string)
  {
    this.cookie.set('lang', lang);
    console.log('Language changed to', lang);


    // Todo: cambiar idioma de la app
  }
}
