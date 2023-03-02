import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {

  searchTerm: string = ""; 
  @Output() countryToSearch = new EventEmitter<string>();
  //quiero que el mismo se envie fuera de searchComponent para utilizarlo en el padre a forma de evento

  constructor() {

  }

  ngOnInit() {

  }

  ngOnChanges() {

  }

  search() {
    this.countryToSearch.emit(this.searchTerm);
  }
}
