import { Component, OnChanges, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit, OnChanges {

  covidData:any;

  constructor(private dataService: DataService, private searchService: SearchService) {

  }

  ngOnInit() {
    this.dataService.getSummaryData().subscribe( (data:any) => this.covidData = data);
  }

  ngOnChanges() {
    
  }

  searchCountry(countryName: string) {
    const countries = this.covidData.Countries.filter( (c:any) => c.Country.toLowerCase().includes(countryName.toLowerCase()));
    //covidData.Countries me permite acceder a la lista de todos los paises con su correspondientes datos
    //en esa lista, hago un .filter para seleccionar aquellos cuyo nombre, c.Country, concuerde con el valor
    //indicado por el usuario: countryName, devolviendo un nuevo array  partir de ello.
    //los .toLowerCase() son para tomar por igual UsA que usA, USA, usa...
    console.log(countries);
    //no puedo hacer un this.covidData = countries porque, ya le estoy pasando la seccion .Countries filtrada
    //del JSON que me devuelve la API, y en el .ts de data-table, lo que se hace es acceder a covidData.Countries
    //cosa que ya no seria posible. Debo hacer un servicio para el search
    this.searchService.setCountries(countries);
  }
}
