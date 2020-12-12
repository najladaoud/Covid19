import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AddGouvComponent } from './add-gouv/add-gouv.component';
import { HomeComponent } from './home/home.component';
import { ListgouvernoratComponent } from './listgouvernorat/listgouvernorat.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';

import { UpdateGouvComponent } from './update-gouv/update-gouv.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { ListMedecinComponent } from './list-medecin/list-medecin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateMedecinComponent } from './update-medecin/update-medecin.component';
import { AddMedecinComponent } from './add-medecin/add-medecin.component';
import {NgxMaskModule} from 'ngx-mask';
import { AdviceComponent } from './advice/advice.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddGouvComponent,
    ListgouvernoratComponent,
    AddGouvComponent,
    UpdateGouvComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    ListMedecinComponent,
    NotFoundComponent,
    UpdateMedecinComponent,
    AddMedecinComponent,
    AdviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  //  BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
