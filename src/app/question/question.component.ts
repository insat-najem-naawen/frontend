import {Component, OnInit, ViewChild} from '@angular/core';
import {Question} from '../Model/question';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ForumService} from '../services/forum.service';
import {ActivatedRoute} from '@angular/router';
import {Answer} from '../Model/answer';
import {UserService} from '../services/user.service';
import {User} from '../Model/user';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
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
  @ViewChild('cform') AnswerFormDirective;


  constructor(private forumService: ForumService,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
               private userService: UserService) {
    this.createForm();
    this.userService.getUsers().subscribe((users) => this.users = users);
    const email = this.activatedRoute.snapshot.params['email'];
    console.log(email);
    this.userService.getUserByEmail(email).subscribe((user) => this.user = user);

  }


  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log(id);
    this.forumService.getQuestionsById(id).subscribe((question) => this.question = question);
    console.log(this.question);
    this.answers = this.question.answers;


  }
  createForm() {
    this.AnswerForm = this.fb.group({
      NgAnswer: ''
    });

  }
  ajouter(NgAnswer: string) {
    console.log(NgAnswer);
    const d = new Date();
    let date: string;
    date = d.toDateString();
    this.answer = new Answer(1, this.user.username, NgAnswer, date, this.user.image );
    this.question.answers.push(this.answer);
  }
  onSubmit() {
    this.AnswerForm.reset({
      NgAnswer: ''
    });
    this.AnswerFormDirective.resetForm();
  }

}
