import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public switchValue: boolean = false;
  public languaje: string = 'es';

  constructor(private translocoService: TranslocoService) {}

  switchToEnglish(): void {
    this.translocoService.setActiveLang('en');
  }

  switchToSpanish(): void {
    this.translocoService.setActiveLang('es');
  }

  switchLanguage(): void {
    this.switchValue = !this.switchValue;
    this.switchValue ? this.switchToEnglish() : this.switchToSpanish();
  }

  setLanguaje(language: string): void {
    this.translocoService.setActiveLang(language);
    this.languaje = this.translocoService.getActiveLang();
  }

}
