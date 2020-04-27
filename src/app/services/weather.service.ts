import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private id = '194333f5b09188fbda8c4a3bbfea30b2';

  constructor(private http: Http) { }

  getWeather(city: string){
    return this.http.get(this.url+city+'&appid='+this.id);
  }
}
