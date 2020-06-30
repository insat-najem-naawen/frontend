import { Injectable } from '@angular/core';
import {User} from '../Model/user';
import {Observable, of} from 'rxjs';
import {Question} from '../Model/question';
import {catchError, delay, map} from 'rxjs/operators';
import {baseURL} from '../Model/baseURL';
import {ProcessHTTPMsgService} from './process-httpmsg.service';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
users: User[];
  baseURL = 'http://127.0.0.1:8000/api/form';
  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) {
    this.users = [
      new User(1, 'Salma', 'Hellal', 'Salma', 'assets/images/salma.jpg', [], 'salmahellal98@gmail.com'),
      new User(2, 'Maissa', 'Garrab', 'Maissa', 'assets/images/maissa.jpg', [], 'maissagarrab@gmail.com'),
      new User(3, 'Selima', 'Gadri', 'Selima', 'assets/images/selima.jpg', [], 'selimagadri@gmail.com'),
      new User(4, 'Seif', 'Mzoughi', 'Seif', 'assets/images/seif.jpg', [], 'seifmzoughi@gmail.com'),
    ];
  }
  getUsers(): Observable<User[]>  {
    return this.http.get<User[]>('/get_users').pipe(catchError(this.processHTTPMsgService.handleError));
  }
  getUserById(id: number): Observable<User>  {
    return this.http.get<User>('/get_user/' + id).pipe(catchError(this.processHTTPMsgService.handleError));
  }
  getUserByEmail(email: string): Observable<User>  {
    return this.http.get<User>('/get_user_email/' + email).pipe(catchError(this.processHTTPMsgService.handleError));
  }
  // getUserIds(): Observable<number[]> {
  //   return this.getUsers().pipe(map(users => users.map(user => user.id))).pipe(catchError(this.processHTTPMsgService.handleError));
  // }
  // putUser(user: User): void  {
  //  this.users.push(user);
  // }
  // getUsers(): Observable<User[]>  {
  //   return this.http.get<User[]>(baseURL + 'users').pipe(catchError(this.processHTTPMsgService.handleError));
  // }

  // putUser(user: User): Observable<User> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };
  //   return this.http.put<User>(baseURL + 'users/' + user.id, user, httpOptions)
  //     .pipe(catchError(this.processHTTPMsgService.handleError));
  // }

  // getUserById(id: number): Observable<User>  {
  //   return this.http.get<User>('/api/form/' + id).pipe(catchError(this.processHTTPMsgService.handleError));
  // }
// putUser(credentials): Observable<any> {
//     return this.http.post(this.link, credentials);
// }
  postUser(user: User): Observable<any> {
    // console.log(typeof (user));
    // console.log(baseURL);
   // const proxy =  'https://cors-anywhere.herokuapp.com/http://127.0.0.1:8000';
    console.log(user);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Accept-Type': 'application/json',
      })
    };
    return this.http.post('/form' , user, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }


}
