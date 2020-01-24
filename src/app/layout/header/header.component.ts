import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/auth/auth.service';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userInfo;

  constructor(
    private translate: TranslateService,
    public router: Router,
    private authService: AuthService,
    private headerService: HeaderService
  ) {

  }

  ngOnInit() {
    this.headerService.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
    });
  }

  onLoggedout() {
    this.authService.logout();
  }

  changeLang(language: string) {
    this.translate.use(language);
  }

}
