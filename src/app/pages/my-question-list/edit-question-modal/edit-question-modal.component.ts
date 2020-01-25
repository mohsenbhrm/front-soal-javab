import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { TagModel } from '@app/pages/question/question.component';
import { QuestionService } from '@app/pages/question/question.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-question-modal',
  templateUrl: './edit-question-modal.component.html',
  styleUrls: ['./edit-question-modal.component.scss']
})
export class EditQuestionModalComponent implements OnInit {
  @Input() item;

  editQuestionForm: FormGroup;

  disabled = false;

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.editQuestionForm = this.fb.group({
      questionBody: [null, Validators.required],
      tags: [[], Validators.required]
    });
  }

  checkIfAvalable($event) {
    if (typeof ($event.value) === 'string') {

      const url = `${environment.apiConfig.baseUrl}/api/Tags/${this.editQuestionForm.controls.subField.value}/${$event.display}/`;
      return this.questionService.tryTagSearch(url).subscribe((res: TagModel[]) => {
        const result = res.find(el => el.display === $event.display);
        if (result) {
          const tagRes = this.editQuestionForm.controls.tags.value.find(el => el.display === $event.display);
          tagRes.value = result.value;
        }
      });
    }
  }

  requestAutocompleteItems = (text: string): Observable<any> => {
    // if (this.editQuestionForm.controls.subField.hasError('required')) {
    //   this.editQuestionForm.controls.subField.markAsTouched();
    //   this.editQuestionForm.controls.field.markAsTouched();
    //   return (of([]).pipe(map(data => {
    //     return data;
    //   })));
    // } else {
    const url = `${environment.apiConfig.baseUrl}/api/Tags/${this.item.idZirreshteh}/${text}`;
    return this.questionService.tryTagSearch(url);
    // }
  }

  editQuestion() { }

}
