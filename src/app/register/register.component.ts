import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  RegisterForm: FormGroup;
  users: User[];
  user: User;
  @ViewChild('rform') RegisterFormDirective;
  formErrors = {
    'firstname': '',
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
             private userService: UserService,
              public dialogRef: MatDialogRef<RegisterComponent>) {
    this.createForm();
this.userService.getUsers().subscribe((users) => this.users = users);
  }

  ngOnInit(): void {
  }

  createForm() {
    this.RegisterForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
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
    console.log(this.RegisterForm.value);
    this.RegisterForm.reset({
      firstname: '',
      lastname: '',
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

  ajoutUser(firstname: string, lastname: string, username: string, email: string) {
     this.user = new User(0, firstname, lastname, username, '', [], email);
     console.log(this.user);
    this.users.push(this.user);
    console.log(this.users);

  }
  close() {
    this.dialogRef.close();
  }
}
