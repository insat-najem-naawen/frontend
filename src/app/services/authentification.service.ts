import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  link = 'http://127.0.0.1:8000/api/login_check';
//   constructor(private http: HttpClient) { }
//
//   isLogged() {
//     return (!! localStorage.getItem('token'));
//   }
//
//   login(credentials): Observable<any> {
//     return this.http.post(this.link, credentials);
//   }
//   logout() {
//     localStorage.removeItem('token');
//   }
}
