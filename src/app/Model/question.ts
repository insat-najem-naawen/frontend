import {Answer} from './answer';

export class Question {
  id: number;
  author: string;
  category: string;
  description: string;
  date: string;
  image: string;
  answers: Answer[];

  constructor(id = 0, author = '', image = '', category = '', description = '', date = '',
              answers) {
    this.id = id;
    this.author = author;
    this.category = category;
    this.description = description;
    this.author = author;
    this.date = date;
    this.image = image;
    this.answers = answers;
  }
}
