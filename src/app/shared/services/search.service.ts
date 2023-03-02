import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  //Subject es suceptible a aceptar data que le es emitida y devolverla a modo de Observable,
  //lo que permite suscribirse a la misma

  countries = new Subject();

  setCountries(countries:any) {
    this.countries.next(countries);
    //.next() permite enviar data al Subject
  }

  getCountries():Observable<any> {
    return this.countries.asObservable();
    //.asObservable() es un metodo de Subject(), no hace mas que eso, retornar la data como un Observable
  }
}
