import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/modules/navbar/components/navbar/navbar.component';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    TranslocoRootModule
  ],
  exports: [
    NavbarComponent,
  ]
})
export class NavbarModule { }
