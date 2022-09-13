import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PydidComponent } from './components/pydid/pydid.component';
import { PlainComponent } from './components/plain/plain.component';

const routes: Routes = [
  { path: 'python', component: PydidComponent, title: 'Python' }, { path: 'plain', component: PlainComponent, title: 'Plain' }, { path: '', redirectTo: '/plain', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
