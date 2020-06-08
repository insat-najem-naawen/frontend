import { Component, OnInit } from '@angular/core';
import {Ressource} from '../Model/ressource';
import {RessourcesService} from '../services/ressources.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail-ressource',
  templateUrl: './detail-ressource.component.html',
  styleUrls: ['./detail-ressource.component.css']
})
export class DetailRessourceComponent implements OnInit {
ressource: Ressource;
  constructor( private ressourcesService: RessourcesService,
              private activatedRoute: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    // console.log(id);
    this.ressourcesService.getRessourcesById(id).subscribe((ressource) => this.ressource = ressource);
    console.log(this.ressource);
      }
  lister(category: string) {
    const link = ['ressources', category];
    this.router.navigate(link);
  }
  }


