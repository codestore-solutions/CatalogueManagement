import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-decimal',
  templateUrl: './rating-decimal.component.html',
  styleUrls: ['./rating-decimal.component.scss']
})
export class RatingDecimalComponent implements OnInit {

  @Input('rating') rating:number;
  currentRate:number=0;
  
  constructor() { }

  ngOnInit(): void {
    this.currentRate=this.rating
  }

  ariaValueText(current: number, max: number) {
    return `${current} out of ${max} hearts`;
  }
}
