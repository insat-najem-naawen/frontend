import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  // link = 'http://127.0.0.1:8000/api/login_check';
  constructor(private http: HttpClient) { }

  isLogged() {
    return (!! localStorage.getItem('token'));
  }

  login(credentials): Observable<any> {
    console.log('voilà', credentials);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Accept-Type': 'application/json',
      })
    };
    return this.http.post('/api/login_check', credentials, httpOptions);
  }
  logout() {
    localStorage.removeItem('token');
  }
}
