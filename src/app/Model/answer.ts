export class Answer {
  id: number;
  author: string;
  description: string;
  date: string;
  image: string;

  constructor(id = 0, author = '', description = '', date = '', image = '') {
    this.id = id;
    this.author = author;
    this.description = description;
    this.author = author;
    this.date = date;
    this.image = image;
  }
}
