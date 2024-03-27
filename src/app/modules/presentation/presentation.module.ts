import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './components/presentation/presentation.component';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@NgModule({
  declarations: [
    PresentationComponent
  ],
  imports: [
    CommonModule,
    TranslocoRootModule
  ],
  exports: [
    PresentationComponent
  ]
})
export class PresentationModule { }
