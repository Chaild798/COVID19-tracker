import { Component, OnChanges, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit, OnChanges {

  summaryData: any;
  countryToSearch:string = "";

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getSummaryData().subscribe(
      (data:any) => {this.summaryData = data} //me tengo que subcribir porque lo que se retorna es un OBservable
    )
  }

  ngOnChanges() {

  }

  searchCountry(searchTerm:string) {
    this.countryToSearch = searchTerm;
  }
}
