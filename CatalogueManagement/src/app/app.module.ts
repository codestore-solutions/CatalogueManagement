import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { ProductsComponent } from './components/products/products.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './shared_modules/shared/shared.module';
import { dataReducer } from './store/reducer/product.reducer';
import { DataService } from './services/data.service';
import { VariantComponent } from './components/variant/variant.component';
import { ProductDetailsComponent } from './components/product-listing/product-details.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { SubCategoryComponent } from './components/category-list/sub-category/sub-category.component';
import { ProdDetailComponent } from './components/prod-detail/prod-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BookingsComponent } from './components/bookings/bookings.component';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsComponent,
    VariantComponent,
    ProductDetailsComponent,
    CategoryListComponent,
    BrandListComponent,
    SubCategoryComponent,
    ProdDetailComponent,
    DashboardComponent,
    BookingsComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    StoreModule.forRoot({category: dataReducer}, {}),
    EffectsModule.forRoot([]),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
