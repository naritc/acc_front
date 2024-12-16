import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-ui-panel',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIcon],
  templateUrl: './ui-panel.component.html',
  styleUrl: './ui-panel.component.scss',
})
export class UiPanelComponent {
  @Input()
  title!: string;
  @Input()
  description!: string;
  @Input()
  icon!: string;

  readonly panelOpenState = signal(false);
}
