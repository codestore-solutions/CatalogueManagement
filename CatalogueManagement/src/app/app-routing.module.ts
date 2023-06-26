import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { ProdDetailComponent } from './components/prod-detail/prod-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { BookingsComponent } from './components/bookings/bookings.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'productDetails',
    component: ProductDetailsComponent
  },
  {
    path: 'categoryList',
    component: CategoryListComponent
  },
  {
    path: 'brandList',
    component: BrandListComponent
  },
  {
    path: '',
    component: ProductDetailsComponent
  },
  {
    path: 'prodDetail',
    component: ProdDetailComponent
  },{
    path: 'dashboard',
    component: DashboardComponent
  },{
    path: 'orders',
    component: OrdersComponent
  },{
    path: 'bookings',
    component: BookingsComponent
  }, {
    path: 'products/:requester',
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
