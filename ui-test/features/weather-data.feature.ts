import {RequestMock, Selector} from "testcafe";

export class WeatherDataFeature {
  weatherDataEntrySelector: string = '[cafe=weatherdata-entry]';
  weatherDataEntries: Selector = Selector(this.weatherDataEntrySelector);
  constructor() {
  }

  getWeatherDataEntryDate(weatherDataEntry: Selector): Promise<string> {
    return weatherDataEntry.find('[cafe=weather-data-date]').innerText;
  }

  getWeatherDataEntryTemperature(weatherDataEntry: Selector): Promise<string> {
    return weatherDataEntry.find('[cafe=weather-data-temperature]').innerText;
  }

  getWeatherDataEntryWindForce(weatherDataEntry: Selector): Promise<string> {
    return weatherDataEntry.find('[cafe=weather-data-wind-force]').innerText;
  }

  getWeatherDataEntryWindDirection(weatherDataEntry: Selector): Promise<string> {
    return weatherDataEntry.find('[cafe=weather-data-wind-direction]').innerText;
  }

  createMockResponses(): RequestMock {
    return RequestMock().onRequestTo(new RegExp('localhost:4200/assets/data/weatherdata.json')).respond(mockWeatherDataJson);
  }
}

const mockWeatherDataJson = [{
  "Datum": "18.08.2016",
  "Zeit": "00:00",
  "Temp. A.": 35.6,
  "Temp. 3": -38.8,
  "Feuchte A.": 94,
  "Luftdruck": 977,
  "Regen": 0,
  "Wind": 5,
  "Richtung": 333,
  "Helligkeit": 0
},
{
  "Datum": "24.05.2016",
  "Zeit": "00:15",
  "Temp. A.": 15.6,
  "Temp. 3": -38.8,
  "Feuchte A.": 94,
  "Luftdruck": 977,
  "Regen": 0,
  "Wind": 5.2,
  "Richtung": 270,
  "Helligkeit": 0
},
{
  "Datum": "10.02.2016",
  "Zeit": "00:30",
  "Temp. A.": 5.6,
  "Temp. 3": -38.8,
  "Feuchte A.": 94,
  "Luftdruck": 977,
  "Regen": 0,
  "Wind": 4.1,
  "Richtung": 180,
  "Helligkeit": 0
},
{
  "Datum": "07.02.2016",
  "Zeit": "00:45",
  "Temp. A.": -12.6,
  "Temp. 3": -38.8,
  "Feuchte A.": 95,
  "Luftdruck": 977,
  "Regen": 0,
  "Wind": 50,
  "Richtung": 90,
  "Helligkeit": 0
},
{
  "Datum": "12.12.2016",
  "Zeit": "01:00",
  "Temp. A.": 1.6,
  "Temp. 3": -38.8,
  "Feuchte A.": 95,
  "Luftdruck": 977,
  "Regen": 0,
  "Wind": 30,
  "Richtung": 150,
  "Helligkeit": 0
}];

export default new WeatherDataFeature();
