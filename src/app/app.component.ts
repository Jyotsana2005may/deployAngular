import { Component,OnInit } from '@angular/core';
import {ApiServiceService} from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//
//

export class AppComponent implements OnInit {
  filter = {
    years: [
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020"
    ],
    launch: ["true", "false"],
    landing: ["true", "false"]
  };
  filteredData = [];
  filterObj = {};
  constructor(private apiService: ApiServiceService) {}
  ngOnInit() {
    this.getApiData("");
  }
  applyFilter(type: string, value: string) {
    if (this.filterObj[type] !== value) {
      this.filterObj[type] = value;
      let filterString = "&";
      Object.keys(this.filterObj).forEach(val => {
        if (this.filterObj[val]) {
          filterString += `${val}=${this.filterObj[val]}&`;
        }
      });
      console.log(filterString);
      filterString = filterString.substring(0, filterString.lastIndexOf("&"));
      console.log(filterString);
      this.getApiData(filterString);
    }
  }
  getApiData(fiterString: string) {
    this.apiService.getData(fiterString).subscribe((data: []) => {
      console.log(data);
      this.filteredData = data;
    });
  }
}

