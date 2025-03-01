import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { SectionContainerComponent } from './components/section-container/section-container.component';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@NgModule({
  declarations: [
    TitleComponent,
    SectionContainerComponent
  ],
  imports: [
    CommonModule,
    TranslocoRootModule
  ],
  exports: [
    TitleComponent,
    SectionContainerComponent
  ]
})
export class CommonsModule { }
