import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GithubSearchItem} from "../../services/github-search.service";

@Component({
  selector: 'app-github-entry',
  templateUrl: './github-entry.component.html',
  styleUrls: ['./github-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubEntryComponent implements OnInit {

  @Input()
  entryData!: GithubSearchItem;

  constructor(private _window: Window) { }

  ngOnInit(): void {
  }

  openIssueInStackOverflow() {
    this._window.open(this.entryData.link, 'blank');
  }
}
