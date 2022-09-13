import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PydidComponent } from './components/pydid/pydid.component';

const routes: Routes = [
  { path: 'python', component: PydidComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
