import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsModule } from 'src/app/common/common.module';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
import { ContactComponent } from './components/form/contact/contact.component';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    CommonsModule,
    TranslocoRootModule,
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
