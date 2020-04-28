import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const MOCKRESPONSE = {list: [
    {name: "test", main: {temperature: 3}, weather: [{description: "test"}]},
    {name: "test", main: {temperature: 3}, weather: [{description: "test"}]},
    {name: "test", main: {temperature: 3}, weather: [{description: "test"}]},
    {name: "test", main: {temperature: 3}, weather: [{description: "test"}]},
    {name: "test", main: {temperature: 3}, weather: [{description: "test"}]},
    {name: "test", main: {temperature: 3}, weather: [{description: "test"}]},
    {name: "test", main: {temperature: 3}, weather: [{description: "test"}]},
    {name: "test", main: {temperature: 3}, weather: [{description: "test"}]},
    {name: "test", main: {temperature: 3}, weather: [{description: "test"}]},
    {name: "test", main: {temperature: 3}, weather: [{description: "test"}]},
    {name: "test", main: {temperature: 3}, weather: [{description: "test"}]},
    {name: "test", main: {temperature: 3}, weather: [{description: "test"}]},
    {name: "test", main: {temperature: 3}, weather: [{description: "test"}]},
    {name: "test", main: {temperature: 3}, weather: [{description: "test"}]},
    {name: "test", main: {temperature: 3}, weather: [{description: "test"}]},
    {name: "test", main: {temperature: 3}, weather: [{description: "test"}]},
    {name: "test", main: {temperature: 3}, weather: [{description: "test"}]},
    {name: "test", main: {temperature: 3}, weather: [{description: "test"}]},
    {name: "test", main: {temperature: 3}, weather: [{description: "test"}]},
    {name: "test", main: {temperature: 3}, weather: [{description: "test"}]}, 
  ]};

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  getWeather(nrOfCities: number): Observable<Response>{
    return Observable.create(MOCKRESPONSE);
  }
}
