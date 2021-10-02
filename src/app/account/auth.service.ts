import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpUtilService } from '../services/headers-http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private headers : HttpUtilService
    ) { }

  authentication(): Promise<any> {
    return this.http.get(`${environment.API_URL}/`, this.headers.httpOptions()).toPromise();
  }
}
