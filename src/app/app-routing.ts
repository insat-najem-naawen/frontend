import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';



const APP_ROUTING: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/register', component: RegisterComponent}
  ];
export const ROUTING = RouterModule.forRoot(APP_ROUTING);
