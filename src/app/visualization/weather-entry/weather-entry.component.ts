import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {WeatherData} from "../../services/local-data.service";
import {faTemperatureHigh, faTemperatureLow} from "@fortawesome/free-solid-svg-icons";
import {IconName} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-weather-entry',
  templateUrl: './weather-entry.component.html',
  styleUrls: ['./weather-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherEntryComponent {

  private static readonly MINIMUM_HOT_TEMPERATURE = 20;

  @Input()
  entryData!: WeatherData;

  constructor() {
  }

  getTemperatureIcon(): IconName {
    if (this.entryData.temperature >= WeatherEntryComponent.MINIMUM_HOT_TEMPERATURE) {
      return faTemperatureHigh.iconName;
    }
    return faTemperatureLow.iconName;
  }

}
