import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StackoverflowSearchItem} from "../../services/stackoverflow-search.service";

@Component({
  selector: 'app-stackoverflow-entry',
  templateUrl: './stackoverflow-entry.component.html',
  styleUrls: ['./stackoverflow-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StackoverflowEntryComponent implements OnInit {

  @Input()
  entryData!: StackoverflowSearchItem;

  constructor(private _window: Window) { }

  ngOnInit(): void {
  }

  openIssueInStackOverflow() {
    this._window.open(this.entryData.link, 'blank');
  }
}
