import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'any'
})
export class HttpUtilService {
	private url = environment.API_URL

	constructor(
		private http: HttpClient,
	) { }

	httpOptions() {
		let options = {
			headers: new HttpHeaders({
				Authorization: "Bearer " + localStorage.getItem('token'),
			}).set("Content-Type", "application/json")
		}
		return options;
	}
}
