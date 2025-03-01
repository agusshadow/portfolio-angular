import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsContainerComponent } from './components/projects-container/projects-container.component';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
import { GithubService } from './services/github.service';
import { CommonsModule } from 'src/app/common/common.module';

@NgModule({
  declarations: [ProjectsContainerComponent],
  imports: [
    CommonModule,
    CommonsModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  exports: [
    ProjectsContainerComponent
  ],
  providers: [
    GithubService
  ]
})
export class ProjectsModule { }
