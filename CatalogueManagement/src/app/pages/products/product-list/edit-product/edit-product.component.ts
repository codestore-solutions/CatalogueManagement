import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { VariantComponent } from '../../variant/variant.component';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  subCategoryList:any[];
  categoryList:any[];
  brandList:any[];
  constructor(private location:Location,private fb:FormBuilder,public dialog: MatDialog) { }
  productForm = this.fb.group({

  })
  ngOnInit(): void {
  }

  backNav() {
    this.location.back();
  }

  onSubmit(){

  }
  openDialog() {
    this.dialog.open(VariantComponent, {
      data: {
        animal: 'panda',
      },
      disableClose:true
    });
  }
}
