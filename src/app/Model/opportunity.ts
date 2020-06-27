export class Opportunity {
  id: number;
  user_id: number;
  category_id: number;
  domain: string;
  link: string;
  description: string;
  title: string;
  published_on: string;

  constructor(id= 0, title = '', user_id = 0, category_id = 0, domain = '', link = '',
              description = '', published_on = '') {
    this.id = id;
    this.user_id = user_id;
    this.category_id = category_id;
    this.domain = domain;
    this.link = link;
    this.description = description;
    this.title = title;
    this.published_on = published_on;
  }

}
