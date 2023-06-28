import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Brand } from 'src/app/model/brand.model';
import { Category } from 'src/app/model/category.model';
import { DataService } from 'src/app/services/data.service';
import { VariantComponent } from '../variant/variant.component';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatChipInputEvent } from '@angular/material/chips';


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
  categoryList = [];
  subCategoryList = [];
  brandList = [];
  requester: string;
  variantForm: FormGroup<{ variant: FormArray<any>; }>;
  tags = ['Tags'];
  announcer = inject(LiveAnnouncer);

  constructor(private store: Store, private service: DataService, public varient: MatDialog, private snackBar: MatSnackBar, private activatedRoute: ActivatedRoute) {
    // This is product form containing basic details
    this.categoryForm = new FormGroup({
      category: new FormControl(null, [Validators.required]),
      subCategory: new FormControl(null, [Validators.required]),
      newCategory: new FormControl(null),
      newSubCategory: new FormControl(null),
      brand: new FormControl(null, [Validators.required]),
      title: new FormControl(null, (Validators.required)),
      currency: new FormControl(null, (Validators.required)),
      tag: new FormControl([], (Validators.required))
    });

    this.attachmentForm = new FormGroup({
      attachments: new FormArray([])
    })

    // this is variant form containing varients info
    this.variantForm = new FormGroup({
      variant: new FormArray([])
    });
  }

  ngOnInit(): void {
    this.requester = this.activatedRoute.snapshot.params['requester'];
    console.log(this.requester);
    this.service.getCategory().subscribe((data: Category) => {
      if (data != null) {
        this.categoryList = data.value;
      }
    })
    // this.addVariant();
    this.service.getBrandDetails().subscribe((data: Brand) => {
      if (data != null) {
        this.brandList = data.value;
      }
    })
    this.addVariant();
  }

  renderSubCategory() {
    if (this.categoryForm.value.category != 'Add Category') {
      const categoryID = this.categoryForm.get('category').value;
      console.log(categoryID);
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

  addVariant() {
    const varientForm = new FormGroup({
      price: new FormControl(null),
      name: new FormControl(null),
      sku: new FormControl(null),
      ucm: new FormControl(null),
      description: new FormControl(null)
    });
    (<FormArray>this.variantForm.get('variant')).push(varientForm);
  }

  removeVariant(i) {
    (<FormArray>this.variantForm.get('variant')).removeAt(i);
  }

  addTag(event : MatChipInputEvent) {
    const value = (event.value || ' ').trim();
    if(value) {
      this.tags.push(value);
    }
    event.chipInput!.clear();
  }

  removeTag(tag: string) {
    const index = this.tags.indexOf(tag);
    if(index>=0){
      this.tags.splice(index, 1);
      this.announcer.announce(`tag removed ${tag}`);
    }
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
      product.name = this.categoryForm.value.title;
      product.categoryId = this.categoryForm.value.category;
      product.brandId = this.categoryForm.value.brand;
      product.subCategoryId = this.categoryForm.value.subCategory;
      product.sellerId = 4;

      this.service.postProduct(product).subscribe((data: number) => {
        console.log(data);
        const firstVariant = (<FormArray>this.variantForm.get('variant')).value;
        console.log(firstVariant[0]);
        const product: productDetail = {
          productID: data,
          description: firstVariant[0].description,
          isActive: true,
          price: Number(firstVariant[0].price),
          availableStock: 10
        }
        console.log(product);
        //Calling API to generate a product with following Details

        this.service.postVariant(product).subscribe((data) => {
          if (data != null) {
            this.snackBar.openFromComponent(ProductAdd, {
              duration: 1000
            })
          }
        });
      });
    }
    console.log(this.categoryForm);
  }

  async openVarient() {
    const varientDialogBox = this.varient.open(VariantComponent, {
      width: "60%",
      height: "80%"
    });

    varientDialogBox.afterClosed().subscribe(data => {
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

export class ProductAdd {
  snackBarRef = inject(MatSnackBarRef);
}