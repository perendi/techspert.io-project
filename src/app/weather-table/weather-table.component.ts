import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { WeatherTableDataSource, WeatherTableItem } from './weather-table-datasource';

@Component({
  selector: 'weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.css']
})
export class WeatherTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<WeatherTableItem>;
  dataSource: WeatherTableDataSource;

  /** Columns displayed in the table. */
  displayedColumns = ['name', 'temperature', 'description'];

  ngOnInit() {
    this.dataSource = new WeatherTableDataSource();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(value: string){
    let result =  this.dataSource.data
        .filter(match => match.name.toLowerCase().includes(value.trim().toLowerCase()));
    this.table.dataSource = result;
  }
}
