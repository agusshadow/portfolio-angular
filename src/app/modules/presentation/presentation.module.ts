import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './components/presentation/presentation.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@NgModule({
  declarations: [
    PresentationComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    TranslocoRootModule
  ],
  exports: [
    PresentationComponent,
    AboutMeComponent
  ]
})
export class PresentationModule { }
