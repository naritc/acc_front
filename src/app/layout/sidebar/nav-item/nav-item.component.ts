import {
  Component,
  HostBinding,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { NavItem } from './nav-item';
import { Router } from '@angular/router';
import { NavService } from '../../../service/nav.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MaterialModule } from '../../../shared/material.module';
import { CommonModule } from '@angular/common';
import { BreadcrumbService } from '../../../service/breadcrumb.service';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './nav-item.component.html',
  styleUrls: [],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ]),
  ],
})
export class AppNavItemComponent implements OnChanges {
  @Output() toggleMobileLink: unknown = new EventEmitter<void>();
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  expanded: unknown = false;
  disabled: unknown = false;
  twoLines: unknown = false;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input()
  item!: NavItem;
  @Input() depth = 0;

  constructor(
    public navService: NavService,
    public router: Router,
    private breadcrumbService: BreadcrumbService) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnChanges() {
    this.navService.currentUrl.subscribe(url => {
      if (this.item.route && url) {
        // console.log(`Checking '/${this.item.route}' against '${url}'`);
        this.expanded = typeof url === 'string' && url.indexOf(`/${this.item.route}`) === 0;
        this.ariaExpanded = this.expanded;
        //console.log(`${this.item.route} is expanded: ${this.expanded}`);
      }
    });
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.breadcrumbService.appendBreadcrumbs(item);
      this.router.navigate([item.route]);

    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
    //scroll
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    if (!this.expanded) {
      if (window.innerWidth < 1024) {
        this.notify.emit();
      }
    }
  }

  onSubItemSelected(item: NavItem) {
    console.log('sub item selected', item);
    if (!item.children || !item.children.length) {
      if (this.expanded && window.innerWidth < 1024) {
        this.notify.emit();
      }
    }
  }

  checkActiveRoute(item: NavItem) {
    if (item.routeContain) {
      return typeof item.route === 'string' && this.router.url.includes(item.route);
    } else {
      return this.router.url === item.route;
    }
  }
}
