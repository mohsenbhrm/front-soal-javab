import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionsFeedService } from './questions-feed.service';

@Component({
  selector: 'app-questions-feed',
  templateUrl: './questions-feed.component.html',
  styleUrls: ['./questions-feed.component.scss']
})
export class QuestionsFeedComponent implements OnInit, OnDestroy {

  questionList: any[];
  private timerHandleId;
  constructor(
    private questionFeedService: QuestionsFeedService
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

  getDetailsQuestion($event) { }

  ngOnDestroy() {
    clearInterval(this.timerHandleId);
  }

}
