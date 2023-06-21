import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Brand } from 'src/app/model/brand.model';
import { Category } from 'src/app/model/category.model';
import { DataService } from 'src/app/services/data.service';
import { getCategory } from 'src/app/store/actions/product.actions';
import { selectCategory } from 'src/app/store/selector/product.selector';
import { VariantComponent } from '../variant/variant.component';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

interface category {
  id: string;
  category: string;
  subCategory: string;
  productName: string;
}

interface product {
  name: string;
  categoryId: number;
  subCategoryId: number;
  brandId: number;
  sellerId: number;
}
interface productDetail {
  productID: number;
  description: string;
  isActive: boolean;
  price: number;
  availableStock: number;
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productForm: FormGroup;
  categoryForm: FormGroup;
  attachmentForm: FormGroup;
  newCategory: string;
  newSubCategory: string;
  duration = '1000';
  selector$ = this.store.select(selectCategory);
  categoryList;
  subCategoryList;
  brandList;


  constructor(private store: Store, private service: DataService, public varient: MatDialog, private snackBar: MatSnackBar) {
    this.categoryForm = new FormGroup({
      category: new FormControl(null, [Validators.required]),
      subCategory: new FormControl(null, [Validators.required]),
      newCategory: new FormControl(null),
      newSubCategory: new FormControl(null),
      brand: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required])
    });

    this.productForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required])
    })
    this.attachmentForm = new FormGroup({
      attachments: new FormArray([])
    })
  }

  ngOnInit(): void {
    this.store.dispatch(getCategory());
    this.service.getCategory().subscribe((data: Category) => {
      this.categoryList = data.value;
    })
    // this.addVariant();
    this.service.getBrandDetails().subscribe((data: Brand) => {
      this.brandList = data.value;
    })
    this.addAttachment();
  }

  renderSubCategory() {
    if (this.categoryForm.value.category != 'Add Category') {
      const categoryID = this.categoryForm.get('category').value;
      this.service.getSubCategory(categoryID).subscribe((data: Category) => {
        this.subCategoryList = data.value;
        console.log(this.subCategoryList);
      })
    }
  }

  addNewCategory() {
    const obj = {
      name: this.categoryForm.value.newCategory
    }
    this.service.addCategory(obj);
  }

  addNewSubCategory() {
    const newSub = this.categoryForm.value.newSubCategory;
    this.categoryForm.get('subCategory').setValue(this.productForm.value.newSubCategory);
    const newSubCategory = {
      name: newSub,
      categoryId: this.categoryForm.value.category
    }
    console.log(typeof this.categoryForm.value.category);
    console.log(this.categoryForm.value.category);
    this.service.addSubCategory(newSubCategory);
  }


  addAttachment() {
    const attachments = new FormGroup({
      image: new FormControl(null, Validators.required)
    });
    (<FormArray>this.attachmentForm.get('attachments')).push(attachments);
  }

  removeAttachment(i) {
    (<FormArray>this.attachmentForm.get('attachments')).removeAt(i);
  }
  onSubmit() {
    let id: string;
    let productID: string;
    let product: product = {
      name: '',
      categoryId: 0,
      subCategoryId: 0,
      brandId: 0,
      sellerId: 0
    };
    let productId;
    if (this.categoryForm.value.newCategory != null && this.categoryForm.value.newSubCategory != null) {
      // API  Call for generating new Category


    } else {
      // API call for productID generation for default Category
      product.name = this.productForm.value.name;
      product.categoryId = this.categoryForm.value.category;
      product.brandId = this.categoryForm.value.brand;
      product.subCategoryId = this.categoryForm.value.subCategory;
      product.sellerId = 4;
      this.service.postProduct(product).subscribe((data: number) => {
        console.log(data);
        const product: productDetail = {
          productID: data,
          description: this.productForm.value.description,
          isActive: true,
          price: Number(this.categoryForm.value.price),
          availableStock: 10
        }
        console.log(product);
        //Calling API to generate a product with following Details

        this.service.postVariant(product).subscribe((data)=> {
          if(data != null) {
            this.snackBar.openFromComponent(ProductAdd, {
              duration: 1000
            })
          }
        });
      });
    }

    console.log(this.productForm);
    console.log(this.categoryForm);
    console.log(this.attachmentForm);
  }

  async openVarient() {
    const varientDialogBox = this.varient.open(VariantComponent, {
      width: "60%",
      height: "80%"
    });

    varientDialogBox.afterClosed().subscribe(data=> {
      console.log(data);
    })
  }
  
  trigger() {

  }
}


@Component({
  selector: 'snackbar',
  templateUrl: 'snackbar.component.html',
  standalone: true
})

export class ProductAdd{
  snackBarRef=inject(MatSnackBarRef);
}