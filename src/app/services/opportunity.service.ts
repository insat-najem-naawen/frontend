import { Injectable } from '@angular/core';
import {Opportunity} from '../Model/opportunity';
import {Observable, of} from 'rxjs';
import {Ressource} from '../Model/ressource';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {
  private opportunities: Opportunity[];

  constructor() {
    this.opportunities = [
      new Opportunity(1, 'google', 1, 1, 'GL', 'google.com',
        'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.',
        '27/06/2020'),
      new Opportunity(2, 'filorga', 1, 1, 'CH', 'filorga.com',
        'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.',
        '25/06/2020'),
      new Opportunity(3, 'facebook', 3, 1, 'RT', 'facebook.com',
        'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.',
        '22/06/2020'),
      new Opportunity(4, 'facebook', 3, 1, 'RT', 'facebook.com',
        'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.',
        '22/06/2020'),
      new Opportunity(5, 'facebook', 3, 1, 'RT', 'facebook.com',
        'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.',
        '22/06/2020'),
      new Opportunity(6, 'facebook', 3, 1, 'RT', 'facebook.com',
        'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.',
        '22/06/2020')
    ];
  }

  getOpportunities(): Observable<Opportunity[]> {
    return of(this.opportunities);
  }
  getOpportunitiesById(id: number): Observable<Opportunity>  {
    return of (this.opportunities.filter((opportunity) => (opportunity.id === id))[0]);
  }

  getOpportunitiesByCategory(categoryId: number): Observable<Opportunity[]> {
    return of(this.opportunities.filter((opportunity) => (opportunity.category_id === categoryId)));
  }
}
