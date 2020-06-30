import { Injectable } from '@angular/core';
import {Opportunity} from '../Model/opportunity';
import {Observable, of} from 'rxjs';
import {Ressource} from '../Model/ressource';
import {catchError, delay} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ProcessHTTPMsgService} from './process-httpmsg.service';
import {User} from '../Model/user';
import {Question} from '../Model/question';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {
  private opportunities: Opportunity[];

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService
              ) {
    // this.opportunities = [
    //   new Opportunity(1, 'google', 1, 1, 'GL', 'google.com',
    //     'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.',
    //     '27/06/2020'),
    //   new Opportunity(2, 'filorga', 1, 1, 'CH', 'filorga.com',
    //     'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.',
    //     '25/06/2020'),
    //   new Opportunity(3, 'facebook', 3, 1, 'RT', 'facebook.com',
    //     'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.',
    //     '22/06/2020'),
    //   new Opportunity(4, 'facebook', 3, 1, 'RT', 'facebook.com',
    //     'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.',
    //     '22/06/2020'),
    //   new Opportunity(5, 'facebook', 3, 1, 'RT', 'facebook.com',
    //     'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.',
    //     '22/06/2020'),
    //   new Opportunity(6, 'facebook', 3, 1, 'RT', 'facebook.com',
    //     'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.',
    //     '22/06/2020'),
    //   new Opportunity(7, 'google', 1, 2, 'GL', 'google.com',
    //     'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.',
    //     '27/06/2020'),
    //   new Opportunity(8, 'filorga', 1, 2, 'CH', 'filorga.com',
    //     'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.',
    //     '25/06/2020'),
    //   new Opportunity(9, 'facebook', 3, 2, 'RT', 'facebook.com',
    //     'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.',
    //     '22/06/2020'),
    //   new Opportunity(10, 'facebook', 3, 2, 'RT', 'facebook.com',
    //     'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.',
    //     '22/06/2020'),
    //   new Opportunity(11, 'facebook', 3, 2, 'RT', 'facebook.com',
    //     'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.',
    //     '22/06/2020'),
    //   new Opportunity(12, 'facebook', 3, 2, 'RT', 'facebook.com',
    //     'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.',
    //     '22/06/2020')
    // ];
  }

  // getOpportunities(): Observable<Opportunity[]> {
  //   return of(this.opportunities);
  // }

  getOpportunities(): Observable<Opportunity[]> {
    return this.http.get<Opportunity[]>('/get_oppor/').pipe(catchError(this.processHTTPMsgService.handleError));
  }
  // getOpportunitiesById(id: number): Observable<Opportunity>  {
  //   return of (this.opportunities.filter((opportunity) => (opportunity.id === id))[0]);
  // }

  getOpportunitiesByCategory(category: string): Observable<Opportunity[]> {
    return this.http.get<Opportunity[]>( '/get_oppor/' + category ).pipe(catchError(this.processHTTPMsgService.handleError));

  }

//   postOpportunity(opp: Opportunity): void {
// this.opportunities.push(opp);
//   }

  postOpportunity(opportunity: Opportunity): Observable<any> {
    // console.log(typeof (user));
    // console.log(baseURL);
    // const proxy =  'https://cors-anywhere.herokuapp.com/http://127.0.0.1:8000';
    console.log(opportunity);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Accept-Type': 'application/json',
      })
    };
    return this.http.post('/opportunity/form' , opportunity, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }


  getOpportunityById(id: number): Observable<Opportunity>  {
    return this.http.get<Opportunity>('/get_oppor_by_id/' + id).pipe(catchError(this.processHTTPMsgService.handleError));
  }

  // getOpportunities(): Observable<User>  {
  //   return this.http.get<User>().pipe(catchError(this.processHTTPMsgService.handleError));
  // }
}
