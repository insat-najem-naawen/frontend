import { Injectable } from '@angular/core';
import {Ressource} from '../Model/ressource';
import {Observable} from 'rxjs';
import { of } from 'rxjs';
import {catchError, delay} from 'rxjs/operators';
import {ProcessHTTPMsgService} from './process-httpmsg.service';
import {HttpClient} from '@angular/common/http';
import {baseURL} from '../Model/baseURL';

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {
   ressources: Ressource[];

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) {
    this.ressources = [ // tslint:disable-next-line:max-line-length no-unused-expression
      new Ressource(1, 'Cours deep learning', 'formation', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/carte1.jpg'),
      // tslint:disable-next-line:max-line-length no-unused-expression
      new Ressource(2, 'GitHub student pack', 'formation', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/carte2.jpg'),
      // tslint:disable-next-line:max-line-length
      new Ressource(3, 'Lettre de liaison', 'documents', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/carte3.jpg'),
      // tslint:disable-next-line:max-line-length
      new Ressource(4, 'fiche de proposition', 'documents', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/carte5.jpg'),
      // tslint:disable-next-line:max-line-length
      new Ressource(5, 'cours Angular', 'formation', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/carte1.jpg'),
      // tslint:disable-next-line:max-line-length
      new Ressource(6, 'notes des ds', 'documents', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/carte2.jpg'),
      // tslint:disable-next-line:max-line-length
      new Ressource(7, 'affichage TP', 'documents', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/carte1.jpg'),
      // tslint:disable-next-line:max-line-length
      new Ressource(8, 'cours machine learning', 'formation', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/slider2.jpg'),
      // tslint:disable-next-line:max-line-length
      new Ressource(9, 'cours python', 'formation', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/carte4.jpg'),
      // tslint:disable-next-line:max-line-length
      new Ressource(10, 'cours HTML/CSS', 'formation', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/carte5.jpg'),
      // tslint:disable-next-line:max-line-length
      new Ressource(11, 'cours Javascript', 'formation', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/carte3.jpg'),
      // tslint:disable-next-line:max-line-length
      new Ressource(12, 'PHP Symfony', 'formation', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/carte2.jpg'),
      // tslint:disable-next-line:max-line-length
      new Ressource(13, 'Période de révision', 'News', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/carte3.jpg'),
      // tslint:disable-next-line:max-line-length
      new Ressource(14, 'planning examens 3ème', 'News', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/carte5.jpg'),
      // tslint:disable-next-line:max-line-length
      new Ressource(15, 'planning examens 2ème', 'News', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/carte4.jpg'),
      // tslint:disable-next-line:max-line-length
      new Ressource(16, 'avis aux étudiants', 'News', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/carte1.jpg'),
      // tslint:disable-next-line:max-line-length
      new Ressource(17, 'planning ds', 'News', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/carte3.jpg'),
      // tslint:disable-next-line:max-line-length
      new Ressource(18, 'planning', 'News', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/carte1.jpg'),
      // tslint:disable-next-line:max-line-length
      new Ressource(19, 'dates soutenances', 'News', 'The GitHub Student Developer Pack is back for another school year. The program has provided over 1.5 million students the best real-world developer tools and training for free since its introduction six years ago.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Verified students who join the Pack receive GitHub Pro at no charge while in school, plus exclusive offers from our GitHub Education partners. More than doubling in size with 21 new partners, the Pack now represents almost $45,000 dollars in savings available to you during your time as a student.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'As the Pack continues to grow and shape the next generation of developers, we’ve continued to listen. We’re here to better understand how you’re using these tools and what’s missing that you hope to see included. Whether you’re developing your portfolio, building a new desktop app, or creating an interactive map—the Pack was built to provide you with the exact tools you need to learn',
        'https://education.github.com/pack', '', 'assets/images/carte1.jpg'),
    ];

  }
//
//   getRessources(): Observable<Ressource[]>  {
//     return of(this.ressources);
//   }
//
//   getRessourcesById(id: number): Observable<Ressource>  {
//     return of (this.ressources.filter((ressource) => (ressource.id === id))[0]).pipe(delay(2000));
//   }
//
//   getRessourcesByCategory(category: string): Observable<Ressource[]> {
//     return of(this.ressources.filter((ressource) => (ressource.category === category))).pipe(delay(2000));
// }

  //
  // getRessources(): Observable<Ressource[]>  {
  //   return this.http.get<Ressource[]>('').pipe(catchError(this.processHTTPMsgService.handleError));
  // }
  // getRessourcesById(id: number): Observable<Ressource>  {
  //   return this.http.get<Ressource>(baseURL + 'ressources/' + id).pipe(catchError(this.processHTTPMsgService.handleError));
  // }
  getRessourcesByCategory(category: string): Observable<Ressource[]> {
    return this.http.get<Ressource[]>('/get_ressources/' + category).pipe(catchError(this.processHTTPMsgService.handleError));
  }
  getRessourceById(id: number): Observable<any> {
    return this.http.get<Ressource[]>('/get_ressource/' + id).pipe(catchError(this.processHTTPMsgService.handleError));

  }
}
