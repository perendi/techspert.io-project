import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { WeatherService } from '../services/weather.service';
import { NR_OF_CITIES, KELVIN } from '../weather-table/weather-table.component';

@Component({
  selector: 'weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrls: ['./weather-chart.component.css']
})
export class WeatherChartComponent implements OnInit {
  data: any[];
  chart: [];
  temps = [];
  cities = [];
  avgtemp = [];

  @ViewChild('weatherCanvas') canvas: ElementRef;

  constructor(private service: WeatherService) {}

  ngOnInit(){
    let total = 0;

    this.service.getWeather(NR_OF_CITIES)
      .subscribe(response => {
        this.data = response.json().list;

        //Populating the temps array with the temperature values
        for(let city of this.data){
          this.temps.push((city.main.temp-KELVIN).toFixed(2)); //converting to Celsius with 2 decimal places
          this.cities.push(city.name);
          total += (city.main.temp-KELVIN); //converting to Celsius
        }

        //Populating the avgtemp array with the average values
        this.avgtemp.length = NR_OF_CITIES;
        this.avgtemp.fill((total/NR_OF_CITIES).toFixed(2));

        //Chart
        var context = (this.canvas.nativeElement).getContext("2d");
        this.chart = new Chart(context, {
          type: 'line',
          data: {
            labels: this.cities,
            datasets: [
              {
                data: this.temps,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: this.avgtemp,
                borderColor: '#ffcc00',
                fill: false,
                label: 'Average'
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                id: 'A',
                position: 'left',
                display: true
              }],
            },
          }
        });
        
    });

  }
}