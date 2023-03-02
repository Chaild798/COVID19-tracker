import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = 'https://api.covid19api.com/';

  getSummaryData() {
    return this.http.get<any>(`${this.apiUrl}summary`);
  }

  getCountryDataByDate(country: string, date: string) {
    return this.http.get<any>(`${this.apiUrl}country/${country}/status/confirmed?from=${date}`);
  }

}
