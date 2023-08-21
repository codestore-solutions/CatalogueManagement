import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared_modules/shared/shared.module';
import { PagesComponent } from './pages.component';
import { DataService } from '../services/data.service';
import { HeaderComponent } from './common/header/header.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    SideNavComponent,
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
