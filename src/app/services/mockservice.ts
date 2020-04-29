import { Injectable } from '@angular/core';
import { AbstractMockObservableService } from './abstractmockservice';

@Injectable({
  providedIn: 'root'
})
//Mock service for testing purposes
export class MockService extends AbstractMockObservableService{

  getWeather(nrOfCities: number){
    return this;
  }
}
