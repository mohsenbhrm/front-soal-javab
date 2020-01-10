import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public router: Router) {
    this.router.events.subscribe(val => {
      if (
          val instanceof NavigationEnd &&
          window.innerWidth <= 992
           ) {
          this.collapedSideBar = true;
      }
  });  }

  collapedSideBar = false;

  ngOnInit() {
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }

}
