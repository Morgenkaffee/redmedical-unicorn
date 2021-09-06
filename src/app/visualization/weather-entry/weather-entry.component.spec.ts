import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherEntryComponent } from './weather-entry.component';
import {faTemperatureHigh, faTemperatureLow} from "@fortawesome/free-solid-svg-icons";

describe('WeatherEntryComponent', () => {
  let component: WeatherEntryComponent;
  let fixture: ComponentFixture<WeatherEntryComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherEntryComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });


  it('should be empty when the input was empty', () => {
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.entry')).toBe(null);
  });

  it('should correctly display the data', () => {
    component.entryData = {date: new Date('01.31.1991'), windForce: 100, windDirection: 123, temperature: 19.9}
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.entry')).not.toBe(null);
    expect(compiled.querySelector('.entry__date')?.textContent).toBe('31.01.1991');
    expect(compiled.querySelectorAll('.entry__data__text')[0]?.textContent).toBe('19.9°C');
    expect(compiled.querySelectorAll('.entry__data__text')[1]?.textContent).toBe('100km/H');
    expect(compiled.querySelectorAll('.entry__data__text')[2]?.textContent).toBe('123°');
  });

  it('should return the low temperature icon for Temperature below 20°C', () => {
    component.entryData = {date: new Date(), windForce: 100, windDirection: 123, temperature: 19.9}
    fixture.detectChanges();
    expect(component.getTemperatureIcon()).toBe(faTemperatureLow.iconName);
  });
  it('should return the high temperature icon for Temperature below 20°C', () => {
    component.entryData = {date: new Date(), windForce: 100, windDirection: 123, temperature: 20}
    fixture.detectChanges();
    expect(component.getTemperatureIcon()).toBe(faTemperatureHigh.iconName);
  });

});
