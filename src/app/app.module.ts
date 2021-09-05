import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './visualization/dashboard/dashboard.component';
import {MatCardModule} from "@angular/material/card";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { GithubEntryComponent } from './visualization/github-entry/github-entry.component';
import { WeatherEntryComponent } from './visualization/weather-entry/weather-entry.component';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faStackOverflow} from "@fortawesome/free-brands-svg-icons";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GithubEntryComponent,
    WeatherEntryComponent
  ],
    imports: [
        BrowserModule,
        MatCardModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FontAwesomeModule,
    ],
  providers: [{provide: Window, useValue: window}], // that way we can inject the window object in our components and mock it in tests
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faStackOverflow);
  }
}
