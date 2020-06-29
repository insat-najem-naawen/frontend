import {Answer} from './answer';
import {User} from './user';

export class Question {
  id: number;
  author: User;
  // category: string;
  description: string;
  date: string;
  // image: string;
  answers: Answer[];

  constructor( author: User, description = '', date = '', answers =  []) {
    this.author = author;
    this.description = description;
    this.date = date;
    this.answers = answers;
  }
}
