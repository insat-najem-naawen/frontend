import { Component, OnInit } from '@angular/core';
import {expand, flyInOut, visibility} from '../animations/app.animation';
import {Opportunity} from '../Model/opportunity';
import {OpportunityService} from '../services/opportunity.service';
import {Router} from '@angular/router';
import {PostFormComponent} from '../post-form/post-form.component';
import {MatDialog} from '@angular/material/dialog';
import {Postform1Component} from '../postform1/postform1.component';

@Component({
  selector: 'app-find-internship',
  templateUrl: './find-internship.component.html',
  styleUrls: ['./find-internship.component.css'],
  animations: [flyInOut(), visibility(), expand()]
})
export class FindInternshipComponent implements OnInit {
  iOpportunities: Opportunity[];
  erreur: string;
  constructor(private opportunity: OpportunityService,
              private router: Router,
              public dialog: MatDialog) {
    this.opportunity.getOpportunitiesByCategory('internship').subscribe(opportunities => this.iOpportunities = opportunities,
      error => this.erreur = <any>error);
  }

  ngOnInit(): void {
  }
  detail(id: number) {
    const link = ['detailInternship', id];
    this.router.navigate(link);
  }
  postOpp() {
    // const link = ['postJob/postForm'];
    // this.router.navigate(link);
    this.dialog.open(Postform1Component, {width: '1000px', height: '528px'} );
  }
}
