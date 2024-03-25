import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-switch-language',
  templateUrl: './switch-language.component.html',
  styleUrls: ['./switch-language.component.scss']
})
export class SwitchLanguageComponent {

  public switchValue: boolean = false;

  constructor(private translocoService: TranslocoService) {}

  switchToEnglish() {
    this.translocoService.setActiveLang('en');
  }

  switchToSpanish() {
    this.translocoService.setActiveLang('es');
  }

  switchLanguage() {
    this.switchValue = !this.switchValue;
    this.switchValue ? this.switchToEnglish() : this.switchToSpanish();
  }

}
