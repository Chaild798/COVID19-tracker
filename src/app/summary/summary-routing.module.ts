import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryPageComponent } from './components/summary-page/summary-page.component';

const routes: Routes = [
  {path: '', component: SummaryPageComponent} //cuando pase /summary, carga el componente indicado
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryRoutingModule { }
