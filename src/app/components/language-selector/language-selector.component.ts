import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [],
  providers: [SsrCookieService],
  templateUrl: './language-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectorComponent
{
  cookieService = inject(SsrCookieService);
  languageService = inject(LanguageService);

  languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);

  changeLanguage(event: Event)
  {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;
    //this.cookieService.set('language', target.value);

    this.languageService.changeLang(lang);
  }
}
