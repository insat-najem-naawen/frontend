import { Component, OnInit } from '@angular/core';
import {CvService} from '../services/cv.service';
import {ActivatedRoute, Params} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Resume} from '../Model/Resume';
import {expand, flyInOut, visibility} from '../animations/app.animation';

@Component({
  selector: 'app-cv-template',
  templateUrl: './cv-template.component.html',
  styleUrls: ['./cv-template.component.css'],
  host: {
    // '[@flyInOut]': 'true',
    // 'style': 'display:block;'
  },
  animations: [flyInOut(), visibility(), expand()]
})
export class CvTemplateComponent implements OnInit {
cv: Resume;
errMess: string;
  constructor(private cvService: CvService,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => this.cvService.getCvById(params['id'])))
      .subscribe((cv) => {this.cv = cv;
          console.log(this.cv); },
        errmess => this.errMess = <any> errmess);
  }

}
