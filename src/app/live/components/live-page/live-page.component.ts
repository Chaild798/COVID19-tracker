import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highmaps';
import * as worldMap from '@highcharts/map-collection/custom/world.geo.json';
import { DataService } from 'src/app/shared/services/data.service';
//debo ir a mi tsconfig.json para permitir importar archivos.json

@Component({
  selector: 'app-live-page',
  templateUrl: './live-page.component.html',
  styleUrls: ['./live-page.component.css']
})
export class LivePageComponent implements OnInit {

  liveData: any[] = []

  Highcharts?: typeof Highcharts= Highcharts;
  chartConstructor = 'mapChart';

  chartOptions: Highcharts.Options | any= {
    chart: {
      map: worldMap,
    },
    title: {
      text: 'COVID-19 World Data'
    },
    subtitle: {
      text: 'Confirmed Cases - Live'
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox'
      }
    },
    legend: {
      enabled: true
    },
    colorAxis: {
      min: 0
    },
    series: [{
      type: 'map',
      name: 'COVID-19 Data',
      states: {
        hover: {
          color: '#dc3545'
        }
      },
      dataLabels: {
        enabled:true,
        format: '{point.name}' //apunta a un country y selecciona su nombre
      },
      allAreas: false,
      data: this.liveData
    }]
  };

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getSummaryData().subscribe( (dataResponse:any) => {
      this.liveData = dataResponse.Countries.map( (c:any) => [c.CountryCode.toLowerCase(), c.TotalConfirmed]);
      this.chartOptions.series[0].data = this.liveData;
      this.Highcharts?.mapChart('container', this.chartOptions); //vuelve a dibujar el chart con el id 'container
      //con los this.chartOptions
    })
  }
}
