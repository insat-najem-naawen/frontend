import { Component, OnInit } from '@angular/core';
import {PostFormComponent} from '../post-form/post-form.component';
import {MatDialog} from '@angular/material/dialog';
import {CvFormComponent} from '../cv-form/cv-form.component';
import {expand, flyInOut, visibility} from '../animations/app.animation';

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css'],
  host: {
    // '[@flyInOut]': 'true',
    // 'style': 'display:block;'
  },
  animations: [flyInOut(), visibility(), expand()]
})
export class CreateCvComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  postCv() {

    this.dialog.open(CvFormComponent, {width: '1500px', height: '580px'} );
  }
}
