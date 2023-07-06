import { NgModule } from "@angular/core";
import { BookingsComponent } from "./bookings/bookings.component";
import { BrandListComponent } from "./brand-list/brand-list.component";
import { CategoryListComponent } from "./category-list/category-list.component";
import { SubCategoryComponent } from "./category-list/sub-category/sub-category.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NavComponent } from "./nav/nav.component";
import { OrdersComponent } from "./orders/orders.component";
import { ProdDetailComponent } from "./prod-detail/prod-detail.component";
import { ProductDetailsComponent } from "./product-listing/product-details.component";
import { ProductsComponent } from "./products/products.component";
import { VariantComponent } from "./variant/variant.component";
import { SharedModule } from "../shared_modules/shared/shared.module";
import { ComponentsRoutingModule } from "./component-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
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
        SharedModule,
        ComponentsRoutingModule,
        CommonModule
    ],
    providers: [],
    bootstrap: []
})
export class ComponentModule { }