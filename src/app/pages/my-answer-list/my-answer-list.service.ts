import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyAnswerListService {

  constructor(private http: HttpClient) { }

  getMyAnswersList(): Observable<any> {
    return this.http.get(`${environment.apiConfig.baseUrl}/api/Javab`);
  }

  getSoalById(id): Observable<any> {
    return this.http.get(`${environment.apiConfig.baseUrl}/api/Soal/${id}`);
  }

  deleteAnswer(id): Observable<any> {
    return this.http.delete(`${environment.apiConfig.baseUrl}/api/Javab/${id}`);
  }
}
