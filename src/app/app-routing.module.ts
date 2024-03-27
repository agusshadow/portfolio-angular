import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './modules/presentation/components/presentation/presentation.component';

const routes: Routes = [
  { path: '', component: PresentationComponent },
  { path: 'about-me', component: PresentationComponent },
  //  { path: 'projects', component: ProjectsComponent },
  //  { path: 'contact', component: ContactComponent },
  //  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
