import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'summary', pathMatch: 'full'
  },
  {
    path: 'summary', loadChildren: () => import('./summary/summary.module').then(module => module.SummaryModule)
  },
  {
    path: 'country', loadChildren: () => import('./country/country.module').then(module => module.CountryModule)
  },
  {
    path: 'live', loadChildren: () => import('./live/live.module').then(module => module.LiveModule)
  }
  //notar que en cada Module, está importado su RoutingMOdule
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
