import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './main/details/details.component';


const routes: Routes = [
  { 
    path: 'superheroes', 
    component: MainComponent 
  },
  { 
    path: 'superheroes/:id', 
    component: DetailsComponent 
  },
  { 
    path: '',
    redirectTo: '/superheroes', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }