import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from 'src/app/shared_modules/shared/shared.module';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products.component';
import { VariantComponent } from './variant/variant.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { SubCategoryComponent } from './category-list/sub-category/sub-category.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { ProdWelcomeComponent } from './prod-welcome/prod-welcome.component';
import { CarouselComponent } from 'src/app/carousel/carousel.component';
import { RatingDecimalComponent } from '../rating-decimal/rating-decimal.component';
import { EditProductComponent } from './product-list/edit-product/edit-product.component';

@NgModule({
  declarations: [
    ProdWelcomeComponent,
    VariantComponent,
    ProductsComponent,
    ProdDetailComponent,
    CategoryListComponent,
    SubCategoryComponent,
    BrandListComponent,
    ProductListComponent,
    CarouselComponent,
    RatingDecimalComponent,
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]

})
export class ProductModule { }
