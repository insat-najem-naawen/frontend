import {User} from './user';

export class Answer {
  id: number;
  author: string;
  description: string;
  date: Date;
  image: string;

  constructor( description = '', date: Date, author: string ) {
    this.author = author;
    this.description = description;
    this.date = date;
  }
}
