import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Opportunity} from '../Model/opportunity';
import {OpportunityService} from '../services/opportunity.service';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-postform1',
  templateUrl: './postform1.component.html',
  styleUrls: ['./postform1.component.css']
})
export class Postform1Component implements OnInit {
  title: string;
  domain: string;
  link: string;
  description: string;
  date: Date;
  postForm: FormGroup;
  opportunities: Opportunity[];
  @ViewChild('pform') postFormDirective;
  formErrors = {
    'title': '',
    'domain': '',
    'link': '',
    'description': '',
    'date': ''
  };
  validationMessages = {
    'title': {
      'required': 'title required.',
      'minlength': 'at least 2 charachters.',
      'maxlength': 'max length 25.'
    },
    'domain': {
      'required': 'domain required.',
      'minlength': 'at least 2 charachters.',
      'maxlength': 'max length 25.'
    },
    'link': {
      'required': 'link required.'
    },
    'description': {
      'required': 'description required.',
      'minlength': 'at least 2 charachters.',
      'maxlength': 'max length 25.'
    },
    'date': {
      'required': 'date required.',
      'date': 'date is not in a valid format'
    }
  };

  constructor(private fb: FormBuilder,
              private opportunityService: OpportunityService,
              private router: Router,
              public dialogRef: MatDialogRef<Postform1Component>) {
    this.createForm();
    this.opportunityService.getOpportunities().subscribe((opp) => this.opportunities = opp);
  }

  ngOnInit(): void {
  }

  createForm() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      domain: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      link: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      description: ['', Validators.required],
      date: ['', Validators.required]
    });
    this.postForm.valueChanges.subscribe(data => this.onValueChangedRegister(data));
    this.onValueChangedRegister(); // (re)set form validations messages
  }

  onValueChangedRegister(data?: any) {
    if (!this.postForm) {
      return;
    }
    const form = this.postForm;
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
    this.postForm.reset({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: ''
    });
    this.postFormDirective.resetForm();
    this.dialogRef.close();

  }

  post(credentials: Opportunity) {
    credentials.category = 'internship';
    console.log(credentials);
    this.opportunityService.postOpportunity(credentials);
    console.log(this.opportunities);
    const link = ['findInternship'];
    this.router.navigate(link);

    // this.userService.postUser(credentials).subscribe((response) => {
    //     console.log('salma');
    //     console.log('response', response);
    //   },
    //   (error) => {
    //     console.log('erreur', error);
    //     console.log(typeof (credentials));
    //     console.log(credentials);
    //   },
    //   () => {
    //     console.log('complete :>');
    //   });
  }
  close() {
    this.dialogRef.close();
  }

}
