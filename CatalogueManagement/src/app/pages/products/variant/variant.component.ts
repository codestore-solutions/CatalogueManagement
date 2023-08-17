import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-variant',
  templateUrl: './variant.component.html',
  styleUrls: ['./variant.component.scss']
})
export class VariantComponent {
  variantForm:FormGroup;  

  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  
//==================================================
  basicInfo:FormGroup;
  isEditable = false;
  selectedFiles: FileList;
  previews: string[] = [];
  hasImage=true;
  //==================================================
  constructor(public dialogRef: MatDialogRef<VariantComponent>,private fb:FormBuilder) {
    this.variantForm = this.fb.group({  
      name: [Validators.required],  
      variantDetails: this.fb.array([]) ,  
    }); 
    this.basicInfo=this.fb.group({
      name:['',Validators.required],
      sku:[''],
      price:['',Validators.required],
      uom:['',Validators.required],
      stock:['',Validators.required],
      prodImage:['']
    });
  }

  //variant methods---------------------------------------
  //Todo:- API's CALL
  onSubmitBaisc(stepper:MatStepper){
    if(!this.basicInfo.valid){
      return;
    }
    //todo: throw toaster message
    if(this.selectedFiles==undefined){
      this.hasImage=false;
      return;
    }
    //todo:- http client call
    let formData = new FormData();
    formData.append('name',this.basicInfo.value.name);
    formData.append('sku',this.basicInfo.value.sku);
    formData.append('uom',this.basicInfo.value.uom);
    formData.append('price',this.basicInfo.value.price);
    formData.append('stock',this.basicInfo.value.stock);
    for (var i = 0; i < this.selectedFiles.length; i++) { 
      formData.append("prodImage[]", this.selectedFiles[i]);
    }
    stepper.next();   
  }

 

  selectFiles(event: any): void {
    this.selectedFiles = event.target.files;
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };
        reader.readAsDataURL(this.selectedFiles[i]);
      }
      this.hasImage=true;
    }
    else{
      this.hasImage=false;
    }
  }

  variantsDetails() : FormArray {  
    return this.variantForm.get("variantDetails") as FormArray  
  }  
 
  newVariantDetail(): FormGroup {  
    return this.fb.group({  
      specification: '',  
      description: '',  
    })  
  }  

  addVariantDetail() {  
    debugger
    this.variantsDetails().push(this.newVariantDetail());  
  }  
     
  removeDetail(i:number) {  
    this.variantsDetails().removeAt(i);  
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
