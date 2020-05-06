import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }

  // openRegisterForm() {
  //   this.dialog.closeAll();
  //   this.dialog.open(RegisterComponent, {width: '500px', height: '645px'});
  //
  // }
  open() {
    document.querySelector('.cont').classList.toggle('s--signup');
  }
}
