import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Brand } from "../model/brand.model";
import { catchError } from "rxjs";


interface category {
    id: string;
    category: string;
    subCategory: string;
    productName: string;
}
@Injectable()
export class DataService {
    categoryURL = environment.categoryURL;
    subCategoryURL = environment.subCategoryURL;
    brandURL = environment.brandURL;
    productURL = environment.productURL;
    variantURL = environment.varientURL;
    constructor(private http: HttpClient) {

    }
    sellerId: string = "eb1f91cc-0b57-4fa2-ac55-8c1848bb0903";


    generateUUID() {
        return this.http.get("https://www.uuidtools.com/api/generate/timestamp-first")
    }


    // APIs related to category and sub-category
    getCategory() {
        return this.http.get(this.categoryURL + `allCategories`);
    };

    addCategory(newCategory) {
        return this.http.post(this.categoryURL + `addCategory`, newCategory).subscribe();
    }

    getSubCategory(id: number) {
        return this.http.get(this.subCategoryURL + `byCategory/${id}`);
    }

    addSubCategory(newSubCategory) {
        return this.http.post(this.subCategoryURL + `addSubCategory`, newSubCategory).subscribe();
    }

    getSubCategoryByID(id: number) {
        return this.http.get(this.subCategoryURL + `byCategory/${id}`);
    }
    
    // APIs related to brand
    getBrandDetails() {
        return this.http.get(this.brandURL + `allBrands`);
    }

    deleteBrand(id: number) {
        this.http.delete(this.brandURL + `delete/${id}`).subscribe();
    }

    updateBrand(brand: any) {
        this.http.put(this.brandURL + `update/${brand.id}`, brand).subscribe();
    }

    addBrand(element: any) {
        this.http.post(this.brandURL + 'addBrand', element).subscribe();
    }

    // APIs related to product and variant
    postProduct(product) {
        return this.http.post(this.productURL + 'addProduct', product);
    }

    postVariant(productDetails) {
        return this.http.post(this.variantURL + `addVarient`, productDetails);
    }

    postProductWithDetails(product) {
        return this.http.post(this.productURL + 'addProductWithDetail', product);
    }

    getProducts() {
        return this.http.get(this.productURL + `allProducts`);
    }

    getProductById(productID) {
        return this.http.get(this.productURL + `productDetail/${productID}`);
    } 

    // Auth API's
    login(userCred) {
        return this.http.post(environment.auth, userCred, {responseType: 'text'});
    }
} 