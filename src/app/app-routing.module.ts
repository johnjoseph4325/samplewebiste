import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {
    path:'',
    component:SigninComponent,
    
  },
  {
    path:'details',
    component:DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
