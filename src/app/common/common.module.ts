import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@NgModule({
  declarations: [
    TitleComponent
  ],
  imports: [
    CommonModule,
    TranslocoRootModule
  ],
  exports: [
    TitleComponent
  ]
})
export class CommonsModule { }
