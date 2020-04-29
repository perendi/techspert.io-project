import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { WeatherService } from '../services/weather.service';

let weatherData = [];
export const NR_OF_CITIES = 20; //Number of cities
export const KELVIN = 273.15; //Kelvin to Celsius conversion rate

@Component({
  selector: 'weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.css']
})
export class WeatherTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable, {static: true}) table: MatTable<Object>;
  dataSource: MatTableDataSource<Object>;
  data: any[];

  /** Columns displayed in the table. */
  displayedColumns = ['name', 'temperature', 'description'];

  constructor(private service: WeatherService) {}

  ngOnInit() {
    //Consuming WeatherService
    this.service.getWeather(NR_OF_CITIES)
      .subscribe(response => {
        console.log(response);
        this.data = response.json().list;
        
        //Feeding the data into the weatherData array
        this.data.forEach(city => {
          weatherData.push({
            name: city.name,
            temperature: (city.main.temp-KELVIN).toFixed(2), //Converting to Celsius with 2 decimal places
            description: city.weather[0].description
          })
        })

        //Feed data as the source of the table
        this.dataSource = new MatTableDataSource(weatherData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        //Specifying the column for the filter
        this.dataSource.filterPredicate = (data: any, filter: string) => {
          return data.name.toLowerCase().includes(filter) ;
         };
      });
  }

  applyFilter(value: string){
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
