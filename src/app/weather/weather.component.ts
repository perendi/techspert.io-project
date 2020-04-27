import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';


export let weatherdata = [];

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{

  data: any[];
    
  constructor(private service: WeatherService) {}


  ngOnInit(){
    this.service.getWeather(20)
      .subscribe(response => {
        this.data = response.json().list;

        //Creating objects with the three needed parameters
        this.data.forEach(city => {
          weatherdata.push({
            name: city.name,
            temperature: city.main.temp,
            description: city.weather[0].description
          })
        })

      });
  }

}
