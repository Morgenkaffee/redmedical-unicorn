import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  private static readonly LOCAL_WEATHER_DATA_URL = '/assets/data/weatherdata.json';

  constructor(private httpClient: HttpClient) {
  }

  getLocalWeatherData(amount?: number): Observable<WeatherData[]> {
    return this.httpClient.get<WetterDaten[]>(LocalDataService.LOCAL_WEATHER_DATA_URL).pipe(
      map((localWeatherDataResponse: WetterDaten[]) => {
        return localWeatherDataResponse.map((weatherData: WetterDaten) => {
          return {
            date: new Date(weatherData.Datum),
            temperature: weatherData["Temp. A."],
            windDirection: weatherData.Richtung,
            windForce: weatherData.Wind
          };
        });
      }),
      map((weatherData: WeatherData[]) => {
        return this.getAmountOfRandomEntries(weatherData, amount);
      }));
  }

  private getAmountOfRandomEntries(entries: Array<WeatherData>, amount: number = 5): WeatherData[] {
    if (amount <= 0 || entries.length === 0) {
      return [];
    }
    const randomIndex = Math.floor(Math.random() * (entries.length - 1));
    const randomEntry = entries[randomIndex];
    return [randomEntry, ...this.getAmountOfRandomEntries(entries.filter((value, index) => index !== randomIndex), amount - 1)];
  }
}

export interface WeatherData {
  temperature: number;
  windDirection: number;
  windForce: number
  date: Date;
}

interface WetterDaten {
  Datum: string;
  Zeit: string;
  ["Temp. A."]: number;
  ["Temp. 3"]: number;
  ["Feuchte A."]: number;
  Luftdruck: number;
  Regen: number;
  Wind: number;
  Richtung: number;
  Helligkeit: number;
}

/*
  {
    "Datum": "",
    "Zeit": "",
    "Temp. A.": "°C",
    "Temp. 3": "°C",
    "Feuchte A.": "%",
    "Luftdruck": "hPa",
    "Regen": "mm",
    "Wind": "km/h",
    "Richtung": "°",
    "Helligkeit": "h"
  },
*/

