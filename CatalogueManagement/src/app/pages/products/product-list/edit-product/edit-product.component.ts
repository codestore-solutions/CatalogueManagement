import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { VariantComponent } from '../../variant/variant.component';
import { Brand } from 'src/app/pages/model/brand.model';
import { DataService } from 'src/app/services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ResponseDTO } from 'src/app/pages/model/category.model';
import { MatTableDataSource } from '@angular/material/table';
import { ProductDTO } from 'src/app/pages/model/productdto';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  subCategoryList:any[];
  categoryList:any[];
  brandList:any[];
  productForm:FormGroup;
  displayedColumns: string[] = ['id', 'name','catagory','stock','brand', 'price','rating','date','action'];
  dataSource: MatTableDataSource<ProductDTO>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service:DataService,private location:Location,private fb:FormBuilder,public dialog: MatDialog) { 
    this.productForm=this.fb.group({
      title:['',Validators.required],
      tags:[''],
      brandId:['',Validators.required],
      categoryId:['',Validators.required],
      subCategoryId:['',Validators.required],
      productDescription:['',Validators.required]
    });
  }
  
 
  ngOnInit() {
    this.service.getProducts().subscribe((data: ResponseDTO) => {
      this.dataSource = new MatTableDataSource(data.value);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  backNav() {
    this.location.back();
  }

  onSubmit(){

  }
 
  //todo: https calls for product add or udpate
  onAddVariant() {
    this.dialog.open(VariantComponent, {
      data: {
        productId: 'as213sd-3221bdhs7',
        variantId:'var324sf-asfas'
      },
      disableClose:true
      });
  }

  onEditVariant(variantId:number){
    this.dialog.open(VariantComponent, {
      data: {
        productId: 'as213sd-3221bdhs7',
        variantId:'var324sf-asfas'
      },
      disableClose:true
      });
  }
}
