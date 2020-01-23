import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { TagModel } from './question.component';

@Injectable({ providedIn: 'root' })
export class QuestionService {
  constructor(private http: HttpClient) { }

  getEssentialForQuestion(): Observable<any> {
    return this.http.get(`${environment.apiConfig.baseUrl}/api/Essentials`);
  }

  tryTagSearch(url): Observable<any> {
    return this.http.get(url)
      .pipe(map((data: any) => {
        return data.map(d => {
          const tagData: TagModel = {
            value: d.id,
            display: d.name
          };
          return tagData;
        });
      }));
  }

  registerQuestion(body): Observable<any> {
    return this.http.post(`${environment.apiConfig.baseUrl}/api/Soal`, body);
  }

}
