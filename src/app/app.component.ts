import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'fa']);
    this.translate.setDefaultLang('fa');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fa/) ? browserLang : 'fa');
  }
  title = 'front-soal-javab';
}
