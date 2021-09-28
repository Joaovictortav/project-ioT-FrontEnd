import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login (model: any): Observable<any> {
    return this.http.post(`${environment.API_URL}`, model)
  }
}
