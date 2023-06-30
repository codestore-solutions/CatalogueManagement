import { trigger, state, style, transition, animate } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnChanges, OnInit, SimpleChanges, ViewChild, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/model/category.model';
import { DataService } from 'src/app/services/data.service';
import { AddBrand } from '../brand-list/brand-list.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';


interface category {
  id: number;
  name: string;
  expanded: boolean;
  subCategory: MatTableDataSource<any>
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


export class CategoryListComponent implements OnInit {
  categoryList: category[];
  dataSource: MatTableDataSource<any>;
  // innerDataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [];
  innerDisplayedColumns: string[] = [];
  categoryTableHeaders = [
    { header: 'S/N', field_name: 'sn'},
    { header: 'Category Name', field_name: 'name' },
    { header: 'Action', field_name: 'action' }
  ]

  subCategoryTableHeaders = [
    { header: 'Sub Category ID', field_name: 'id' },
    { header: 'Sub Category Name', field_name: 'name' },
    { header: 'Action', field_name: 'action' }
  ]
  @ViewChild('paginator') paginator: MatPaginator;
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  selection = new SelectionModel<category>(true, []);
  expandedElement;
  constructor(private service: DataService, public dialog: MatDialog, private detector: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.service.getCategory().subscribe((data: Category) => {
      // this.categoryList = data.value;

      // this.categoryList = this.categoryList.map((data) => ({
      //   ...data,
      //   isExpanded: false
      // }))
      // console.log(this.categoryList);
      // this.dataSource = new MatTableDataSource(this.categoryList);
      this.categoryList = data.value;
      let index = 0;
      this.categoryList.forEach(category => {
        this.service.getSubCategoryByID(category.id).subscribe((data: Category) => {
          category.subCategory = new MatTableDataSource(data.value);
        });
        this.dataSource = new MatTableDataSource(this.categoryList);
        this.dataSource.paginator = this.paginator;
      });
    })

    this.displayedColumns = this.displayedColumns.concat(this.categoryTableHeaders.map(c => c.field_name));
    this.innerDisplayedColumns = this.innerDisplayedColumns.concat(this.subCategoryTableHeaders.map(c => c.field_name));
    this.displayedColumns.push('expand');
  }

  toggleExpansion(element: any) {
    element.subCategory && (element.subCategory as MatTableDataSource<any>).data.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.detector.detectChanges();
  }


  //adding selection in the mat-table
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);

  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  checkboxLabel(row?: category): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  }

  //adding search filter in the mat-table
  applySearchFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //---------------------------------------------Add Category
  addCategory() {
    this.dialog.open(AddCategory, {
      width: "900px",
      height: "591px",
      data: {
        "requestType": "add category"
      }
    })
  }
}

// ---------------------------------------------- Dialogue to add category
@Component({
  selector: 'add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
  standalone: true,
  imports: [FormsModule, MatButtonModule, CommonModule]
})
export class AddCategory implements OnInit {
  name = '';
  categoryList;
  categoryID;

  constructor(public dialogRef: MatDialogRef<AddBrand>, private service: DataService, @Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar) {

  }
  ngOnInit(): void {
    console.log(this.data);
    this.service.getCategory().subscribe((data: Category) => {
      this.categoryList = data.value;
    })
  }


  onSaveCategory() {
    const category = {
      name: this.name
    }
    this.service.addCategory(category);
    this.snackBar.open("Category Added Successfully", "Close", {
      duration: 2000
    });
  }

  onSaveSubCategory() {
    console.log(this.categoryID);
    const subCategory = {
      name: this.name,
      categoryID: this.categoryID
    }
    this.service.addSubCategory(subCategory);
    this.snackBar.open("Sub Category Added Successfully", "Close", {
      duration: 2000
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
