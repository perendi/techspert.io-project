import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  constructor(http : Http) {
    http.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=194333f5b09188fbda8c4a3bbfea30b2')
      .subscribe(response => {
        console.log(response);
      });
   }

}
