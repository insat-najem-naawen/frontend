import {Component, OnInit, ViewChild} from '@angular/core';
import {Question} from '../Model/question';
import {QuestionService} from '../services/question.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../Model/user';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Answer} from '../Model/answer';
import {expand, flyInOut, visibility} from '../animations/app.animation';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
  animations: [flyInOut(), visibility(), expand()]
})
export class ForumComponent implements OnInit {
questions: Question[];
show: boolean;
Comment: string;
QuestionForm: FormGroup;
user: User;
email: string;
NgQuestion: string;
userId = 1;
question: Question;
errMess: string;

@ViewChild('cform') QuestionFormDirective;


  constructor(private questionService: QuestionService,
              private fb: FormBuilder,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              ) {
    this.show = true;
    this.createForm();
    this.questionService.getQuestions().subscribe((questions) => this.questions = questions,
      (error) => console.log(error));

    // this.d = new Date();

  }


  ngOnInit(): void {
    this.email = this.activatedRoute.snapshot.params['email'];
    console.log(this.email);
    this.userService.getUserByEmail(this.email).subscribe((user) => this.user = user,
      errmess => this.errMess = <any>errmess);
    // console.log(this.user);

  }
  createForm() {
    this.QuestionForm = this.fb.group({
      NgQuestion: ''
    });
  }

afficher() {
    this.show = false;
}

  onSubmit() {
    this.QuestionForm.reset({
      NgQuestion: ''
    });
    this.QuestionFormDirective.resetForm();
  }

  ajouter(NgQuestion: String) {
    // console.log(this.user);
    // console.log(NgQuestion);
    // console.log(this.d);
    const d = new Date();
    let date: string;
    date = d.toDateString();
    // @ts-ignore
    this.question = new Question(this.user, NgQuestion, date, []) ;
    this.questionService.postQuestion(this.question).subscribe((response) => {
        console.log('response', response);
      },
      (error) => {
        console.log('erreur', error);
        // console.log(typeof (NgQuestion));
        // console.log(NgQuestion);
      },
      () => {
        console.log('complete :>');
      });
  }

}
