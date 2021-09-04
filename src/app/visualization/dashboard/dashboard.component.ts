import {ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  @Input()
  dashboardItems: Array<DashboardItem> = [];
  @ContentChild('dashboardEntryTemplate')
  dashboardEntryRef!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface DashboardItem {
  readonly content: string;
}
