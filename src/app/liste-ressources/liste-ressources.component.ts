import {Component, Inject, OnInit} from '@angular/core';
import {Ressource} from '../Model/ressource';
import {RessourcesService} from '../services/ressources.service';
import {Router} from '@angular/router';
import {expand, flyInOut, visibility} from '../animations/app.animation';

@Component({
  selector: 'app-liste-ressources',
  templateUrl: './liste-ressources.component.html',
  styleUrls: ['./liste-ressources.component.css'],
  host: {
    // '[@flyInOut]': 'true',
    // 'style': 'display:block;'
  },
  animations: [flyInOut(), visibility(), expand()]
})
export class ListeRessourcesComponent implements OnInit {
  ressources: Ressource[];
  cRessources: Ressource[];
  dRessources: Ressource[];
  nRessources: Ressource[];
  errMess: string;
  constructor(private ressource: RessourcesService,
              private router: Router,
              @Inject('BaseURL') private BaseURL) {

  }

  ngOnInit(): void {
    // this.ressource.getRessources().subscribe((ressources) => this.ressources = ressources,
    //   errmess => this.errMess = <any>errmess);
    this.ressource.getRessourcesByCategory('formation').subscribe(ressources => this.cRessources = ressources,
      errmess => this.errMess = <any>errmess);
    this.ressource.getRessourcesByCategory('documents').subscribe(ressources => this.dRessources = ressources,
      errmess => this.errMess = <any>errmess);
    this.ressource.getRessourcesByCategory('News').subscribe(ressources => this.nRessources = ressources,
      errmess => this.errMess = <any>errmess);

  }

  detail(id: number) {
    const link = ['detailRessource', id];
    this.router.navigate(link);
}
lister(category: string) {
    const link = ['ressources', category];
    this.router.navigate(link);
}

  openSearch() {
    document.getElementById('myOverlay').style.display = 'block';
  }

   closeSearch() {
    document.getElementById('myOverlay').style.display = 'none';
  }
}
