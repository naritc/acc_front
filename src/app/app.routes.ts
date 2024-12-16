import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { BuyListComponent } from './feature/buy/buy-list/buy-list.component';
import { SellListComponent } from './feature/sell/sell-list/sell-list.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { PartnerListComponent } from './feature/partner/partner-list/partner-list.component';
import { UnitListComponent } from './feature/product/unit-list/unit-list.component';
import { AuthGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   title: 'Login'
  // },
  // {
  //   path: 'authorized',
  //   component: AuthorizedComponent,
  //   title: 'Authorized'
  // },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
    canActivate: [AuthGuard]
  },
  {
    path: 'buy',
    component: BuyListComponent,
    title: 'Buy',
    canActivate: [AuthGuard]
  },
  {
    path: 'sell',
    component: SellListComponent,
    title: 'Sell',
    canActivate: [AuthGuard]
  },
  {
    path: 'partner',
    component: PartnerListComponent,
    title: 'Partner',
    canActivate: [AuthGuard]
  },
  {
    path: 'product',
    component: ProductListComponent,
    title: 'Product',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'unit',
        component: UnitListComponent,
        title: 'Unit',
        canActivate: [AuthGuard]
      }
    ]
  }
];
