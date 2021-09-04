import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  @Input()
  dashboardItems: Array<DashboardItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

}

export interface DashboardItem {
  readonly content: string;
}
