export class Ressource {
  id: number;
  title: string;
  category: string;
  description: string;
  link: string;
  university: string;
  image: string;

  constructor(id= 0, title= '', category= '', description= '', link = '', university= '', image= '') {
    this.id = id;
    this.title = title;
    this.category = category;
    this.description = description;
    this.link = link;
    this.university = university;
    this.image = image;
  }
}
