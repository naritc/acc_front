import { Component, Input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MODE } from '../../constant/Mode';

@Component({
    selector: 'app-ui-checkbox',
    imports: [MatCheckboxModule],
    templateUrl: './ui-checkbox.component.html',
    styleUrl: './ui-checkbox.component.scss'
})
export class UiCheckboxComponent {
  @Input() lbl!: string;
  @Input() mode: MODE = MODE.VIEW;

}
