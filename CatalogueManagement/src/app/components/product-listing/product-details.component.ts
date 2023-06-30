import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { Product } from 'src/app/model/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private service: DataService, private router: Router) {

  }
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [];
  @ViewChild('paginator') paginator: MatPaginator;
  tableHeaders = [
    { header: "S/N", field_name: 'sn'},
    { header: 'Product Name', field_name: 'name' },
    { header: "Rating", field_name: 'rating' },
    { header: "Price", field_name: 'price' },
    { header: 'Actions', field_name: 'actions' }
  ];
  ngOnInit() {
    this.service.getProducts().subscribe((data: Category) => {
      console.log(data.value);
      this.dataSource = new MatTableDataSource(data.value);
      this.dataSource.paginator = this.paginator;
    })
    this.displayedColumns = this.displayedColumns.concat(this.tableHeaders.map(c => c.field_name));

  }


  ngOnChanges() {

  }

  onDetail(item) {

  }

  onEdit(element) {
    this.router.navigate([`products/${element.id}`])
  }

  applySearchFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addProduct() {
    this.router.navigate(['products'])
  }

  goToDetail() {
    this.router.navigate(['prodDetail'])
  }
}
