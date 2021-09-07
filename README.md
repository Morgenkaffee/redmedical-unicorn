# RedmedicalUnicorn

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## UI Tests

To run the UI-Tests you can either run them with `npm run testcafe`, make sure the application IS running
You can also run the UI-Tests without having the application started, this can be done with `npm run testcafe:standalone`, make sure the application is not running because it blocks the port.
This is very cool for a pipeline ;)
You can find the test results in the report folder!

## Further improvements
Better Error Handling, currently when the user gets no result back from the external resources no data is displayed, also there is a dependency to stackoverflow when displaying the local weather data
The Entry components could have been also refactored, but I wanted to display that the content of the dashboard doesn't matter and the dashboard can be reused everywhere, where the same logic is used.
The app has no accessibility, this should be improved if it is really used
A translation file and service/pipe could be introduced to centralize the text. 
