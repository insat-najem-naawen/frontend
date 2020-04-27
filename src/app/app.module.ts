import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {ROUTING} from './app-routing';
import { HeaderComponent } from './header/header.component';
import { VisionComponent } from './vision/vision.component';
import { MissionComponent } from './mission/mission.component';
import { SlidersComponent } from './sliders/sliders.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { FindJobComponent } from './find-job/find-job.component';
import { FindInternshipComponent } from './find-internship/find-internship.component';
import { PostJobComponent } from './post-job/post-job.component';


@NgModule({
  declarations: [
    AppComponent,
  HeaderComponent,
  VisionComponent,
  MissionComponent,
  SlidersComponent,
  HomepageComponent,
  AboutComponent,
  TeamComponent,
  ContactComponent,
  FooterComponent,
  LoginComponent,
  RegisterComponent,
  OpportunitiesComponent,
  FindJobComponent,
  FindInternshipComponent,
  PostJobComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
