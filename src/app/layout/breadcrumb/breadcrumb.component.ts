import { Component } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NavItem } from '../sidebar/nav-item/nav-item';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-breadcrumb',
    imports: [CommonModule, RouterModule, MatButtonModule],
    templateUrl: './breadcrumb.component.html',
    styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  breadcrumbs$;

  constructor(
    private route: Router,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
  }

  navigateTo(item: NavItem) {
    this.breadcrumbService.selectBreadcrumb(item);
    this.route.navigate([item.route]);
  }

}
