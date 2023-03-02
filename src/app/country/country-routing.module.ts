import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryPageComponent } from './components/country-page/country-page.component';

const routes: Routes = [
  {path: '', component: CountryPageComponent} //cuando pase /country, carga el componente indicado
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
