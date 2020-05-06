import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {RegisterComponent} from '../register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  go() {
    const link = ['vision'];
    this.router.navigate(link);
  }
  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '1000px', height: '528px'} );
  }
}
