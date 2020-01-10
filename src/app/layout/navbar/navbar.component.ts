import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {

  isActive: boolean;
  collapsed: boolean;
  showMenu: string;
  pushRightClass: string;

  @Input() collapsedF: boolean;
  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(private translate: TranslateService, public router: Router) {

  }

  ngOnInit() {
    this.isActive = false;
    this.showMenu = '';
  }

  ngOnChanges() {
    this.collapsed = this.collapsedF;
  }


  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
  }


  changeLang(language: string) {
    this.translate.use(language);
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
  }

}
