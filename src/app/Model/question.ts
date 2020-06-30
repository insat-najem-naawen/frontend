import {Answer} from './answer';
import {User} from './user';

export class Question {
  id: number;
  author: string;
  // category: string;
  description: string;
  date: Date;
  // image: string;
  answers: Answer[];

  constructor( description = '', date: Date, author: string) {
    this.author = author;
    this.description = description;
    this.date = date;
    // this.answers = answers;
  }
}
