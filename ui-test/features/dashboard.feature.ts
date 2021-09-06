import { Selector } from 'testcafe';

export class DashboardFeature {
  dashboards: Selector =  Selector('[cafe=dashboard]');
  constructor() {
  }
}

export default new DashboardFeature();
