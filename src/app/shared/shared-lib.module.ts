import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass: 'toast-bottom-left'}),
    NgbDropdownModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule,
    NgbDropdownModule,
    TranslateModule
  ]
})
export class SharedLibModule { }
