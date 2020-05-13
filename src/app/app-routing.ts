import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {OpportunitiesComponent} from './opportunities/opportunities.component';
import {FindJobComponent} from './find-job/find-job.component';
import {PostJobComponent} from './post-job/post-job.component';
import {FindInternshipComponent} from './find-internship/find-internship.component';
import {RessourcesComponent} from './ressources/ressources.component';
import {DetailRessourceComponent} from './detail-ressource/detail-ressource.component';
import {ListeRessourcesComponent} from './liste-ressources/liste-ressources.component';



const APP_ROUTING: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/register', component: RegisterComponent},
  {path: 'opportunities', component: OpportunitiesComponent},
  {path: 'findJob', component: FindJobComponent},
  {path: 'postJob', component: PostJobComponent},
  {path: 'findInternship', component: FindInternshipComponent},
  {path: 'findJob/postJob', component: PostJobComponent},
  {path: 'ressources', component: RessourcesComponent},
  {path: 'listeRessources', component: ListeRessourcesComponent},
  {path: 'detailRessource/:id', component: DetailRessourceComponent}
  ];
export const ROUTING = RouterModule.forRoot(APP_ROUTING);
