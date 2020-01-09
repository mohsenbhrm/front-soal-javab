import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class QuestionService {
  constructor(private http: HttpClient) { }

  getEssentialForQuestion(): Observable<any> {
    return this.http.get(`${environment.apiConfig.baseUrl}/api/Essentials
    `);
  }
}
