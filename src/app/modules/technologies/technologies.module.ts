import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@NgModule({
  declarations: [
    TechnologiesComponent
  ],
  imports: [
    CommonModule,
    TranslocoRootModule
  ],
  exports: [
    TechnologiesComponent
  ]
})
export class TechnologiesModule { }
