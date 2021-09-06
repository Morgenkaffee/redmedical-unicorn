import dashboardFeautre from '../features/dashboard.feature';
import stackoverflowEntryFeautre from '../features/stackoverflow-entry.feature';
import weatherDataEntryFeautre from '../features/weather-data.feature';

fixture('Dashboard Test').page('http://localhost:4200').requestHooks([...stackoverflowEntryFeautre.createMockResponses(), weatherDataEntryFeautre.createMockResponses()]);
test('that it should display three dashboards, with ten entries each', async (t: TestController) => {
  await t.expect(dashboardFeautre.dashboards.count).eql(3);
  await t.expect(dashboardFeautre.dashboards.nth(0).find(stackoverflowEntryFeautre.stackoverFlowEntrySelector).count).eql(10);
  await t.expect(dashboardFeautre.dashboards.nth(1).find(stackoverflowEntryFeautre.stackoverFlowEntrySelector).count).eql(10);
  await t.expect(dashboardFeautre.dashboards.nth(2).find(stackoverflowEntryFeautre.stackoverFlowEntrySelector).count).eql(5);
  await t.expect(dashboardFeautre.dashboards.nth(2).find(weatherDataEntryFeautre.weatherDataEntrySelector).count).eql(5);
});

test('that the content is displayed correctly for the stackoverflow entries', async (t: TestController) => {
  await t.expect(stackoverflowEntryFeautre.stackoverFlowAnsweredEntries.count).eql(13);
  await t.expect(stackoverflowEntryFeautre.stackoverFlowNotAnsweredEntries.count).eql(12);
  const typescriptDashboardFirstEntry = dashboardFeautre.dashboards.nth(0).find(stackoverflowEntryFeautre.stackoverFlowEntrySelector).nth(0);
  await t.expect(stackoverflowEntryFeautre.getStackoverflowEntryAnswers(typescriptDashboardFirstEntry)).eql('20');
  await t.expect(stackoverflowEntryFeautre.getStackoverflowEntryTitle(typescriptDashboardFirstEntry)).eql('TypeScript: Interfaces vs Types');
  await t.expect(stackoverflowEntryFeautre.getStackoverflowEntryDate(typescriptDashboardFirstEntry)).eql('15.05.2016');
  await t.expect(stackoverflowEntryFeautre.isStackoverflowEntrySolved(typescriptDashboardFirstEntry)).eql(true);
});

test('that the content is displayed correctly for the weatherdata entries', async (t: TestController) => {
  const weatherDataEntry = weatherDataEntryFeautre.weatherDataEntries.withText('18.08.2016');
  await t.expect(weatherDataEntryFeautre.getWeatherDataEntryDate(weatherDataEntry)).eql('18.08.2016');
  await t.expect(weatherDataEntryFeautre.getWeatherDataEntryTemperature(weatherDataEntry)).eql('35.6°C');
  await t.expect(weatherDataEntryFeautre.getWeatherDataEntryWindForce(weatherDataEntry)).eql('5km/H');
  await t.expect(weatherDataEntryFeautre.getWeatherDataEntryWindDirection(weatherDataEntry)).eql('333°');
});

test('that the third dashboard displays the results with alternating rows of weather data an stackoverflow data', async (t: TestController) => {
  const thirdDashboardEntries = dashboardFeautre.dashboards.nth(2).find('[cafe$=entry]');
  for (let i = 0; i < 10; i++) {
    await t.expect(thirdDashboardEntries.nth(i).getAttribute('cafe')).eql(i % 2 == 1 ? 'weatherdata-entry' : 'stackoverflow-entry');
  }
});
