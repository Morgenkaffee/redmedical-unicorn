import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather-entry',
  templateUrl: './weather-entry.component.html',
  styleUrls: ['./weather-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherEntryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
