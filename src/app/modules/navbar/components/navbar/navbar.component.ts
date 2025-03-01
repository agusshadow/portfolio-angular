import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public switchValue: boolean = false;
  public languaje: string = 'es';

  constructor(
    private translocoService: TranslocoService,
    private router: Router
  ) {}

  navigateToFragment(fragment: string) {
    // Navega a la misma ruta pero con el fragmento
    this.router.navigate([], { fragment: fragment });

    // Espera a que Angular termine de navegar
    setTimeout(() => {
      // Encuentra el elemento del fragmento
      const element = document.getElementById(fragment);
      if (element) {
        // Desplaza a la sección
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

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
