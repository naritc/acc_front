import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavItem } from '../layout/sidebar/nav-item/nav-item';
import { CookieService } from './cookie.service';
import { COOKIE_NAME } from '../shared/constant/CookieConst';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbSource = new BehaviorSubject<NavItem[]>([]);
  private currentLevel = 0;
  breadcrumbs$ = this.breadcrumbSource.asObservable();

  constructor(private cookie: CookieService) {
    const breadcrumb = this.cookie.getCookie(COOKIE_NAME.BREADCRUMB);
    if (breadcrumb) {
      this.breadcrumbSource.next(JSON.parse(breadcrumb));
    }
   }

  appendBreadcrumbs(nav: NavItem) {
    if (nav.level !== undefined && nav.level > this.currentLevel) {
      this.breadcrumbSource.next([...this.breadcrumbSource.getValue(), nav]);
    } else {
      this.breadcrumbSource.next([nav]);
    }
    this.currentLevel = nav.level ?? this.currentLevel;
    this.setCookie();
  }

  selectBreadcrumb(nav: NavItem) {
    this.breadcrumbSource.next(this.breadcrumbSource.getValue().filter(b => (b.level ?? 0) <= (nav.level ?? 0)));
    this.currentLevel = nav.level ?? 0;
    this.setCookie();
  }

  setCookie() {
    this.cookie.setCookie(COOKIE_NAME.BREADCRUMB, JSON.stringify(this.breadcrumbSource.getValue()), 1);
  }
}
