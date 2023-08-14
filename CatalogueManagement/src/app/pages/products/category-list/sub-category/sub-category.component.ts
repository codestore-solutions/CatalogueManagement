import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/pages/model/category.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit{
  @Input() category: any;
  tableHeaders = [
    { header: 'S/N', field_name: 'serial'},
    { header: 'Sub-CategoryID', field_name:'id'},
    { header: 'Sub Category Name', field_name: 'name'},
  ]
  dataSource : MatTableDataSource<any>;
  displayedColumns: string[] = [];
  constructor(private service: DataService) {

  }

  ngOnInit(): void {
    console.log(this.category);
    this.service.getSubCategoryByID(this.category.id).subscribe((data: Category)=> {
      this.dataSource = new MatTableDataSource(data.value);
    })
    this.displayedColumns = this.displayedColumns.concat(this.tableHeaders.map(c => c.field_name));
  }
}
