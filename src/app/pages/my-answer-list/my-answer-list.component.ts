import { Component, OnInit, ViewChild } from '@angular/core';
import { MyAnswerListService } from './my-answer-list.service';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-answer-list',
  templateUrl: './my-answer-list.component.html',
  styleUrls: ['./my-answer-list.component.scss']
})
export class MyAnswerListComponent implements OnInit {
  @ViewChild('acc', { static: false }) acc: NgbAccordion;

  answerList;
  question;
  constructor(
    private answerListService: MyAnswerListService
  ) { }

  ngOnInit() {
    this.answerListService.getMyAnswersList().subscribe(res => {
      this.answerList = res;
    });
  }

  getAnswerDetails($event) {
    if ($event.nextState) {
      const id = $event.panelId.substring(0, $event.panelId.indexOf('-'));
      this.answerListService.getSoalById(id).subscribe(res => {
        this.question = res;
      });
    }
  }

  deleteAnswer(item) {
    this.answerListService.deleteAnswer(item.id).subscribe(res => {
      this.answerListService.getMyAnswersList().subscribe(list => {
        this.answerList = list;
      });

    });
  }

}
