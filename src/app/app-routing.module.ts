import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './modules/presentation/components/presentation/presentation.component';
import { AboutMeComponent } from './modules/presentation/components/about-me/about-me.component';

const routes: Routes = [
  { path: '', component: PresentationComponent },
  { path: 'about-me', component: AboutMeComponent },
  //  { path: 'projects', component: ProjectsComponent },
  //  { path: 'contact', component: ContactComponent },
  //  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
