import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {LoginComponent} from '../login/login.component';
import {User} from '../Model/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  errMess: string;
  RegisterForm: FormGroup;
  users: User[];
  user: User;
  @ViewChild('rform') RegisterFormDirective;
  formErrors = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'username': '',
    'password': ''
  };
  validationMessages = {
    'firstName': {
      'required': 'First name required.',
      'minlength': 'at least 2 charachters.',
      'maxlength': 'max length 25.'
    },
    'lastName': {
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
             private userService: UserService,
              public dialogRef: MatDialogRef<RegisterComponent>) {
    this.createForm();
this.userService.getUsers().subscribe((users) => this.users = users,
  errmess => this.errMess = <any>errmess);
  }

  ngOnInit(): void {
  }

  createForm() {
    this.RegisterForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.RegisterForm.valueChanges.subscribe(data => this.onValueChangedRegister(data));
    this.onValueChangedRegister(); // (re)set form validations messages
  }

  onValueChangedRegister(data?: any) {
    if (!this.RegisterForm) {
      return;
    }
    const form = this.RegisterForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }

      }
    }
  }

  onSubmitLogin() {
    // console.log(this.RegisterForm.value);
    this.RegisterForm.reset({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: ''
    });
    this.RegisterFormDirective.resetForm();
    this.dialogRef.close();
  }



  openLoginForm() {
    this.dialog.closeAll();
    this.dialog.open(LoginComponent, {width: '1000px', height: '528px'} );
  }

  ajoutUser(credentials) {
     // this.user = new User(5, first_name, last_name, username,'',[''], email, password);
     console.log(credentials);
    // console.log(user);
    console.log(typeof (credentials));
    this.userService.postUser(credentials).subscribe((response) => {
      console.log('salma');
        console.log('response', response);
      },
      (error) => {
        console.log('erreur', error);
        console.log(typeof (credentials));
        console.log(credentials);
      },
      () => {
        console.log('complete :>');
      });
  }
  close() {
    this.dialogRef.close();
  }
}
