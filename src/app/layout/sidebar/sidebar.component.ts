import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { BrandingComponent } from './branding.component';
import { MaterialModule } from '../../shared/material.module';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    imports: [BrandingComponent, MaterialModule, RouterModule],
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  @Input() showToggle = true;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

}
