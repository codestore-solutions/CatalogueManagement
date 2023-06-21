import { trigger, state, style, transition, animate } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/model/category.model';
import { DataService } from 'src/app/services/data.service';


interface category {
  id: number;
  name: number;
  expanded: boolean;
}

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class CategoryListComponent implements OnInit{
  categoryList: category[];
  dataSource: MatTableDataSource<any>;
  tableHeaders = [
    { header: 'Category ID', field_name: 'id' },
    { header: 'Category Name', field_name: 'name' },
    { header: 'Action', field_name: 'action'},
    { header: 'Expand', field_name: 'expandRow' }
  ]
  displayedColumns: string[] = [];
  selection = new SelectionModel<category>(true, []);
  isExpanded = (i: number, row: any) => row.expanded;

  constructor(private service: DataService) {

  }

  ngOnInit(): void {
    this.service.getCategory().subscribe((data: Category) => {
      this.categoryList = data.value;
      console.log(this.categoryList);
      this.dataSource = new MatTableDataSource(this.categoryList);
    })
    this.displayedColumns.push('select');
    this.displayedColumns = this.displayedColumns.concat(this.tableHeaders.map(c => c.field_name));
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if(this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row? : category): string{
    if(!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return  `${this.isAllSelected() ? 'deselect': 'select'} all`;
  }
  toggleExpansion(element: any) {
    element.expanded = !element.expanded;
  }

  applySearchFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
