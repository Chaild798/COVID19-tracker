import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-cards',
  templateUrl: './summary-cards.component.html',
  styleUrls: ['./summary-cards.component.css']
})
export class SummaryCardsComponent implements OnInit, OnChanges{
  
  @Input() covidData: any;
  summaryData: any;

  constructor() {

  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.summaryData=this.covidData; //tarda un poco en llegar la data al hacer la solicitud a la API, lo que hace
    //covidData sea undefined en un principio. Cuando le llegue la data, se la asigno a summaryData
  }
}
