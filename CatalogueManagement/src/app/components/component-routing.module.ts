import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { ProductDetailsComponent } from "./product-listing/product-details.component";
import { ProductsComponent } from "./products/products.component";
import { ProdDetailComponent } from "./prod-detail/prod-detail.component";
import { CategoryListComponent } from "./category-list/category-list.component";
import { BrandListComponent } from "./brand-list/brand-list.component";


const routes: Routes = [
    {
        path: '',
        component: NavComponent,
        children: [
            {
                path: 'product-list',
                component: ProductDetailsComponent
            },
            {
                path: 'product-list/add-product',
                component: ProductsComponent
            },
            {
                path: 'product-list/edit-product/:requester',
                component: ProductsComponent
            },
            {
                path: 'product-list/product-detail/:requester',
                component: ProdDetailComponent
            },
            {
                path: 'add-product',
                component: ProductsComponent
            },
            {
                path: 'category-list',
                component: CategoryListComponent
            },
            {
                path: 'brand-list',
                component: BrandListComponent
            },
            {
                path: 'product-list/product-detail/:requester/edit-product/:requester',
                component: ProductsComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule{ }