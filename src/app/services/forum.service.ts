import { Injectable } from '@angular/core';
import {Question} from '../Model/question';
import {Observable, of} from 'rxjs';
import {Ressource} from '../Model/ressource';
import {delay} from 'rxjs/operators';
import {UserService} from './user.service';
import {User} from '../Model/user';
import {Answer} from '../Model/answer';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
questions: Question[];
users: User[];
  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((users) => this.users = users);
    console.log(this.users);
    this.questions = [
      // tslint:disable-next-line:max-line-length
   new Question(1, this.users[0].username, this.users[0].image, 'news', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis quis tincidunt luctus Nam sagittis dui in nunc'
   , 'Sun Jun 07 2020\n', []),
      // tslint:disable-next-line:max-line-length
      new Question(2, this.users[1].username, this.users[1].image, 'news', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis quis tincidunt luctus Nam sagittis dui in nunc'
        , 'Sun Jun 07 2020\n', [new Answer(1, this.users[3].username, 'j ai une offre', 'Thur Jun 08 2019', this.users[3].image)]),
      // tslint:disable-next-line:max-line-length
      new Question(3, this.users[2].username, this.users[2].image, 'news', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis quis tincidunt luctus Nam sagittis dui in nunc'
        , 'Sun Jun 07 2020\n', [new Answer(1, this.users[0].username, 'Une excellente nouvelle', 'Mon Jun 08 2019', this.users[0].image),
          new Answer(2, this.users[1].username, 'Merci', 'Mon Jun 08 2020', this.users[1].image),]),
      // tslint:disable-next-line:max-line-length
      new Question(4, this.users[3].username, this.users[3].image, 'news', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis quis tincidunt luctus Nam sagittis dui in nunc'
        , 'Sun Jun 07 2020\n', []),
 ];
  }
  getQuestions(): Observable<Question[]>  {
    return of(this.questions);
  }
  getQuestionsById(id: number): Observable<Question>  {
    return of (this.questions.filter((question) => (question.id === id))[0]).pipe(delay(2000));
  }

  getQuestionsByCategory(category: string): Observable<Question[]> {
    return of(this.questions.filter((question) => (question.category === category))).pipe(delay(2000));
  }
}
