export class Opportunity {
  id: number;
  user_id: number;
  category: string;
  domain: string;
  link: string;
  description: string;
  title: string;
  published_on: string;

  constructor(id= 0, title = '', user_id = 0, category = '', domain = '', link = '',
              description = '', published_on = '') {
    this.id = id;
    this.user_id = user_id;
    this.category = category;
    this.domain = domain;
    this.link = link;
    this.description = description;
    this.title = title;
    this.published_on = published_on;
  }

}
