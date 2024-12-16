import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-ui-chip-select',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './ui-chip-select.component.html',
  styleUrl: './ui-chip-select.component.scss',
})
export class UiChipSelectComponent {}
