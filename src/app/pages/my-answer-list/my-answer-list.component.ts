import { Component, OnInit, ViewChild } from '@angular/core';
import { MyAnswerListService } from './my-answer-list.service';
import { NgbAccordion, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditAnswerModalComponent } from './edit-answer-modal/edit-answer-modal.component';

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
    private answerListService: MyAnswerListService,
    private modalService: NgbModal
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

  editAnswer(item) {
    const modalRef = this.modalService.open(EditAnswerModalComponent);
    modalRef.componentInstance.item = item;

    modalRef.result.then(
      resolve => { },
      reject => { }
    );
  }

}
