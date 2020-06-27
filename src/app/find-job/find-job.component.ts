import { Component, OnInit } from '@angular/core';
import {expand, flyInOut, visibility} from '../animations/app.animation';

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.css'],
  animations: [flyInOut(), visibility(), expand()]
})
export class FindJobComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
