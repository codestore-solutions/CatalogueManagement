import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProdWelcomeComponent } from './prod-welcome/prod-welcome.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';

Injectable({
  providedIn: 'root'
})

const routes: Routes = [
  {
      path: '',
      component: ProdWelcomeComponent,
      children: [
        {
          path:'',
          redirectTo:'products-list',
          pathMatch:'full'
        },
        {
          path:'products-list',
          component:ProductListComponent
        },
        {
          path:'view/:id',
          component:ProdDetailComponent
        },
        {
          path:'add',
          component:ProductsComponent
        },
        {
          path:'catagory-list',
          component:CategoryListComponent
        }
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
