import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';
import { Brand } from '../../model/brand.model';

interface brand {
  id: number;
  name: string;
}
@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit{
  brandList: brand[];
  selection = new SelectionModel<brand>(true, []);
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [];
  tableHeaders = [
    { header: 'S/N', field_name: 'sn'},
    { header: 'Name', field_name: 'name' },
    { header: 'Action', field_name: 'action' }
  ];
  constructor(private service: DataService, public dialog: MatDialog, private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.service.getBrandDetails().subscribe((data: Brand) => {
      this.brandList = data.value;
      this.dataSource = new MatTableDataSource(this.brandList);
    });
    this.displayedColumns = this.displayedColumns.concat(this.tableHeaders.map(c => c.field_name));
  }

  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  // toggleAllRows() {
  //   if (this.isAllSelected()) {
  //     this.selection.clear();
  //     return;
  //   }
  //   this.selection.select(...this.dataSource.data);
  //   console.log(this.selection)
  // }

  // checkboxLabel(row?: brand): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  // }

  deleteBrand(element: brand) {
    this.service.deleteBrand(element.id);
  }

  updateBrand(element: brand) {
    const dialogRef = this.dialog.open(EditBrand, {
      width: "905px",
      height: "250px",
      panelClass: "my-class",
      data: {
        "requestType": "update",
        "brandID": element.id
      }
    })
    this.reRenderTable();
  }

  applySearchFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addBrand() {
    const dialogRef = this.dialog.open(AddBrand, {
      width: "905px",
      height: "260px",
      panelClass: "my-class",
      data: {
        "requestType": "add"
      }
    })
    this.reRenderTable();
  }
  reRenderTable() {
    this.service.getBrandDetails().subscribe((data: Brand) => {
      this.dataSource.data = data.value;
      this.changeDetectorRef.markForCheck();
    })
  }
}


// --------------------------------------------------------------Dialog box for adding brand
@Component({
  selector: 'add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss'],
  standalone: true,
  imports: [FormsModule, MatButtonModule, CommonModule]
})
export class AddBrand implements OnInit {
  name = ''
  constructor(public dialogRef: MatDialogRef<AddBrand>, private service: DataService, @Inject(MAT_DIALOG_DATA) public data: any, private snackbar: MatSnackBar) {

  }
  ngOnInit(): void {

  }

  onSave() {
    const brand = {
      name: this.name
    }
    this.service.addBrand(brand);
    this.dialogRef.close();
    this.snackbar.open("Brand Added Succesfully", "Close", {
      duration: 2000
    })
  }

  onClose() {
    this.dialogRef.close();
  }
}

// ---------------------------------------------Edit Brand Dialogue
@Component({
  selector: 'edit-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss'],
  standalone: true,
  imports: [FormsModule, MatButtonModule, CommonModule]
})
export class EditBrand implements OnInit {
  name = ''
  constructor(public dialogRef: MatDialogRef<AddBrand>, private service: DataService, @Inject(MAT_DIALOG_DATA) public data: any, private snackbar: MatSnackBar) {

  }
  ngOnInit(): void {
    console.log(this.data);
  }

  onSave() {
    const brand = {
      id: this.data.brandID,
      name: this.name
    }
    this.service.updateBrand(brand);
    this.dialogRef.close();
    this.snackbar.open("Brand Added Succesfully", "Close", {
      duration: 2000
    })
  }

  onClose() {
    this.dialogRef.close();
  }
}