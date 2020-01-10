import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  collapsed: boolean;

  @Input() collapsedF: boolean;
  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(private translate: TranslateService, public router: Router) {

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
    localStorage.removeItem('isLoggedin');
  }

  changeLang(language: string) {
    this.translate.use(language);
  }

}
