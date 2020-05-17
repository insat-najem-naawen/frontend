import { Injectable } from '@angular/core';
import {Ressource} from '../Model/ressource';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {
private ressources: Ressource[];
  constructor() {
    this.ressources = [ // tslint:disable-next-line:max-line-length no-unused-expression
      new Ressource( 1, 'GitHub student pack', 'formation', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/slide2.jpg'),
      // tslint:disable-next-line:max-line-length no-unused-expression
      new Ressource( 2, 'GitHub student pack', 'formation', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/1.png'),
      // tslint:disable-next-line:max-line-length
      new Ressource( 3, 'GitHub student pack', 'documents', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/2.jpg'),
      // tslint:disable-next-line:max-line-length
      new Ressource( 4, 'GitHub student pack', 'documents', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/internship.jpg'),
      // tslint:disable-next-line:max-line-length
      new Ressource( 5, 'GitHub student pack', 'formation', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/slider2.jpg'),
      // tslint:disable-next-line:max-line-length
      new Ressource( 6, 'GitHub student pack', 'documents', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/slider1.jpg'),
      // tslint:disable-next-line:max-line-length
      new Ressource( 6, 'GitHub student pack', 'documents', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/slider1.jpg')
    ];

  }
  getRessources(): Ressource[] {
    return this.ressources;
  }
  getRessourcesById (id: number): Ressource {
    return this.ressources.filter((ressource) => (ressource.id === id ))[0];
  }

  getRessourcesByCategory(category: string): Ressource[] {
    return this.ressources.filter((ressource) => (ressource.category === category ));
  }
}
