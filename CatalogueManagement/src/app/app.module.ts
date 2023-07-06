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

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BookingsComponent } from './components/bookings/bookings.component';
import { OrdersComponent } from './components/orders/orders.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenIntercepter } from './services/token.intercepter';

@NgModule({
  declarations: [
    AppComponent,
    // NavComponent,
    // ProductsComponent,
    // VariantComponent,
    // ProductDetailsComponent,
    // CategoryListComponent,
    // BrandListComponent,
    // SubCategoryComponent,
    // ProdDetailComponent,
    // DashboardComponent,
    // BookingsComponent,
    // OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    StoreModule.forRoot({ category: dataReducer }, {}),
    EffectsModule.forRoot([]),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [DataService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenIntercepter,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
