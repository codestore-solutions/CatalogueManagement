import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Brand } from 'src/app/model/brand.model';
import { DataService } from 'src/app/services/data.service';


interface brand {
  id: number;
  name: string;
}
@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {
  brandList: brand[];
  selection = new SelectionModel<brand>(true, []);
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [];
  tableHeaders = [
    { header: 'ID', field_name: 'id' },
    { header: 'Name', field_name: 'name' },
    { header: 'Action', field_name: 'action'}
  ];
  constructor(private service: DataService) {

  }

  ngOnInit(): void {
    this.service.getBrandDetails().subscribe((data: Brand) => {
      this.brandList = data.value;
      this.dataSource = new MatTableDataSource(this.brandList);
    });
    this.displayedColumns.push('select');
    this.displayedColumns = this.displayedColumns.concat(this.tableHeaders.map(c => c.field_name));

  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
    console.log(this.selection)
  }

  checkboxLabel(row?: brand): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  deleteBrand(element: brand) {
    this.service.deleteBrand(element.id);
  }

  updateBrand(element: brand) {
    this.service.updateBrand(element);
  }

  applySearchFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
