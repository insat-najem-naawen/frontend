import { Component, OnInit } from '@angular/core';
import {Ressource} from '../Model/ressource';
import {RessourcesService} from '../services/ressources.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-liste-ressources',
  templateUrl: './liste-ressources.component.html',
  styleUrls: ['./liste-ressources.component.css']
})
export class ListeRessourcesComponent implements OnInit {
  ressources: Ressource[];
  cRessources: Ressource[];
  dRessources: Ressource[];
  nRessources: Ressource[];
  constructor(private ressource: RessourcesService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.ressource.getRessources().subscribe((ressources) => this.ressources = ressources);
    this.ressource.getRessourcesByCategory('formation').subscribe(ressources => this.cRessources = ressources);
    this.ressource.getRessourcesByCategory('documents').subscribe(ressources => this.dRessources = ressources);
    this.ressource.getRessourcesByCategory('News').subscribe(ressources => this.nRessources = ressources);

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
