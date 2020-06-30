import { Component, OnInit } from '@angular/core';
import {Opportunity} from '../Model/opportunity';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {OpportunityService} from '../services/opportunity.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-detail-job',
  templateUrl: './detail-job.component.html',
  styleUrls: ['./detail-job.component.css']
})
export class DetailJobComponent implements OnInit {
opportunity: Opportunity;
errMess: string;
  constructor( private route: ActivatedRoute,
               private router: Router,
               private opportunityService: OpportunityService) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => this.opportunityService.getOpportunityById(params['id'])))
      .subscribe((opportunity) => {this.opportunity = opportunity[0];
          console.log(this.opportunity); },
        errmess => this.errMess = <any> errmess);
  }

}
