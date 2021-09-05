import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherEntryComponent } from './weather-entry.component';

describe('WeatherEntryComponent', () => {
  let component: WeatherEntryComponent;
  let fixture: ComponentFixture<WeatherEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
