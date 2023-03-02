import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivePageComponent } from './components/live-page/live-page.component';

const routes: Routes = [
  {path: '', component: LivePageComponent} //cuando pase /summary, carga el componente indicado
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveRoutingModule { }
