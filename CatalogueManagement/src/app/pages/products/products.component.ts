import { Component, Inject, OnInit, ViewChild, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { DataService } from 'src/app/services/data.service';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatChipInputEvent } from '@angular/material/chips';
import { CommonModule, Location } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { SharedModule } from 'src/app/shared_modules/shared/shared.module';
import { MatPaginator } from '@angular/material/paginator';
import { Category } from '../model/category.model';
import { Brand } from '../model/brand.model';
import { Product } from '../model/product.model';


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
  varients: Array<any>
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
  fetchedProduct;
  variantList: MatTableDataSource<any>;
  variantTableHeader = [
    { header: 'S/N', field_name: 'sn'},
    { header: "Stock", field_name: 'availableStock' },
    { header: "ID", field_name: "id" },
    { header: "Price", field_name: "price" },
    { header: "SKU", field_name: "sku"},
    { header: "UOM", field_name: "uom"},
    { header: "Action", field_name: "action" }
  ]
  displayedColumns: string[] = [];
  @ViewChild('paginator') paginator: MatPaginator;
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  start: number = 0;
  limit: number = 5;
  end: number = this.limit + this.start;
  activeProduct: boolean;

  constructor(private service: DataService, public variant: MatDialog, private snackBar: MatSnackBar, private activatedRoute: ActivatedRoute, private location: Location) {
    this.requester = this.activatedRoute.snapshot.params['requester'];
    console.log('working')
    console.log(this.activatedRoute.snapshot.params['requester']);
    // This is product form containing basic details
    this.categoryForm = new FormGroup({
      category: new FormControl({ value: '', disabled: this.requester != null }),
      subCategory: new FormControl({ value: '', disabled: this.requester != null }),
      brand: new FormControl({ value: '', disabled: this.requester != null }),
      title: new FormControl({ value: '', disabled: this.requester != null }),
      currency: new FormControl({value: 'rupee', disabled: true}, (Validators.required)),
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
    // If we navigate to this component through product list
    if (this.requester != null) {
      this.productDetails(parseInt(this.requester));
      setTimeout(() => {
        this.fetchedProduct = JSON.parse(localStorage.getItem('productDetail'));
        console.log(this.fetchedProduct);
        const patchObject = {
          category: this.fetchedProduct.categoryId,
          subCategory: this.fetchedProduct.subCategoryId,
          brand: this.fetchedProduct.brandId,
          title: this.fetchedProduct.name,
          currency: null,
          tag: []
        }
        this.variantList = new MatTableDataSource(this.fetchedProduct.varients);
        this.variantList.paginator = this.paginator;

        this.renderSubCategoryById(this.fetchedProduct.categoryId);
        this.categoryForm.patchValue(patchObject);
      }, 1000)
    }
    console.log(this.requester);
    this.displayedColumns = this.displayedColumns.concat(this.variantTableHeader.map(c => c.field_name));
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
    if(this.requester == null) {
      this.addVariant();
    }
  }

  productDetails(productID: number) {
    this.service.getProductById(productID).subscribe((data: Product) => {
      localStorage.setItem("productDetail", JSON.stringify(data));
    })
  }

  // Functions for sub-category
  renderSubCategory() {
    if (this.categoryForm.value.category != 'Add Category') {
      const categoryID = this.categoryForm.value.category;
      console.log(categoryID);
      this.service.getSubCategory(categoryID).subscribe((data: Category) => {
        this.subCategoryList = data.value;
        console.log(this.subCategoryList);
      })
    }
  }

  async renderSubCategoryById(categoryID) {
    this.service.getSubCategory(categoryID).subscribe((data: Category) => {
      this.subCategoryList = data.value
    })
  }


  // functions for attachments
  // addAttachment() {
  //   const attachments = new FormGroup({
  //     image: new FormControl(null, Validators.required)
  //   });
  //   (<FormArray>this.attachmentForm.get('attachments')).push(attachments);
  // }

  // removeAttachment(i) {
  //   (<FormArray>this.attachmentForm.get('attachments')).removeAt(i);
  // }

  addAttachment(variant: FormGroup) {
    const attachment = new FormControl();

    (<FormArray>variant.get('image')).push(attachment);
  }

  removeAttachment(variant: FormGroup, j) {
    (<FormArray>variant.get('image')).removeAt(j);
  }
  // functions for adding or deleting variants
  addVariant() {
    const varientForm = new FormGroup({
      price: new FormControl(null),
      name: new FormControl(null),
      sku: new FormControl(null),
      uom: new FormControl(null),
      description: new FormControl(null),
      image: new FormArray([])
    });
    (<FormArray>this.variantForm.get('variant')).push(varientForm);
  }

  removeVariant(i) {
    (<FormArray>this.variantForm.get('variant')).removeAt(i);
  }

  // Functions for adding or deleting tags
  addTag(event: MatChipInputEvent) {
    const value = (event.value || ' ').trim();
    if (value) {
      this.tags.push(value);
    }
    event.chipInput!.clear();
  }

  removeTag(tag: string) {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
      this.announcer.announce(`tag removed ${tag}`);
    }
  }

  // For editing of variant
  editVariant(element) {
    this.variant.open(EditVariant, {
      height: "60%",
      width: '60%',
      data: {
        variant: element
      }
    })
  }
  // main submit function for forms 
  onSubmit() {
    let id: string;
    let productID: string;
    let product: product = {
      name: '',
      categoryId: 0,
      subCategoryId: 0,
      brandId: 0,
      sellerId: 0,
      varients: []
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
      product.sellerId = 2;
      for(let variant of this.variantForm.value.variant) {
        const dummyVariant = {
          description: variant.description,
          price: variant.price,
          isActive: this.activeProduct,
          name: variant.name,
          uom: variant.uom,
          sku: variant.sku
        }
        product.varients.push(dummyVariant);
      }
      console.log(product);
      this.service.postProductWithDetails(product).subscribe((data)=> {
        if(data != null) {
          this.snackBar.open("Product Added Successfully", "Close", {
            duration: 2000
          })
        }
      })

      // this.service.postProduct(product).subscribe((data: number) => {
      //   console.log(data);
      //   const firstVariant = (<FormArray>this.variantForm.get('variant')).value;
      //   console.log(firstVariant[0]);
      //   const product: productDetail = {
      //     productID: data,
      //     description: firstVariant[0].description,
      //     isActive: true,
      //     price: Number(firstVariant[0].price),
      //     availableStock: 10
      //   }
      //   console.log(product);
      //   //Calling API to generate a product with following Details

      //   this.service.postVariant(product).subscribe((data) => {
      //     if (data != null) {
      //       this.snackBar.openFromComponent(ProductAdd, {
      //         duration: 1000
      //       })
      //     }
      //   });
      // });
    }
    console.log(this.categoryForm);
  }
  
  //for infinite scroll
  onTableScroll(e) {
    const tableViewHeight= e.target.offsetHeight;
    const tableScrollHeight = e.target.scrollHeight;
    const scrollLocation = e.target.scrollTop;

    const buffer = 200;
    const limit = tableScrollHeight - tableViewHeight - buffer;
    if(scrollLocation > limit) {
      //Data Update;

    }
  }
  getTableData(start, end) {
    //API call for next data;
  }

  updateIndex() {
    this.start = this.end;
    this.end = this.limit + this.start;
  }
  // Setting up active status of product
  changeStatusToFalse() {
    this.activeProduct = false;
  }
  changeStatusToTrue() {
    this.activeProduct = true;
  }
  // back navigation
  backNav() {
    localStorage.setItem('productDetail', null);
    this.location.back();
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

@Component({
  selector: 'add-brand',
  templateUrl: './edit-variant/edit-variant.component.html',
  styleUrls: ['./edit-variant/edit-variant.component.scss'],
  standalone: true,
  imports: [SharedModule, CommonModule]
})
export class EditVariant implements OnInit {
  name = ''
  variantForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<EditVariant>, private service: DataService, @Inject(MAT_DIALOG_DATA) public data: any, private snackbar: MatSnackBar) {
    this.variantForm = new FormGroup({
      price: new FormControl(null),
      name: new FormControl(null),
      sku: new FormControl(null),
      ucm: new FormControl(null),
      description: new FormControl(null),
      image: new FormArray([])
    })
  }
  ngOnInit(): void {
    const variant = this.data.variant;
    const patchObject = {
      price: variant.price,
      name: "Coming Soon",
      sku: "Coming Soon",
      ucm: "Coming Soon",
      description: variant.description,
      image: []
    }
    this.variantForm.patchValue(patchObject);
  }

  addAttachment() {
    const attachment = new FormControl();

    (<FormArray>this.variantForm.get('image')).push(attachment);
  }

  removeAttachment(j) {
    (<FormArray>this.variantForm.get('image')).removeAt(j);
  }
  onSave() {
    
    this.dialogRef.close();
    this.snackbar.open("Brand Added Succesfully", "Close", {
      duration: 2000
    })
  }

  onClose() {
    this.dialogRef.close();
  }
}