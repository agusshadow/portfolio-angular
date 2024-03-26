import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';

const routes: Routes = [
  { path: '', component: AboutMeComponent },
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
