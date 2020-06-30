import { Component, OnInit } from '@angular/core';
import {Ressource} from '../Model/ressource';
import {RessourcesService} from '../services/ressources.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {expand, flyInOut, visibility} from '../animations/app.animation';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-detail-ressource',
  templateUrl: './detail-ressource.component.html',
  styleUrls: ['./detail-ressource.component.css'],
  animations: [flyInOut(), visibility(), expand()]

})
export class DetailRessourceComponent implements OnInit {
ressource: Ressource;
errMess: string;
  constructor( private ressourcesService: RessourcesService,
              private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => this.ressourcesService.getRessourceById(params['id'])))
      .subscribe((ressource) => {this.ressource = ressource[0];
          console.log(this.ressource); },
        errmess => this.errMess = <any> errmess);
      }
  lister(category: string) {
    const link = ['ressources', category];
    this.router.navigate(link);
  }
  }


