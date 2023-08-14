import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-variant',
  templateUrl: './variant.component.html',
  styleUrls: ['./variant.component.scss']
})
export class VariantComponent {
  variantForm;
  constructor(public dialogRef: MatDialogRef<VariantComponent>) {
    this.variantForm = new FormGroup({
      variant: new FormArray([])
    });
  }

  //variant methods---------------------------------------
  addVariant() {
    const varientForm = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      image: new FormArray([])
    });
    (<FormArray>this.variantForm.get('variant')).push(varientForm);
  }

  removeVariant(i:any) {
    (<FormArray>this.variantForm.get('variant')).removeAt(i);
  }

  addAttachment(variant: FormGroup) {
    const attachment = new FormControl();

    (<FormArray>variant.get('image')).push(attachment);
  }

  removeAttachment(variant:FormGroup,j:any) {
    (<FormArray>variant.get('image')).removeAt(j);
  }
  close() {
    this.dialogRef.close(this.variantForm.value);
  }
}
