import { Component, OnInit } from '@angular/core';
import { MyQuestionListService } from './my-question-list.service';

@Component({
  selector: 'app-my-question-list',
  templateUrl: './my-question-list.component.html',
  styleUrls: ['./my-question-list.component.scss']
})
export class MyQuestionListComponent implements OnInit {

  questionList: any;
  answers: any;
  constructor(
    private myQListService: MyQuestionListService
  ) { }

  ngOnInit() {
    this.myQListService.getMyQuestions().subscribe(res => {
      this.questionList = res;
    });
  }

  getDetailsQuestion($event) {
    if ($event.nextState) {
      this.myQListService.getMyQuestionAnswers($event.panelId).subscribe(res => {
        this.answers = res;
      });
    }

  }


  deleteQuestion(item) {
    this.myQListService.deleteQuestion(item.soalId).subscribe(res => {
      this.myQListService.getMyQuestions().subscribe(list => {
        this.questionList = list;
      });

    });
  }

}