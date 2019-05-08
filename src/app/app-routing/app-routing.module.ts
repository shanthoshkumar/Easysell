import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
export const routes: Routes = [
  {
    path:'signin',
    component:SigninComponent,
  },
  {
    path:'signup',
    component:SignupComponent,
  }, 
   {
    path:'dashboard',
    component:DashboardComponent,
  }, 
  {
    path:'',
    redirectTo:'signin',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
