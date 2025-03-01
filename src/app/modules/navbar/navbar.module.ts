import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/modules/navbar/components/navbar/navbar.component';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    TranslocoRootModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
  ]
})
export class NavbarModule { }
