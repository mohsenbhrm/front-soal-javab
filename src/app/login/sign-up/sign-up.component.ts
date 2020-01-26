import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@app/core/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  signUpButtonDisabled = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  initForm() {
    this.signUpForm = this.fb.group({
      userName: ['', [Validators.required]],
      passWord: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassWord: ['', [Validators.required]],
      name: ['', [Validators.required]],
      family: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    },
      {
        validator: this.MustMatch('passWord', 'repeatPassWord')
      });
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  ngOnInit() {
    this.initForm();
  }

  onSignedUp() {
    if (this.signUpForm.invalid) {
      return;
    }

    this.loading = true;
    const body = this.signUpForm.getRawValue();

    this.authService.signUp(body).subscribe(
      reponse => {
        this.toastr.success('ثبت نام با موفقیت انجام شد. خوش آمدید', 'ثبت نام موفق');

      }, err => {
        this.toastr.error(err.error.value, 'ثبت نام نا موفق');
        this.signUpForm.controls.passWord.setValue('');
        this.signUpForm.controls.repeatPassWord.setValue('');
      });

  }

}
