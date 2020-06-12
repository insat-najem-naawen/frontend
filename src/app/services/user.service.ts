import { Injectable } from '@angular/core';
import {User} from '../Model/user';
import {Observable, of} from 'rxjs';
import {Question} from '../Model/question';
import {catchError, delay} from 'rxjs/operators';
import {baseURL} from '../Model/baseURL';
import {ProcessHTTPMsgService} from './process-httpmsg.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
users: User[];
  constructor() {
    this.users = [
      new User(1, 'Salma', 'Hellal', 'Salma', 'assets/images/salma.jpg', [], 'salmahellal98@gmail.com'),
      new User(2, 'Maissa', 'Garrab', 'Maissa', 'assets/images/maissa.jpg', [], 'maissagarrab@gmail.com'),
      new User(3, 'Selima', 'Gadri', 'Selima', 'assets/images/selima.jpg', [], 'selimagadri@gmail.com'),
      new User(4, 'Seif', 'Mzoughi', 'Seif', 'assets/images/seif.jpg', [], 'seifmzoughi@gmail.com'),
    ];
  }
  getUsers(): Observable<User[]>  {
    return of(this.users);
  }
  getUserById(id: number): Observable<User>  {
    return of (this.users.filter((user) => (user.id === id))[0]).pipe(delay(2000));
  }
  getUserByEmail(email: string): Observable<User>  {
    return of (this.users.filter((user) => (user.email === email))[0]).pipe(delay(2000));
  }
  putUser(user: User): void  {
   this.users.push(user);
  }
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
  //   return this.http.get<User>(baseURL + 'users/' + id).pipe(catchError(this.processHTTPMsgService.handleError));
  // }


}
