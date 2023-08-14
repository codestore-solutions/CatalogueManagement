import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared_modules/shared/shared.module';
import { PagesComponent } from './pages.component';
import { DataService } from '../services/data.service';
import { RatingDecimalComponent } from './rating-decimal/rating-decimal.component';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ],
  providers:[DataService],
  bootstrap: [PagesComponent]
})
export class PagesModule { }
