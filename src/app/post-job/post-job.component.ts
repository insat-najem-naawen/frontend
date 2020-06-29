import { Component, OnInit } from '@angular/core';
import {expand, flyInOut, visibility} from '../animations/app.animation';
import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {MatDialog} from '@angular/material/dialog';
import {Postform1Component} from '../postform1/postform1.component';
import {PostFormComponent} from '../post-form/post-form.component';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css'],
  animations: [flyInOut(), visibility(), expand()]
})
export class PostJobComponent implements OnInit {

  constructor(private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  postOpp() {
    // const link = ['postJob/postForm'];
    // this.router.navigate(link);
    this.dialog.open(PostFormComponent, {width: '1000px', height: '528px'} );
  }

}
