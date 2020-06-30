import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Opportunity} from '../Model/opportunity';
import {CvService} from '../services/cv.service';
import {Resume} from '../Model/Resume';
import {ucs2} from 'punycode';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.css']
})
export class CvFormComponent implements OnInit {
  name: string;
  firstName: string;
  job: string;
  location: string;
  email: string;
  phoneNumber: string;
  skill1: string;
  skill2: string;
  skill3: string;
  skill4: string;
  language1: string;
  language2: string;
  language3: string;
  experience1: string;
  experience2: string;
  experience3: string;
  education1: string;
  education2: string;
  education3: string;
  cv: Resume;

  cvForm: FormGroup;
  @ViewChild('cvform') cvFormDirective;
  formErrors = {
    'name': '',
    'firstName': '',
    'location': '',
    'email': '',
    'phoneNumber': ''
  };
  validationMessages = {
    'name': {
      'required': 'title required.',
      'minlength': 'at least 2 charachters.',
      'maxlength': 'max length 25.'
    },
    'firstName': {
      'required': 'domain required.',
      'minlength': 'at least 2 charachters.',
      'maxlength': 'max length 25.'
    },
    'location': {
      'required': 'location required.'
    },
    'email': {
      'required': 'email required.',
      'minlength': 'at least 2 charachters.',
      'maxlength': 'max length 25.',
      'email': 'email is not in a valid format'
    },
    'job': {
      'required': 'job required.'

    }
  };

  constructor(private fb: FormBuilder,
             private cvService: CvService,
              private router: Router,
              public dialogRef: MatDialogRef<CvFormComponent>) {
    this.createForm();
  }

  ngOnInit(): void {
  }
  createForm() {
    this.cvForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      location: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      job: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      skill1: [''],
      skill2: [''],
      skill3: [''],
      skill4: [''],
      language1: [''],
      language2: [''],
      language3: [''],
      experience1: [''],
      experience2: [''],
      experience3: [''],
      education1: [''],
      education2: [''],
      education3: ['']

    });
    this.cvForm.valueChanges.subscribe(data => this.onValueChangedRegister(data));
    this.onValueChangedRegister(); // (re)set form validations messages
  }

  onValueChangedRegister(data?: any) {
    if (!this.cvForm) {
      return;
    }
    const form = this.cvForm;
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


  onSubmit() {
    // console.log(this.RegisterForm.value);
    this.cvForm.reset({
      'name': '',
    'firstName': '',
      'location': '',
    'job': '',
    'email': '',
    'phoneNumber': '',
    'skill1': '',
    'skill2': '',
    'skill3': '',
    'skill4': '',
    'language1': '',
    'language2': '',
    'language3': '',
    'experience1': '',
    'experience2': '',
    'experience3': '',
    'education1': '',
    'education2': '',
    'education3': ''
    });
    this.cvFormDirective.resetForm();
    this.dialogRef.close();
  }

  post(name: string, firstName: string, email: string, job: string, location: string, phoneNumber: string, skill1: string,
       skill2: string, skill3: string, skill4: string, language1: string, language2: string, language3: string,
       experience1: string, experience2: string, experience3: string, education1: string, education2: string, education3: string) {
    // tslint:disable-next-line:max-line-length
    console.log (name, firstName, job, location, email, phoneNumber, [skill1, skill2, skill3, skill4], [language1, language2, language3], [experience1, experience2, experience3], [education1, education2, education3]);
    // tslint:disable-next-line:max-line-length
  this.cv = new Resume(name, firstName, job, location, email,
    [skill1, skill2, skill3, skill4],
    [language1, language2, language3],
    [experience1, experience2, experience3],
    [education1, education2, education3], phoneNumber);
    this.cvService.postCv(this.cv).subscribe((response) => {
        console.log('response', response);
        const id = response['id'];
        console.log('id cv', id);
        const link = ['cv', id];
        this.router.navigate(link);

      },
      (error) => {console.log(error); },
      () => {
        console.log('complete :>');
      });
  }
close() {
    const link = ['createCV'];
    this.router.navigate(link);
    this.dialogRef.close();
}
}
