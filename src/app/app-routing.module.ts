import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AudiComponent } from './Components/audi/audi.component';
import { FordComponent } from './Components/ford/ford.component';
import { FiatComponent } from './Components/fiat/fiat.component';
import { DetailsComponent } from './Components/details/details.component';

const routes: Routes = [] = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full' as 'full'
  },
  {
    path:'home',
    component: HomeComponent,
    title:'Home'
  },
  {
    path: 'Audi',
    component: AudiComponent,
    title: 'Audi Models'
  },
  {
    path: 'Ford',
    component: FordComponent,
    title: 'Ford Models'
  },
  {
    path: 'Fiat',
    component: FiatComponent,
    title: 'Fiat Models'
  },
  {
    path: 'home/:brand',
    component: DetailsComponent,
    title: 'Details'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
