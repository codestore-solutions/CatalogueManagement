import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdWelcomeComponent } from './products/prod-welcome/prod-welcome.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('../../app/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path:'products',
    component:ProdWelcomeComponent,
    loadChildren:()=>import('../../app/pages/products/product.module').then(m=>m.ProductModule)
  }     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  bootstrap:[]
})
export class PagesRoutingModule { }
