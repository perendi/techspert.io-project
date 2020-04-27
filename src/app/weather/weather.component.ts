import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{

  data: any[];
  
  constructor(private service: WeatherService) {}

  ngOnInit(){
    this.service.getWeather('London')
      .subscribe(response => {
        this.data = response.json();
        console.log(this.data);
      });
  }

}
