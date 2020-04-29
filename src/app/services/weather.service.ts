import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private id = '194333f5b09188fbda8c4a3bbfea30b2';
  private url = 'http://api.openweathermap.org/data/2.5/find?lat=52.2053&lon=0.1218&cnt='

  constructor(private http: Http) { }

  /**
   * getWeather performs the http request for the specified amount
   *  of cities in the Cambridge area.
   * @param nrOfCities Number of cities we want to fetch information about
   */
  getWeather(nrOfCities: number){
    return this.http.get(this.url+nrOfCities+'&appid='+this.id);
  }
}
