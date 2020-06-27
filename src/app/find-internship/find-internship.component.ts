import { Component, OnInit } from '@angular/core';
import {expand, flyInOut, visibility} from '../animations/app.animation';

@Component({
  selector: 'app-find-internship',
  templateUrl: './find-internship.component.html',
  styleUrls: ['./find-internship.component.css'],
  animations: [flyInOut(), visibility(), expand()]
})
export class FindInternshipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
