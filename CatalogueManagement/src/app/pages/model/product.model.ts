import { Injectable } from "@angular/core";
import { Varient } from "./varient.model";

@Injectable()
export class Product{
    productID: string;
    productName: string;
    category: string;
    categoryID: string;
    subCategory: string;
    subCategoryID: string;
    varient: Varient[]
}