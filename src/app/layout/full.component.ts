import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { buyItems, homeItems, partnerItems, productItems, sellItems } from './sidebar/sidebar-data';
import { NavService } from '../service/nav.service';
import { AppNavItemComponent } from './sidebar/nav-item/nav-item.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";

const MOBILE_VIEW = 'screen and (max-width: 768px)';
const TABLET_VIEW = 'screen and (min-width: 769px) and (max-width: 1024px)';
const MONITOR_VIEW = 'screen and (min-width: 1024px)';


@Component({
    selector: 'app-full',
    imports: [
        RouterModule,
        AppNavItemComponent,
        MaterialModule,
        CommonModule,
        SidebarComponent,
        NgScrollbarModule,
        HeaderComponent,
        BreadcrumbComponent
    ],
    templateUrl: './full.component.html',
    styleUrls: [],
    encapsulation: ViewEncapsulation.None
})

export class FullComponent  {

  navItems = homeItems;

  @ViewChild('leftsidenav')
  public sidenav!: MatSidenav;

  //get options from service
  private layoutChangesSubscription = Subscription.EMPTY;
  private isMobileScreen = false;
  private isContentWidthFixed = true;
  private isCollapsedWidthFixed = false;
  private htmlElement!: HTMLHtmlElement;

  get isOver(): boolean {
    return this.isMobileScreen;
  }

  constructor(private breakpointObserver: BreakpointObserver, private navService: NavService) {

    this.htmlElement = document.querySelector('html')!;
    this.htmlElement.classList.add('light-theme');
    this.layoutChangesSubscription = this.breakpointObserver
      .observe([MOBILE_VIEW, TABLET_VIEW, MONITOR_VIEW])
      .subscribe((state) => {
        // SidenavOpened must be reset true when layout changes

        this.isMobileScreen = state.breakpoints[MOBILE_VIEW];

        this.isContentWidthFixed = state.breakpoints[MONITOR_VIEW];
      });

    // Check the first segment of the path name
    const pathSegments = window.location.pathname.split('/');
    const firstSegment = pathSegments.length > 1 ? pathSegments[1] : '';
    console.log('First segment of the path:', firstSegment);
    this.changeMenu(firstSegment);
  }

  changeMenu(menu: string) {
    if (menu === 'buy') {
      this.navItems = buyItems;
    } else if (menu === 'sell') {
      this.navItems = sellItems;
    } else if (menu === 'partner') {
      this.navItems = partnerItems;
    } else if (menu === 'product') {
      this.navItems = productItems;
    } else {
      this.navItems = homeItems;
    }
  }

  ngOnDestroy() {
    this.layoutChangesSubscription.unsubscribe();
  }

  toggleCollapsed() {
    this.isContentWidthFixed = false;
  }

  onSidenavClosedStart() {
    this.isContentWidthFixed = false;
  }

  onSidenavOpenedChange(isOpened: boolean) {
    this.isCollapsedWidthFixed = !this.isOver;
  }
}
