import { Component, Input } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType, LabelItem } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts/public_api';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.css']
})
export class CountryChartComponent {

  @Input() country:string="Argentina";

  barChartData: ChartDataset[] = [
    {
      data: [50, 10, 30],
      label: 'Confirmed Cases'
    }
  ];
  barChartLabels: BaseChartDirective['labels']= ['USA', 'UK', 'BRAZIL'];
  barChartOptions: ChartOptions = {responsive: true};
  barChartType: ChartType = 'bar';
  barChartLegend=true;
  barChartPlugins = [];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.getCountryData();
    console.log(this.country);
  }

  getCountryData() {
    this.dataService.getCountryDataByDate(this.country, '2020-03-01-T00:00:00Z&to=2023-01-01T00:00:00Z')
    .subscribe(
      (dataResponse:any) => {this.barChartData[0].data = dataResponse.map( (day:any) => day.Cases);
                            this.barChartLabels = dataResponse.map( (day:any) => day.Date.substring(0, 10));
                            }
    )
  }
}
