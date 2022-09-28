import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PydidComponent } from './components/pydid/pydid.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'python', component: PydidComponent, title: 'Python' }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, title: '404 '}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
