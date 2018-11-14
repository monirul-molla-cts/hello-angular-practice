import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BioComponent} from './bio/bio.component';

const routes: Routes =[
  {path:'', component: HomeComponent},
  {path:'bio', component: BioComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
		  exports: [RouterModule]
})
export class AppRoutingModule { }
