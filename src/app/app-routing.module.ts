import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetComponent } from './get/get.component';



const routes: Routes = [
  {path: '', redirectTo: '/get', pathMatch: 'full'},
  {path: 'get', component: GetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
