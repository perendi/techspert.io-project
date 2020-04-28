import { MockService } from './services/mockservice';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { WeatherTableComponent } from './weather-table/weather-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WeatherChartComponent } from './weather-chart/weather-chart.component'

@NgModule({
  declarations: [AppComponent, WeatherTableComponent, WeatherChartComponent],
  imports: [BrowserModule, AppRoutingModule, HttpModule, MatPaginatorModule, MatTableModule, MatSortModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule],
  providers: [WeatherService, MockService],
  bootstrap: [AppComponent],
})
export class AppModule {}
