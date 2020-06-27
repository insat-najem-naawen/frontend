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
import {CategoryRessourcesComponent} from './category-ressources/category-ressources.component';
import {ForumComponent} from './forum/forum.component';
import {QuestionComponent} from './question/question.component';
import {CreateCvComponent} from './create-cv/create-cv.component';
import {LoginGuard} from './Guard/login.guard';



const APP_ROUTING: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent,  canActivate : [LoginGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'opportunities', component: OpportunitiesComponent},
  {path: 'findJob', component: FindJobComponent},
  {path: 'postJob', component: PostJobComponent},
  {path: 'findInternship', component: FindInternshipComponent},
  {path: 'findJob/postJob', component: PostJobComponent},
  {path: 'ressources', component: RessourcesComponent},
  {path: 'listeRessources', component: ListeRessourcesComponent},
  {path: 'detailRessource/:id', component: DetailRessourceComponent},
  {path: 'ressources/:category', component: CategoryRessourcesComponent},
  {path: 'forum/:email', component: ForumComponent},
  {path: 'question/:id/:email', component: QuestionComponent},
  {path: 'findJob/createCV', component: CreateCvComponent}

];
export const ROUTING = RouterModule.forRoot(APP_ROUTING);
