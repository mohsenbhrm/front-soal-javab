import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { SharedModule } from '@app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyQuestionListComponent } from './my-question-list/my-question-list.component';
import { MyAnswerListComponent } from './my-answer-list/my-answer-list.component';
import { QuestionsFeedComponent } from './questions-feed/questions-feed.component';



@NgModule({
  declarations: [
    QuestionComponent,
    DashboardComponent,
    MyQuestionListComponent,
    MyAnswerListComponent,
    QuestionsFeedComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PagesModule { }
