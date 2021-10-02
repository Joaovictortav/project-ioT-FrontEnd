import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpUtilService } from '../services/headers-http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private headers : HttpUtilService
    ) { }

  login (model: any): Observable<any> {
    return this.http.post(`${environment.API_URL}/login`, model, this.headers.httpOptions())
  }
}
