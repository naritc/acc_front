import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-ui-datepicker-range',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ui-datepicker-range.component.html',
  styleUrl: './ui-datepicker-range.component.scss',
})
export class UiDatepickerRangeComponent {
  @Input() lbl!: string;
}
