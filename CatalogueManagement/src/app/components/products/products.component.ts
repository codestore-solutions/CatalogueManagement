import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

interface category {
  id: string;
  category: string;
  subCategory: string;
  productName: string;
}

interface productDetail {
  productID: string;
  title: string;
  description: string;
  brand: string;
  image: string;
}

interface productVariant {
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productForm: FormGroup;
  productDescription: FormGroup;
  variantForm: FormGroup;
  newCategory: string;
  newSubCategory: string;
  duration = '1000';

  //Dummy Data ----------
  categoryList = [
    'Grocery', 'Electronics', 'Computer', 'Arts', 'Fashion'
  ]
  subCategoryList = {
    Grocery: ["Vegetable & Fruits", "Ice-cream", "Bakery Products", "Dairy Products"],
    Electronics: ["Accessories", "Camera", "Cell Phone", "Headphone", "Television", "Kitchen Accessories"],
    Computer: ["Computer Accessories & Pheripherals", "Computer Components", "Computer Tablets", "Data Storage"],
    Arts: ["Painting", "Crafting", "NeedleWork", "Printmaking"],
    Fashion: ["Mens Fashion", "Womens Fashion", "Kids Fashion"]
  };

  constructor() {
    this.productForm = new FormGroup({
      category: new FormControl(null, [Validators.required]),
      subCategory: new FormControl(null, [Validators.required]),
      newCategory: new FormControl(null),
      newSubCategory: new FormControl(null),
      name: new FormControl(null, [Validators.required])
    });

    this.productDescription = new FormGroup({
      image: new FormControl(null, [Validators.required]),
      brand: new FormControl(null, [Validators.required])
    })

    this.variantForm = new FormGroup({
      variant: new FormArray([])
    });
  }

  ngOnInit(): void {
    this.addVariant();
  }

  addNewCategory() {
    this.productForm.get('category').setValue(this.productForm.value.newCategory);
    this.categoryList.push(this.productForm.value.newCategory);
    console.log(this.productForm.value.category)
  }

  addNewSubCategory() {
    const newSub = this.productForm.value.newSubCategory;
    const newCat = this.productForm.value.category;
    this.productForm.get('subCategory').setValue(this.productForm.value.newSubCategory);
    this.subCategoryList[newCat] = [];
    this.subCategoryList[newCat].push(newSub);
  }



  //variant methods---------------------------------------
  addVariant() {
    const varientForm = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      image: new FormControl()
    });
    (<FormArray>this.variantForm.get('variant')).push(varientForm);
  }

  removeVariant(i) {
    (<FormArray>this.variantForm.get('variant')).removeAt(i);
  }


  onSubmit() {
    let id: string;
    let productID: string;
    if (this.productForm.value.newCategory != null && this.productForm.value.newSubCategory != null) {
      // API  Call for generating new Category


    } else {
      // API call for productID generation for default Category
      
    }

    if(productID != null) {
      const product:productDetail = {
        productID: '',
        title: '',
        description: '',
        brand: '',
        image: '',
      }

      //Calling API to generate a product with following Details
    }


    console.log(this.productForm);
    console.log(this.productDescription);
    console.log(this.variantForm);
  }
}
