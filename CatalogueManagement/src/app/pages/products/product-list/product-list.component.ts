import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ResponseDTO } from '../../model/category.model';
import { DataService } from 'src/app/services/data.service';
import { ProductDTO, ProductsLists } from '../../model/productdto';
import { MatSort } from '@angular/material/sort';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  
  constructor(private service: DataService,private router:Router) {
  }
  /* Search, Sort and Paging Parameters */
  searchValue:string = "";
  sortOrder:string = "desc";
  sortOn:string ="CreatedOn";
  pageSize:number = 10;  //default size = 10  
  pageIndex:number = 0;   
  totalResults!:number;

  length = 50;
  pageSizeOptions = [5, 10, 25];
  results: ProductsLists  =        
  {
    totalCount:0,
    records:[],
  }

  displayedColumns: string[] = ['id', 'name','catagory','stock','brand', 'price','rating','date','action'];
  dataSource: MatTableDataSource<ProductDTO>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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
  onView(id:any){
    this.router.navigate(['pages/products/view/',btoa(id)]);
  }
}