import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionsFeedService } from './questions-feed.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-questions-feed',
  templateUrl: './questions-feed.component.html',
  styleUrls: ['./questions-feed.component.scss']
})
export class QuestionsFeedComponent implements OnInit, OnDestroy {

  questionList: any[];
  answer: string;

  loadMoreLoading = false;
  answerLoading = false;
  private timerHandleId;
  constructor(
    private questionFeedService: QuestionsFeedService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.questionFeedService.getInitFeeds().subscribe(res => {
      this.questionList = res;
    });

    this.timerHandleId = setInterval(() => {
      this.questionFeedService.getNewFeeds().subscribe((newFeed: any[]) => {
        if (newFeed) {
          newFeed.forEach(el => {
            this.questionList.unshift(el);
          });
          this.questionList = [...this.questionList];
        }
      });
    }, 60000);
  }

  loadMore() {
    this.loadMoreLoading = true;
    this.questionFeedService.getFeedsLoadMore(this.questionList[this.questionList.length - 1].soalId).subscribe(
      moreQuestion => {
        this.loadMoreLoading = false;
        moreQuestion.forEach(el => {
          this.questionList.push(el);
        });
      },
      err => {
        this.loadMoreLoading = false;
      });
  }

  getDetailsQuestion($event) { }

  sendAnswer(item) {
    this.answerLoading = true;
    this.questionFeedService.tryAnswer(item.soalId, this.answer).subscribe(
      resp => {
        this.answerLoading = false;
        this.toastrService.success('جواب با موفقیت ثبت شد', 'ثبت پاسخ');
        this.answer = '';
      },
      err => {
        this.answerLoading = false;
        this.toastrService.error('ثبت جواب ناموفق بود', 'ثبت پاسخ');
        this.answer = '';
      });
  }

  ngOnDestroy() {
    clearInterval(this.timerHandleId);
  }

}
