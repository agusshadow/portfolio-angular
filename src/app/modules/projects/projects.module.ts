import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsContainerComponent } from './components/projects-container/projects-container.component';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
import { GithubService } from './services/github.service';

@NgModule({
  declarations: [ProjectsContainerComponent],
  imports: [
    CommonModule,
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
