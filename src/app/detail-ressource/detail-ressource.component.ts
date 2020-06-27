import { Component, OnInit } from '@angular/core';
import {Ressource} from '../Model/ressource';
import {RessourcesService} from '../services/ressources.service';
import {ActivatedRoute, Router} from '@angular/router';
import {expand, flyInOut, visibility} from '../animations/app.animation';

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
              private activatedRoute: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    // console.log(id);
    this.ressourcesService.getRessourcesById(id).subscribe((ressource) => this.ressource = ressource,
      errmess => this.errMess = <any>errmess);
    console.log(this.ressource);
      }
  lister(category: string) {
    const link = ['ressources', category];
    this.router.navigate(link);
  }
  }


