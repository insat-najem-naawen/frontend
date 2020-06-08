import { Component, OnInit } from '@angular/core';
import {Ressource} from '../Model/ressource';
import {RessourcesService} from '../services/ressources.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category-ressources',
  templateUrl: './category-ressources.component.html',
  styleUrls: ['./category-ressources.component.css']
})
export class CategoryRessourcesComponent implements OnInit {
ressources: Ressource[];
  constructor(private ressourcesService: RessourcesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const category = this.activatedRoute.snapshot.params['category'];
    console.log(category);
    this.ressourcesService.getRessourcesByCategory(String(category)).subscribe(ressources => this.ressources = ressources);
    console.log(this.ressources);
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
