import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterComponent} from '../register/register.component';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email: string;
username: string;

  LoginForm: FormGroup;
  @ViewChild('Loginform') LoginFormDirective;
  formErrors = {

    'email': '',
    'password': ''
  };
  validationMessages = {

    'email': {
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
              private router: Router) {
    this.createForm();
  }
  ngOnInit(): void {
  }


  createForm() {

    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
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
    const link = ['forum', this.email];
    this.router.navigate(link);
    this.LoginForm.reset({
      email: '',
      password: ''
    });
    this.LoginFormDirective.resetForm();
    this.dialogRef.close();

  }

  close() {
    this.dialogRef.close();
  }


  login(credentials) {
    console.log(credentials);
    this.authentication.login(credentials).subscribe(
      (response) => {
        console.log(response);
        const token = response.id;
        console.log('token', token);
        localStorage.setItem('token', token);
        console.log(token);
        // this.router.navigate(link);
      },
      (error) => {
        console.log(error, `erreur`);
      }
    );
  }

  }
