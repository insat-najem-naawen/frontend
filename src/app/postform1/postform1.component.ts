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
  publishedOn: Date;
  postForm: FormGroup;
  opportunities: Opportunity[];
  @ViewChild('pform') postFormDirective;
  formErrors = {
    'title': '',
    'domain': '',
    'link': '',
    'description': '',
    'publishedOn': ''
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
    'publishedOn': {
      'required': 'date required.',
      'date': 'date is not in a valid format'
    }
  };

  constructor(private fb: FormBuilder,
              private opportunityService: OpportunityService,
              private router: Router,
              public dialogRef: MatDialogRef<Postform1Component>) {
    this.createForm();
    this.opportunityService.getOpportunitiesByCategory('internship').subscribe((opp) => this.opportunities = opp);
  }

  ngOnInit(): void {
  }

  createForm() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      domain: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      link: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      description: ['', Validators.required],
      publishedOn: ['', Validators.required]
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
      'title': '',
      'domain': '',
      'link': '',
      'description': '',
      'publishedOn': ''
    });
    this.postFormDirective.resetForm();
    this.dialogRef.close();

  }

  post(credentials: Opportunity) {
    credentials.category = 'internship';
    this.opportunityService.postOpportunity(credentials).subscribe((response) => {
        console.log('response', response);
        const link = ['findInternship'];
        this.router.navigate(link);
      },
      (error) => {console.log(error); },
      () => {
        console.log('complete :>');
      });
  }
  close() {
    this.dialogRef.close();
  }

}
