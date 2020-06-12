import {Component, OnInit, ViewChild} from '@angular/core';
import {Question} from '../Model/question';
import {ForumService} from '../services/forum.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../Model/user';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Answer} from '../Model/answer';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
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


  constructor(private forumService: ForumService,
              private fb: FormBuilder,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              ) {
    this.show = true;
    this.createForm();
    this.forumService.getQuestions().subscribe((questions) => this.questions = questions);


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

  ajouter(NgQuestion: string) {
    // console.log(this.user);
    console.log(NgQuestion);
    const d = new Date();
    let date: string;
    date = d.toDateString();
    this.question = new Question(5, this.user.username, this.user.image, 'opportunities', NgQuestion, date, []);
    this.questions.push(this.question);
  }

}
