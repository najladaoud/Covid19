import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {AddGouvComponent} from './add-gouv/add-gouv.component';
import {ListgouvernoratComponent} from './listgouvernorat/listgouvernorat.component';
import {UpdateGouvComponent} from './update-gouv/update-gouv.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuardService} from './services/auth-guard.service';
import {ListMedecinComponent} from './list-medecin/list-medecin.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AddMedecinComponent} from './add-medecin/add-medecin.component';
import {UpdateMedecinComponent} from './update-medecin/update-medecin.component';
import {AdviceComponent} from './advice/advice.component';



const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'home/auth/signin', component: SigninComponent},
  {path: 'auth/signup', component: SignupComponent},
  {path: 'listgouvernorat', canActivate: [AuthGuardService], component: ListgouvernoratComponent},
  {path: 'AddGouv', canActivate: [AuthGuardService], component: AddGouvComponent},
  {path: 'listgouvernorat/gouvernorat/:id', canActivate: [AuthGuardService], component : UpdateGouvComponent},
  {path: 'Medecins', canActivate: [AuthGuardService], component: ListMedecinComponent},
  {path: 'Addmedecin', canActivate: [AuthGuardService], component: AddMedecinComponent},
  {path: 'Medecins/Medecin/:id', canActivate: [AuthGuardService], component : UpdateMedecinComponent },
  {path: 'conceil', canActivate: [AuthGuardService], component : AdviceComponent},
  {path: '', component: HomeComponent},
 //  {path: '**', component: NotFoundComponent},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
