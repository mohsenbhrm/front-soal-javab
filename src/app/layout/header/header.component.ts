import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '@app/core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  collapsed: boolean;

  @Input() collapsedF: boolean;
  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(
    private translate: TranslateService,
    public router: Router,
    private authService: AuthService
  ) {

  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.collapsed = this.collapsedF;
  }

  toggleSidebar() {
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);

  }


  onLoggedout() {
    this.authService.logout();
  }

  changeLang(language: string) {
    this.translate.use(language);
  }

}
