import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryModule } from './country/country.module';
import { LiveModule } from './live/live.module';
import { SharedModule } from './shared/shared.module';
import { SummaryModule } from './summary/summary.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule, /*importacion del SharedModule que contiene las Side y Nav Bars + el router-outlet
    voy a tener que, en ese mismo, exportar las declaraciones de mis componentes, sus <app-x></app-x>*/
    SummaryModule,
    CountryModule,
    LiveModule, /* Los importo aqui y no en SharedModule para que los cargue solo si los necesita, segun la ruta */
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
