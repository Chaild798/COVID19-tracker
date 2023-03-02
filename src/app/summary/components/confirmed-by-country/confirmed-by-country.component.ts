import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-confirmed-by-country',
  templateUrl: './confirmed-by-country.component.html',
  styleUrls: ['./confirmed-by-country.component.css']
})
export class ConfirmedByCountryComponent implements OnInit, OnChanges {

  @Output() country = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    
  }

  passCountryData(searchTerm: string) {
    this.country.emit(searchTerm);
  }
}
