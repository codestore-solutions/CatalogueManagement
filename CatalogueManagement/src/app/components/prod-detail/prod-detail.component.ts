import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.scss']
})
export class ProdDetailComponent implements OnInit{
  date : Date;
  requester: any;
  productDetails;
  brandName;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private location: Location, private service : DataService) {
    this.date = new Date();
    this.requester = this.activatedRoute.snapshot.params['requester'];
  }
  ngOnInit(): void {
    this.service.getProductById(parseInt(this.requester)).subscribe((data)=>{
      this.productDetails = data;
      console.log(this.productDetails);
    })
  }

  editProduct() {
    this.router.navigate([`products/${this.requester}`]);
  }

  backNav() {
    this.location.back();
  }
}
