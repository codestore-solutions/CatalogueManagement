import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder, FormArrayName } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-variant',
  templateUrl: './variant.component.html',
  styleUrls: ['./variant.component.scss']
})
export class VariantComponent {
  

//==================================================
  basicInfo:FormGroup;
  attachmentForm:FormGroup;
  isEditable = false;
  selectedFiles: FileList;
  previews: string[] = [];
  hasImage=true;
  hasFeatureServiceError=true;
  sellingPrice:number=0;
  //==================================================
  constructor(private fb:FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {
    
    this.basicInfo=this.fb.group({
      name:['',Validators.required],
      sku:[''],
      price:['',Validators.required],
      uom:['',Validators.required],
      stock:['',Validators.required],
      featureDescription:['',Validators.required],
      discountPer:['',Validators.required],
      features: this.fb.array([]),
      services:this.fb.array([]),
      // prodImage:[''],
      productId:['',Validators.required]
    });

    this.attachmentForm = this.fb.group({
      productId:['',Validators.required],
      variantId:['',Validators.required],
      prodImage:[''],
      variantDetails:this.fb.array([])
    });

    if(data && data.productId && data.variantId){
      this.basicInfo.get('productId').setValue(data.productId);
      this.attachmentForm.get('productId').setValue(data.productId);
      this.attachmentForm.get('variantId').setValue(data.variantId);
    }
    
  }

  //variant methods---------------------------------------
  //Todo:- API's CALL
  onSubmitBaisc(stepper:MatStepper){
    debugger
    // if(this.basicInfo.value.features.length<=0 || this.basicInfo.value.services.length<=0){
    //   this.hasFeatureServiceError=false;
    //   return;
    // }
    // if(!this.basicInfo.valid){
    //   return;
    // }
    
    //todo:- http client call
    let formData = new FormData();
    formData.append('name',this.basicInfo.value.name);
    formData.append('sku',this.basicInfo.value.sku);
    formData.append('uom',this.basicInfo.value.uom);
    formData.append('price',this.basicInfo.value.price);
    formData.append('stock',this.basicInfo.value.stock);
    // for (var i = 0; i < this.selectedFiles.length; i++) {
    //   formData.append("prodImage[]", this.selectedFiles[i]);
    // }
    var featureArray=[];
    this.basicInfo.value.features.forEach(element => {
      featureArray.push(element.feature);
    });
    var serviceArray=[];
    this.basicInfo.value.services.forEach(element => {
      serviceArray.push(element.service);
    });
    var featureObj={
      description:'',
      features:featureArray,
      services:serviceArray
    }
    formData.append('features',JSON.stringify(featureObj));
    stepper.next();
  }

  onSubmitAttachment(stepper:MatStepper){
    //todo: throw toaster message
    /*if(this.selectedFiles==undefined){
      this.hasImage=false;
      return;
    }
    if(!this.attachmentForm.valid){
      return;
    }*/
    //todo:- http client call
    let formData = new FormData();
    // for (var i = 0; i < this.selectedFiles.length; i++) {
    //   formData.append("prodImage[]", this.selectedFiles[i]);
    // }
    formData.append('productId','');
    formData.append('variantId','');
    formData.append('variantDetails','');
    
    console.log(this.attachmentForm.value);

    //todo:http calls
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
    return this.attachmentForm.get("variantDetails") as FormArray
  }
  newVariantDetail():FormGroup{
    return this.fb.group({
      specification: '',
      description:''
    })
  }
  addVariantDetail() {
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

  /*****
   *Creating a Features Array 
   */
  getFeatureForm():FormArray{
    return this.basicInfo.get("features") as FormArray
  }

  addFeature(){
    this.getFeatureForm().push(this.newFeature());
  }

  removeFeature(i:number) {
    this.getFeatureForm().removeAt(i);
  }

  newFeature():FormGroup{
    return this.fb.group({
      feature: '',
    })
  }
  /************************* */
    /*****
   *Creating a Services Array 
   */
   getServiceForm():FormArray{
    return this.basicInfo.get("services") as FormArray
  }

  addService(){
    this.getServiceForm().push(this.newService());
  }

  removeService(i:number) {
    this.getServiceForm().removeAt(i);
  }
  
  newService():FormGroup{
    return this.fb.group({
      service: '',
    })
  }
  /************************* */
}
