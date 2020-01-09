import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }
  setLogin() {
    const header = new HttpHeaders();
    const body = { username: 'mohsen', password: '123456' };
    header.set('Content-Type', 'application/json');

    this.http.post(`${environment.apiConfig.baseUrl}/api/Auth/login`, body, { headers: header }).subscribe(token => {

      if (token) {
        localStorage.setItem('authAccount', JSON.stringify(token));
        this.toastr.success('Login Successfull', 'Success');
        this.router.navigate(['/home']);
      } else {
        this.toastr.error('Login Failed', 'Error');
      }
    });
  }
}
