import { Component, OnInit } from '@angular/core';
import {expand, flyInOut, visibility} from '../animations/app.animation';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css'],
  animations: [flyInOut(), visibility(), expand()]
})
export class PostJobComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
