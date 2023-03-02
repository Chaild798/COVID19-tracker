import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';


/*  Módulo para los componentes compartids a los largo de toda la app, aquellos que estarán peresentes
en todas las vistas posibles, debo importarlo en app.module.ts para que lo conozca */
@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent,
    SearchComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    SidebarComponent,
    TopbarComponent,
    SearchComponent //lo quiero usar en mi conutry component
  ]
})
export class SharedModule { }
