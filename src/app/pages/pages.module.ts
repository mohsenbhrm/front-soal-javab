import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { SharedModule } from '@app/shared/shared.module';



@NgModule({
  declarations: [
    QuestionComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PagesModule { }
