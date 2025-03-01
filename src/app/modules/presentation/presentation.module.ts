import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './components/presentation/presentation.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { DownloadCvComponent } from './components/download-cv/download-cv.component';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
import { NgxBootstrapIconsModule, ColorTheme } from 'ngx-bootstrap-icons';
import { linkedin, github } from 'ngx-bootstrap-icons';

const icons = {
  linkedin,
  github
};

@NgModule({
  declarations: [
    PresentationComponent,
    AboutMeComponent,
    DownloadCvComponent
  ],
  imports: [
    CommonModule,
    TranslocoRootModule,
    NgxBootstrapIconsModule.pick(icons, {
      width: '2em',
      height: '2em',
      theme: ColorTheme.Danger,
  })
  ],
  exports: [
    PresentationComponent,
    AboutMeComponent,
    DownloadCvComponent
  ]
})
export class PresentationModule { }
