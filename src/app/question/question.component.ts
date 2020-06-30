import {Component, OnInit, ViewChild} from '@angular/core';
import {Question} from '../Model/question';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuestionService} from '../services/question.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Answer} from '../Model/answer';
import {UserService} from '../services/user.service';
import {User} from '../Model/user';
import {expand, flyInOut, visibility} from '../animations/app.animation';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  animations: [flyInOut(), visibility(), expand()]

})
export class QuestionComponent implements OnInit {
question: Question;
NgAnswer: string;
AnswerForm: FormGroup;
answer: Answer;
date: string;
users: User[];
answers: Answer[];
user: User;
errMess: string;
  @ViewChild('cform') AnswerFormDirective;


  constructor(private forumService: QuestionService,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
               private userService: UserService,
              private route: ActivatedRoute,
              private questionService: QuestionService) {
    this.createForm();

  }


  ngOnInit(): void {
    // const id = +this.activatedRoute.snapshot.params['id'];
    // console.log(id);
    // this.forumService.getQuestionById(id).subscribe((question) => this.question = question);
    // console.log(this.question);
    //
    //

    this.userService.getUsers().subscribe((users) => this.users = users,
      (error) => console.log('erreur dans question', error));
    this.route.params.pipe(switchMap((params: Params) => this.userService.getUserById(params['id'])))
      .subscribe((user) => {this.user = user[0];
          console.log(this.user); },
        errmess => this.errMess = <any> errmess);
    this.route.params.pipe(switchMap((params: Params) => this.questionService.getQuestionById(params['idQuestion'])))
      .subscribe((question) => {this.question = question[0];
          console.log(this.question); },
        errmess => this.errMess = <any> errmess);
    // this.answers = this.question['answers'];


  }
  createForm() {
    this.AnswerForm = this.fb.group({
      NgAnswer: ''
    });

  }
  ajouter(NgAnswer: string) {
    console.log(NgAnswer);
    console.log('user login answer', this.user);
    const d = new Date();
    // let date: string;
    // date = d.toDateString();
    this.answer = new Answer(NgAnswer, d, this.user.first_name);
     this.questionService.postAnswer(this.answer).subscribe((response) => {
       console.log('response = ', response);
     },
       (error) =>
     console.log('error', error),
       () => {
         console.log('complete :>');
       }
     );
  }
  onSubmit() {
    this.AnswerForm.reset({
      NgAnswer: ''
    });
    this.AnswerFormDirective.resetForm();
  }

}
