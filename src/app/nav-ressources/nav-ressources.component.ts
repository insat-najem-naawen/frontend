import { Component, OnInit } from '@angular/core';
import {Ressource} from '../Model/ressource';
import {RessourcesService} from '../services/ressources.service';
import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-nav-ressources',
  templateUrl: './nav-ressources.component.html',
  styleUrls: ['./nav-ressources.component.css']
})
export class NavRessourcesComponent implements OnInit {

  ressources: Ressource[];
  constructor(private ressource: RessourcesService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.ressource.getRessources().subscribe((ressource) => this.ressources = ressource);
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

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '1000px', height: '528px'} );
  }
}
