import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/modules/navbar/components/navbar/navbar.component';
import { SwitchLanguageComponent } from 'src/app/modules/navbar/components/switch-language/switch-language.component';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@NgModule({
  declarations: [
    NavbarComponent,
    SwitchLanguageComponent
  ],
  imports: [
    CommonModule,
    TranslocoRootModule
  ],
  exports: [
    NavbarComponent,
    SwitchLanguageComponent
  ]
})
export class NavbarModule { }
