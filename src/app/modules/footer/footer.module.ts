import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    TranslocoRootModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
