import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {

  private breakpointObserver = inject(BreakpointObserver);
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
      menuItems = [
        {label :"Dashboard", icon: "bi bi-speedometer2", path: 'dashboard'},
        { label: "Orders", icon: "bi bi-cart-plus-fill", path: 'ordres'},
        { label: 'Bookings', icon: "bi bi-calendar-event", path: 'bookings'},
        {label: 'Products', icon: 'bi bi-box-fill', children: [
          { label: 'Products', icon: 'bi bi-cart4', path: 'products'},
          { label: 'Add Products', icon: '', path: 'products/add'},
          { label: 'Category', icon:'', path:'products/category-list'},
          { label: 'Brands', icon: '', path: 'brand-list'},
        ]}
      ]

}
