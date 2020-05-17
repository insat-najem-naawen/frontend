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
  constructor(private ressource: RessourcesService,
              private router: Router) { }

  ngOnInit(): void {
    this.ressources = this.ressource.getRessources();
  }

  detail(id: number) {
    const link = ['detailRessource', id];
    this.router.navigate(link);
}
lister(category: string) {
    const link = ['ressources', category];
    this.router.navigate(link);
}
}
