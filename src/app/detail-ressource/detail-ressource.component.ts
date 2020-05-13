import { Component, OnInit } from '@angular/core';
import {Ressource} from '../Model/ressource';
import {RessourcesService} from '../services/ressources.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-ressource',
  templateUrl: './detail-ressource.component.html',
  styleUrls: ['./detail-ressource.component.css']
})
export class DetailRessourceComponent implements OnInit {
ressource: Ressource;
  constructor( private ressourcesService: RessourcesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log(id);
    this.ressource = this.ressourcesService.getRessourcesById(id);
    console.log(this.ressource);
      }
  }


