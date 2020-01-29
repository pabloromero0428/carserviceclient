import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { OwnersListComponent } from './owners/owners-list/owners-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  {
    path: ' ',
    pathMatch: 'full', redirectTo: 'Home'
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'propietarios',
    component: OwnersListComponent
  },
  {
    path: 'Home',
    component:  HomeClientComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
