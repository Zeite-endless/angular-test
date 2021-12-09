import { ComapniesInactiveComponent } from './comapnies-inactive/comapnies-inactive.component';
import { CompaniesComponent } from './companies/companies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'companies',
    pathMatch: 'full'
  },
  {
    path: 'companies',
    component: CompaniesComponent
  }, 
  {
    path: 'companies_inactive',
    component: ComapniesInactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
