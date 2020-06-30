import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterComponent} from '../register/register.component';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../Model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// email: string;
username: string;
user: User;
  LoginForm: FormGroup;
   // ids: number[];

  @ViewChild('Loginform') LoginFormDirective;
  formErrors = {

    'username': '',
    'password': ''
  };
  validationMessages = {

    'username': {
      'required': 'email required.',
      'email': 'email is not in valid format'
    },

    'password': {
      'required': 'password required.'
    }
  };

  constructor(public dialog: MatDialog,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<LoginComponent>,
              @Inject('BaseURL') private BaseURL,
              private authentication: AuthentificationService,
              private router: Router,
              private userService: UserService) {
    this.createForm();
  }
  ngOnInit(): void {
  }


  createForm() {

    this.LoginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.LoginForm.valueChanges.subscribe(data => this.onValueChangedLogin(data));
    this.onValueChangedLogin(); // (re)set form validations messages
  }

  onValueChangedLogin(data?: any) {
    if (!this.LoginForm) {return;}
    const form = this.LoginForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors ) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }

      }
    }
  }


  openRegisterForm() {
    this.dialog.closeAll();
    this.dialog.open(RegisterComponent, {width: '1000px', height: '530px'} );
  }


  // // open() {
  // //   document.querySelector('.cont').classList.toggle('s--signup');
  // }

  onSubmit() {
    // console.log(this.LoginForm.value);
    // console.log(this.email);
    // const link = ['forum'];
    // this.router.navigate(link);
    this.LoginForm.reset({
      username: '',
      password: ''
    });
    this.LoginFormDirective.resetForm();
    this.dialogRef.close();

  }

  close() {
    this.dialogRef.close();
  }


  login(credentials, username: string) {
    console.log(credentials);
    this.authentication.login(credentials).subscribe(
      (response) => {
        console.log(response);
        const token = response.token;
        console.log('token', token);
        localStorage.setItem('token', token);
        console.log(token);
        // this.router.navigate(link);
        console.log('email login', username);
        this.userService.getUserByEmail(username).subscribe((user) => {this.user = user;
        console.log ('le user login by email ', this.user);
        console.log('user login ', this.user);
        console.log(this.user[0].id);
        const id = this.user[0].id;
          const link = ['forum', id];
          this.router.navigate(link);
        },
          (error) => console.log(error));
      },
      (error) => {
        console.log(error, `erreur`);
        this.dialog.open(RegisterComponent, {width: '1000px', height: '528px'});
      }
    );
  }

  }
