import {Component, OnInit, ViewChild} from '@angular/core';
import {Question} from '../Model/question';
import {QuestionService} from '../services/question.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../Model/user';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Answer} from '../Model/answer';
import {expand, flyInOut, visibility} from '../animations/app.animation';
import {switchMap} from 'rxjs/operators';

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
id: number;
NgQuestion: string;
userId = 1;
question: Question;
errMess: string;
email: string;
answer1: Answer;
answer2: Answer;

@ViewChild('cform') QuestionFormDirective;


  constructor(private questionService: QuestionService,
              private fb: FormBuilder,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private route: ActivatedRoute,

  ) {
    this.show = true;
    this.createForm();
    this.questionService.getQuestions().subscribe((questions) => { this.questions = questions;
    console.log(this.questions)},
      (error) => console.log(error));
    // this.d = new Date();

  }


  ngOnInit(): void {
    // this.id = +this.activatedRoute.snapshot.params['id'];
    // console.log(this.id);

    // this.userService.getUserById(this.id).subscribe((user) => this.user = user,
    //   errmess => this.errMess = <any>errmess);
    // console.log(this.user);
    this.route.params.pipe(switchMap((params: Params) => this.userService.getUserById(params['id'])))
      .subscribe((user) => {this.user = user[0];
          console.log(this.user); },
        errmess => this.errMess = <any> errmess);
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
    // let date: string;
    // date = d.toDateString();
    // @ts-ignore
    console.log(this.user);
    // this.answer1 = new Answer(`J'ai une opportunité`, d);
    // this.answer2 = new Answer(`merci`, d);
    // @ts-ignore
    this.question = new Question( NgQuestion, d, this.user.first_name) ;
    console.log(this.question);
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
