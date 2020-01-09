import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from './question.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  registerQuestion: FormGroup;
  fields: any[];
  activeSubFields: any[];

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.questionService.getEssentialForQuestion().subscribe(fields => {
      this.fields = fields;
    });
    this.initForm();

    this.registerQuestion.controls.field.valueChanges.subscribe(changes => {
      const x = this.fields.find(el => el.id === changes);
      if (x) {
        this.activeSubFields = x.zirreshteh;
      }

    });
  }

  initForm() {
    this.registerQuestion = this.fb.group({
      field: [null, Validators.required],
      subField: [null, Validators.required],
      questionBody: [null, Validators.required],
      tags: [null, Validators.required]
    });
  }

}
