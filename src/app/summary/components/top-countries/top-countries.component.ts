import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-countries',
  templateUrl: './top-countries.component.html',
  styleUrls: ['./top-countries.component.css']
})
export class TopCountriesComponent implements OnInit, OnChanges {

  @Input() covidData:any;
  public topConfirmed:any[] =[];
  public topDeaths:any[] =[];
  public topRecovered:any[] =[];


  constructor() {

  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.topConfirmed = this.covidData?.Countries?.sort( (a:any, b:any) => b.TotalConfirmed-a.TotalConfirmed).slice(0, 5);
    console.log(this.topConfirmed);
    this.topDeaths = this.covidData?.Countries?.sort( (a:any, b:any) => b.TotalDeaths-a.TotalDeaths).slice(0, 5);
    console.log(this.topDeaths);
    this.topRecovered = this.covidData?.Countries?.sort( (a:any, b:any) => b.TotalRecovered-a.TotalRecovered).slice(0, 5);
    console.log(this.topRecovered);
  }

}
