import { Component, OnInit } from '@angular/core';
import {Ressource} from '../Model/ressource';
import {RessourcesService} from '../services/ressources.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-ressources',
  templateUrl: './nav-ressources.component.html',
  styleUrls: ['./nav-ressources.component.css']
})
export class NavRessourcesComponent implements OnInit {

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

  openSearch() {
    document.getElementById('myOverlay').style.display = 'block';
  }

  closeSearch() {
    document.getElementById('myOverlay').style.display = 'none';
  }
}
