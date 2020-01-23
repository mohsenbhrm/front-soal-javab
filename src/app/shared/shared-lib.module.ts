import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';
import { TagInputModule } from 'ngx-chips';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass: 'toast-bottom-left'}),
    NgbDropdownModule,
    NgbAccordionModule,
    TagInputModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule,
    NgbDropdownModule,
    NgbAccordionModule,
    TagInputModule,
    TranslateModule
  ]
})
export class SharedLibModule { }
