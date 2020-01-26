import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, Subject, BehaviorSubject, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeaderService implements OnDestroy {
  userInfo: BehaviorSubject<any> = new BehaviorSubject(
    {
      username: null,
      zirReshteh: []
    }
  );
  constructor(
    private http: HttpClient
  ) { }

  getUserInfo(): Observable<any> {
    return this.http.get(`${environment.apiConfig.baseUrl}/api/Account/GetUserInfo`).pipe(
      map(info => {
        this.userInfo.next(info);
        return info;
      })
    );
  }

  ngOnDestroy() {
    this.userInfo.complete();
    this.userInfo.unsubscribe();
  }
}
