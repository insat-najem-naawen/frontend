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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RessourcesComponent } from './ressources/ressources.component';
import { DetailRessourceComponent } from './detail-ressource/detail-ressource.component';
import { ListeRessourcesComponent } from './liste-ressources/liste-ressources.component';
import { CategoryRessourcesComponent } from './category-ressources/category-ressources.component';
import { NavRessourcesComponent } from './nav-ressources/nav-ressources.component';
import { ForumComponent } from './forum/forum.component';
import { QuestionComponent } from './question/question.component';
import { CreateCvComponent } from './create-cv/create-cv.component';
import { Slide1Component } from './slide1/slide1.component';
import { Slide2Component } from './slide2/slide2.component';
import { Slide3Component } from './slide3/slide3.component';
import {baseURL} from './Model/baseURL';
import {HttpClientModule} from '@angular/common/http';
import {ProcessHTTPMsgService} from './services/process-httpmsg.service';
import { CvFormComponent } from './cv-form/cv-form.component';
import { PostFormComponent } from './post-form/post-form.component';
import { DetailJobComponent } from './detail-job/detail-job.component';
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
  RessourcesComponent,
  DetailRessourceComponent,
  ListeRessourcesComponent,
  CategoryRessourcesComponent,
  NavRessourcesComponent,
  ForumComponent,
  QuestionComponent,
  CreateCvComponent,
  Slide1Component,
  Slide2Component,
  Slide3Component,
  CvFormComponent,
  PostFormComponent,
  DetailJobComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        ROUTING,
        BrowserAnimationsModule,
        FormsModule,
        MatDialogModule,
        ReactiveFormsModule,
      HttpClientModule

    ],
  entryComponents: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    {provide: 'BaseURL', useValue: baseURL},
    ProcessHTTPMsgService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
