import {TestBed} from '@angular/core/testing';

import {LocalDataService, WeatherData} from './local-data.service';
import {anyString, instance, mock, when} from "ts-mockito";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

describe('LocalDataService', () => {
  let service: LocalDataService;
  let mockHttpClient = mock(HttpClient);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: HttpClient, useValue: instance(mockHttpClient)}]
    });
    service = TestBed.inject(LocalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the weather data in the internal format', (done) => {
    when(mockHttpClient.get(anyString())).thenReturn(of(mockWeatherData));
    service.getLocalWeatherData().subscribe((result: WeatherData[]) => {
      expect(result.length).toBe(2);
      const resultOne = result[0].windDirection === 95 ? result[0] : result[1];
      const resultTwo = result[0].windDirection === 95 ? result[1] : result[0];
      expect(resultOne.date).toEqual(new Date('01.01.2016'));
      expect(resultOne.windForce).toBe(5.2);
      expect(resultOne.windDirection).toBe(95);
      expect(resultOne.temperature).toBe(13.37);
      expect(resultTwo.date).toEqual(new Date('12.01.2016'));
      expect(resultTwo.windForce).toBe(4.1);
      expect(resultTwo.temperature).toBe(1.6);
      expect(resultTwo.windDirection).toBe(150);
      done()
    })
  });
});


const mockWeatherData = [{
  "Datum": "01.01.2016",
  "Zeit": "13:37",
  "Temp. A.": 13.37,
  "Temp. 3": -100.9,
  "Feuchte A.": 94,
  "Luftdruck": 10000,
  "Regen": 0,
  "Wind": 5.2,
  "Richtung": 95,
  "Helligkeit": 0
},
  {
    "Datum": "01.12.2016",
    "Zeit": "16:20",
    "Temp. A.": 1.6,
    "Temp. 3": -38.8,
    "Feuchte A.": 94,
    "Luftdruck": 123,
    "Regen": 5200,
    "Wind": 4.1,
    "Richtung": 150,
    "Helligkeit": 0
  }]
