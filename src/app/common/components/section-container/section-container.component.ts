import { Component, Input, OnInit } from '@angular/core';
import { COLORS } from '../../constants/colors';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent {
  @Input() color: keyof typeof COLORS = 'white';

  get colorClass(): string {
    return COLORS[this.color];
  }
}
