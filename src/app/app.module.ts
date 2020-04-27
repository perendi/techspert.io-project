import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './services/weather.service';
import { WeatherTableComponent } from './weather-table/weather-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [AppComponent, WeatherComponent, WeatherTableComponent],
  imports: [BrowserModule, AppRoutingModule, HttpModule, MatPaginatorModule, MatTableModule, MatSortModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
