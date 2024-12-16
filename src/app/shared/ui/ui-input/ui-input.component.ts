import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MODE } from '../../constant/Mode';

@Component({
  selector: 'app-ui-input',
  standalone: true,
  imports: [
    CommonModule,
    MatFormField,
    MatLabel,
    MatHint,
    MatIcon,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './ui-input.component.html',
  styleUrl: './ui-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiInputComponent),
      multi: true,
    }
  ]
})
export class UiInputComponent implements ControlValueAccessor {
  @Input() lbl!: string;
  @Input() maxLength = 200;
  @Input() mode: MODE = MODE.VIEW;

  inputElem = new FormControl('');

  clear() {
    this.inputElem.reset();
  }

  writeValue(obj: any): void {
    //throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    //throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    //throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    //throw new Error('Method not implemented.');
  }
}
