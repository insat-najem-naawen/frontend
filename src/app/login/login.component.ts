import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterComponent} from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email: string;
firstname: string;
lastname: string;
username: string;
email_reg: string;
password_reg: string;
userId = 1;
  LoginForm: FormGroup;
  @ViewChild('Loginform') LoginFormDirective;
  formErrors = {
    'firstname' : '',
    'lastname': '',
    'email': '',
    'username': '',
    'password': ''
  };
  validationMessages = {
    'firstname': {
      'required': 'First name required.',
      'minlength': 'at least 2 charachters.',
      'maxlength': 'max length 25.'
    },
    'lastname': {
      'required': 'Last name required.',
      'minlength': 'at least 2 charachters.',
      'maxlength': 'max length 25.'
    },
    'email': {
      'required': 'email required.',
      'email': 'email is not in valid format'
    },
    'username': {
      'required': 'username required.',
      'minlength': 'at least 2 charachters.',
      'maxlength': 'max length 25.'
    },
    'password': {
      'required': 'password required.'
    }
  };

  constructor(public dialog: MatDialog,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<LoginComponent>) {
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
    console.log(this.LoginForm.value);
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

  }
