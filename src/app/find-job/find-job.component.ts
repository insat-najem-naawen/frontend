import { Component, OnInit } from '@angular/core';
import {Opportunity} from '../Model/opportunity';
import {OpportunityService} from '../services/opportunity.service';
import {Router} from '@angular/router';
import {expand, flyInOut, visibility} from '../animations/app.animation';

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.css'],
  animations: [flyInOut(), visibility(), expand()]
})
export class FindJobComponent implements OnInit {
  jOpportunities: Opportunity[];
  erreur: string;

  constructor(private opportunity: OpportunityService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.opportunity.getOpportunitiesByCategory('job').subscribe(opportunities => this.jOpportunities = opportunities,
      error => this.erreur = <any>error);
  }
  detail(id: number) {
    const link = ['detailJob', id];
    this.router.navigate(link);
  }
}
