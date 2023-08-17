import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/services/constants';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.scss']
})
export class ProdDetailComponent implements OnInit{
  requester: any;
  productDetails:ProductDetailDto;
  dateFormat=Constants.DATE_FMT;
  previewImage:string;  
  constructor(private service:DataService,private activatedRoute: ActivatedRoute, private router: Router, private location: Location) {
    this.requester = this.activatedRoute.snapshot.paramMap.get('id');
  }
  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
    this.service.getProductById(parseInt(atob(this.requester))).subscribe((data:any)=>{
      //this.productDetails = data;
      console.log(data);
    })

    this.productDetails={
      "attachment":["https://m.media-amazon.com/images/I/61PgOZ-IH0L._UL1244_.jpg","https://m.media-amazon.com/images/I/516n3XO62LL._UL1262_.jpg","https://m.media-amazon.com/images/I/81oy44yxNdL._UL1300_.jpg"],
      "brandName":"Tommy Hilfiger",
      "category":"T-Shirt",
      "feedbackCount":109,
      "rating":3.5,
      "productTitle":"Full Sleeve Sweathshirt for Men",
      "price":120.35,
      "sku":"4453",
      "ordersCount":214,
      "availableStock":12,
      "productID":"1",
      "variantID":"2",
      "productDescription":"A T-shirt (also spelled tee shirt), or tee for short, is a style of fabric shirt named after "+
      "the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew"+
           " neck, which lacks a collar. T-shirts are generally made of a stretchy, light, and inexpensive fabric and are easy to clean.",
      "features":["list OF String Pointers","All Size Available","Cotton fabric"],
      "services":["COD","10 days replacement","Non-refundable"],
      "productDetails":"",
      "createdOn":"2023/09/09"	
    }
    //todo:default Image should be bind
    this.previewImage=this.productDetails.attachment[0];
  }

  backNav() {
    this.location.back();
  }

  onClickImage(imgPath:string){
    this.previewImage=imgPath;
  }

  //todo: on click variant ID select change the Variant
  onClickChangeVariant(variantId:number){
    if(variantId==1){
    this.productDetails={
      "attachment":["https://m.media-amazon.com/images/I/61PgOZ-IH0L._UL1244_.jpg","https://m.media-amazon.com/images/I/516n3XO62LL._UL1262_.jpg","https://m.media-amazon.com/images/I/81oy44yxNdL._UL1300_.jpg"],
      "brandName":"Tommy Hilfiger",
      "category":"T-Shirt",
      "feedbackCount":109,
      "rating":3.5,
      "productTitle":"Full Sleeve Sweathshirt for Men",
      "price":120.35,
      "sku":"4453",
      "ordersCount":214,
      "availableStock":12,
      "productID":"1",
      "variantID":"2",
      "productDescription":"A T-shirt (also spelled tee shirt), or tee for short, is a style of fabric shirt named after "+
      "the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew"+
           " neck, which lacks a collar. T-shirts are generally made of a stretchy, light, and inexpensive fabric and are easy to clean.",
      "features":["list OF String Pointers","All Size Available","Cotton fabric"],
      "services":["COD","10 days replacement","Non-refundable"],
      "productDetails":"",
      "createdOn":"2023/09/09"	
    }
  }
  if(variantId==2){
    this.productDetails={
      "attachment":["https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/c/7/m/-original-imaghuks3gzzn4ye.jpeg?q=70","https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/e/s/k/-original-imaghuksuph7wthn.jpeg?q=70","https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/a/c/l/-original-imaghukr2grzph8n.jpeg?q=70","https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/f/a/6/-original-imaghuksshpk8ux8.jpeg?q=70"],
      "brandName":"Levis",
      "category":"T-Shirt",
      "feedbackCount":1110,
      "rating":4.7,
      "productTitle":"Full Sleeve Sweathshirt for Men",
      "price":665.35,
      "sku":"4324",
      "ordersCount":324,
      "availableStock":234,
      "productID":"1",
      "variantID":"3",
      "productDescription":"For a modish and neat fashion appeal, you can explore Levi’s T-shirts available for men online. Whether it’s formal, semi-casual, or sports occasions, you can now flaunt yourself with modern clothing styles. It comes in different designs, colours, prints, sizes, and more to elevate your buying and styling experience. The T-shirts have various neckline options such as crew, Henley, Mandarin, V-neck, round, polo neck, and others. ",
      "features":["Care Instructions: Machine Wash","Fit Type: Regular Fit","Men's Blue Crew Neck T-Shirt"],
      "services":["Shipping charges are calculated based on the number of units, distance and delivery date.","10 days replacement","Non-refundable"],
      "productDetails":"",
      "createdOn":"2023/08/29"	
    }
  }
  }
}
export class ProductDetailDto{
  productTitle:string;
  brandName:string;
  attachment:string[];
  category:string;
  feedbackCount:number;
  rating:number;
  price:number;
  sku:string;
  ordersCount:number;
  availableStock:number;
  productID:string;
  variantID:string;
  productDescription:string;
  features:string[];
  services:string[];
  productDetails:string;
  createdOn:string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];