import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { SelModel } from '../../../model/dto/ui/SelModel';

@Component({
  selector: 'app-ui-select',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatHint,
    MatLabel,
    MatSelect,
    MatOption,
  ],
  templateUrl: './ui-select.component.html',
  styleUrl: './ui-select.component.scss',
})
export class UiSelectComponent implements OnInit {
  @Input() lbl!: string;
  @Input() selectList!: SelModel[];

  defaultSelect: string[] = [];
  selectEle = new FormControl<string[]>([]);

  ngOnInit(): void {
    for (const select of this.selectList) {
      if (select.select) {
        this.defaultSelect.push(select.value);
      }
    }
    this.selectEle = new FormControl(this.defaultSelect);
  }
}
