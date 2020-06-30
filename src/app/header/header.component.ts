import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {RegisterComponent} from '../register/register.component';
import {AuthentificationService} from '../services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  visibility = false;

  constructor(private router: Router,
              public dialog: MatDialog,
              private authentificationService: AuthentificationService) { }

  ngOnInit(): void {
  }
  go() {
    const link = ['vision'];
    this.router.navigate(link);
  }
  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '1000px', height: '528px'} );
  }
  closeLoginForm() {
    this.dialog.closeAll();
  }
  logout() {
    this.authentificationService.logout();
    console.log('entrer');
  }
  show() {
    this.visibility = !this.visibility;
  }
}
