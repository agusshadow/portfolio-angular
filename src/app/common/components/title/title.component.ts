import { Component, Input } from '@angular/core';
import { COLORS } from '../../constants/colors';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() color: keyof typeof COLORS = 'blue';

  get colorClass(): string {
    return COLORS[this.color];
  }
}
