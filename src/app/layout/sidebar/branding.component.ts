import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-branding',
    imports: [RouterModule],
    template: `
    <div class="branding d-flex flex-row">
      <a [routerLink]="['/']" class="d-flex align-items-center">
        <img
          src="./assets/images/logos/account-logo.png"
          alt="logo"
          width="50px"
          height="50px"
        />
      </a>
      <h1 class="mat-h1 d-flex align-items-center m-l-20" style="color: #fafafa">Account</h1>
    </div>
  `
})
export class BrandingComponent {
}
