import { Component } from '@angular/core';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.scss']
})
export class ProdDetailComponent {
  date : Date;
  constructor() {
    this.date = new Date();
  }
}
