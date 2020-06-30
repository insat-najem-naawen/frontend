import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Opportunity} from '../Model/opportunity';
import {Resume} from '../Model/Resume';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {ProcessHTTPMsgService} from './process-httpmsg.service';
import {User} from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cv: Resume;

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) {
    // this.cv = new Resume('Garrab', 'Maïssa', 'student', 'cite olympique', 'maissa@gmail.com',
    //   25896314, ['linux', 'java', 'c++'], ['frensh', 'english', 'arabic'],
    //   ['google', 'none', 'none'], ['INSAT', 'none', 'none']);
  }
  // getCv(): Observable<Cv> {
  //   return of(this.cv);
  // }

  postCv(cv: Resume): Observable<any> {

    console.log(cv);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Accept-Type': 'application/json',
      })
    };
    return this.http.post('/post_resume' , cv, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getCvById(id: number): Observable<Resume> {
    return this.http.get<Resume>('/get_resume/' + id).pipe(catchError(this.processHTTPMsgService.handleError));

  }

}
