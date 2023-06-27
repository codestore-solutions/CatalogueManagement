import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

      menuItems = [
        {label :"Dashboard", icon: "", path: 'dashboard'},
        { label: "Orders", icon: "", path: 'ordres'},
        { label: 'Bookings', icon: "", path: 'bookings'},
        {label: 'Products', icon: 'inventory', children: [
          { label: 'Add Products', icon: '', path: 'products'},
          { label: 'Products', icon: '', path: 'productDetails'},
          { label: 'Brands', icon: '', path: 'brandList'},
          { label: 'Category', icon:'', path:'categoryList'}
        ]}
      ]
}
