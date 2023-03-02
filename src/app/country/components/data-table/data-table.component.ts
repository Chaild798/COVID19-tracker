import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnChanges, OnDestroy{

  @Input() covidData:any;
  countries:any[] =[];
  subscription =new Subscription();

  constructor(private searchService: SearchService) {

  }

  ngOnInit() {
    //this.searchService.getCountries().subscribe( (data:any) => this.countries=data);

    /*
    tanto country-page como data-table tienen el searchServie inyectado
    al hacer click en la barra de search, se ejecuta la function searchCountry(countryName) del country-page
    la misma, inicializa una constante que devuelve un objeto con los datos de aquellos paises que
    contienen el temino indicado
    esa constante, se le pasa como argumento a un setter de un servicio, que la añade con un .next() a 
    un Subject(). ese Subject lo estoy llamando aquí, con el metodo get que me lo devuelve como Observable
    para subscribirme al mismo 
    Subject siempre acepta la data más nueva que se le pasa, y es la que mantiene, este método siempre
    estará apuntando a la data más nueva.
    no obstante, tengo que evitar que se sobrecargue la memoria, uso Subscription() de rxjs y un ngOnDestroy 
    para desubscribirme
    */

    this.subscription=this.searchService.getCountries().subscribe( (data:any) => this.countries=data);
  }
  

  ngOnChanges() {
    this.countries = this.covidData?.Countries;
  }
  
  ngOnDestroy() {
    //se activara al acceder a otra ruta
    this.subscription.unsubscribe();

  }
}
