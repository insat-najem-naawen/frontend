import { Injectable } from '@angular/core';
import {Question} from '../Model/question';
import {Observable, of} from 'rxjs';
import {Ressource} from '../Model/ressource';
import {catchError, delay} from 'rxjs/operators';
import {UserService} from './user.service';
import {User} from '../Model/user';
import {Answer} from '../Model/answer';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ProcessHTTPMsgService} from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
questions: Question[];
users: User[];
  private d: Date;
  constructor(private userService: UserService,
              private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) {
    this.userService.getUsers().subscribe((users) => this.users = users);
    console.log(this.users);
    this.d = new Date();
    this.questions = [
      // tslint:disable-next-line:max-line-length
   new Question(this.users[0], 'description', 'Sunday 28/06/2020', []),
      // tslint:disable-next-line:max-line-length
    new Question( this.users[1], 'description', 'Sunday 28/06/2020', []),
      new Question(  this.users[2], 'description', 'Sunday 28/06/2020', []),
      new Question( this.users[3], 'description', 'Sunday 28/06/2020', [])

  ];
  }
  // getQuestions(): Observable<Question[]>  {
  //   return of(this.questions);
  // }
  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>('/get_forum').pipe(catchError(this.processHTTPMsgService.handleError));
  }
  // getQuestionsById(id: number): Observable<Question>  {
  //   return of (this.questions.filter((question) => (question.id === id))[0]);
  // }
  //




  getQuestionsById(id: number): Observable<Question> {

    return this.http.get<Question>('/forum/' + id).pipe(catchError(this.processHTTPMsgService.handleError));

  }
  postQuestion(question: Question): Observable<any> {
    // console.log(typeof (user));
    // console.log(baseURL);
    // const proxy =  'https://cors-anywhere.herokuapp.com/http://127.0.0.1:8000';
    console.log('forum service', question);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Accept-Type': 'application/json',
      })
    };
    return this.http.post('/forum' , question, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

}
