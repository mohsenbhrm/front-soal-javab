import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginButtonDisabled = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  onLoggedin() {
    this.loginButtonDisabled = true;
    if (this.loginForm.invalid) {
      this.loginButtonDisabled = false;
      return;
    } else {
      const header = new HttpHeaders();
      const body = {
        username: this.loginForm.controls.userName.value,
        password: this.loginForm.controls.passWord.value
      };
      header.set('Content-Type', 'application/json');

      // localStorage.setItem('authAccount', JSON.stringify('token'));
      // this.router.navigate(['/home']);

      this.http.post(`${environment.apiConfig.baseUrl}/api/Auth/login`, body, { headers: header }).subscribe(token => {
        this.loginButtonDisabled = false;
        if (token) {
          localStorage.setItem('authAccount', JSON.stringify(token));
          this.toastr.success('Login Successfull', 'Success');
          this.router.navigate(['/home']);
        } else {
          this.toastr.error('Login Failed', 'Error');
        }
      },
        err => {
          this.loginButtonDisabled = false;
          this.toastr.error('Login Failed', 'Error');
        });
    }

  }

  initForm() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      passWord: ['', [Validators.required]]
    });
  }
}
