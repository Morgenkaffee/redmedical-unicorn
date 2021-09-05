import {ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  @Input()
  dashboardEntries: Array<DashboardEntry> = [];
  @ContentChild('dashboardEntryTemplate')
  dashboardEntryTemplateRef!: TemplateRef<any>;

  constructor() {
  }

}

export interface DashboardEntry {
  readonly content: string;
}
