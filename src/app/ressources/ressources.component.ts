import {Component, Input, OnInit} from '@angular/core';
import {Ressource} from '../Model/ressource';
import {RessourcesService} from '../services/ressources.service';
import {Router} from '@angular/router';
import {expand, flyInOut, visibility} from '../animations/app.animation';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css'],
  host: {
    '[@flyInOut]': 'true',
    // 'style': 'display: block;'
  },
  animations: [flyInOut(), visibility(), expand()]
})
export class RessourcesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }
  openSearch() {
    document.getElementById('myOverlay').style.display = 'block';
  }

  closeSearch() {
    document.getElementById('myOverlay').style.display = 'none';
  }

}
