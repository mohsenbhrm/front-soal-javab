import { Injectable, Inject } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { ApiConfig } from '@app/core/common/models/api-config.model';
import { map } from 'rxjs/operators';
import { Login } from './models/login.model';


@Injectable(
  { providedIn: 'root' }
)
export class AuthService {
  private authStatus = new Subject<boolean>();
  account: any = {};
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    @Inject('api.config') private apiConfig: ApiConfig) {

  }

  login(username: string, password: string, captcha?: string, rememberMe?: boolean): Observable<Login> {
    const credential = {
      username,
      password,
      // captcha
    };
    return this.httpClient.post(`${this.apiConfig.baseUrl}/api/Account/login`, credential)
      .pipe(map((login: any) => {
        if (login.access_token) {
          this.storeToken(login); // , rememberMe);
        }
        return login;
      }
      ));
  }

  storeToken(login: Login, rememberMe?: boolean) {
    this.account = login;
    if (this.account) {
      localStorage.setItem('authAccount', JSON.stringify(this.account));
      this.authStatus.next(true);
    }
  }

  isAuthenticated() {
    return localStorage.getItem('authAccount') ? true : sessionStorage.getItem('authAccount') ? true : false;
  }

  logout() {
    localStorage.removeItem('authAccount');
    sessionStorage.removeItem('authAccount');
    // sessionStorage.removeItem('userInfoData');
    const root = this.router.routerState.snapshot.root;
    this.authStatus.next(false);
    this.router.navigate(['/login']);
    // window.location.replace('/login');

  }

  private isProfile(routeSnapshot: ActivatedRouteSnapshot) {
    let isProfile = false;
    const routeName = routeSnapshot.routeConfig ? routeSnapshot.routeConfig.path : '';

    if (routeName === 'profile') {
      return true;
    }

    if (routeSnapshot.firstChild) {
      isProfile = this.isProfile(routeSnapshot.firstChild) || isProfile;
    }

    return isProfile;
  }

  getAuthStatus(): Observable<boolean> {
    return this.authStatus.asObservable();
  }

  getAccount(): any {
    const account = localStorage.getItem('authAccount');
    if (account) {
      return JSON.parse(account);
    }
    return null;
  }

}
