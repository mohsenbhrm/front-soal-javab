import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionsFeedService {

  constructor(
    private http: HttpClient
  ) { }


  getInitFeeds(): Observable<any> {
    return this.http.get(`${environment.apiConfig.baseUrl}/api/SoalToUser`);
  }

  getFeedsLoadMore(id): Observable<any> {
    return this.http.get(`${environment.apiConfig.baseUrl}/api/SoalToUser/${id}`);
  }

  getNewFeeds(): Observable<any> {
    return this.http.get(`${environment.apiConfig.baseUrl}/api/SoalToUser/getNewFeeds`);
  }

  tryAnswer(id, body): Observable<any> {
    return this.http.post(`${environment.apiConfig.baseUrl}/api/Javab`, {IdSoal: id, Matn: body});
  }
}
