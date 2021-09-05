import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import {GithubSearchService} from "./services/github-search.service";
import {Observable, Subject, zip} from "rxjs";
import {map, takeUntil} from "rxjs/operators";
import {LocalDataService} from "./services/local-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnDestroy {
  destroyed$ = new Subject<boolean>();
  angularSearchResults$: Observable<any> = this.githubSearchService.search('Angular2').pipe(takeUntil(this.destroyed$));
  typeScriptSearchResults$: Observable<any> = this.githubSearchService.search('TypeScript').pipe(takeUntil(this.destroyed$));
  weatherSearchResult$: Observable<any> = zip(this.githubSearchService.search('Weather', 5).pipe(takeUntil(this.destroyed$)), this.localDataService.getLocalWeatherData()).pipe(map(result => this.mergeArrays(result[0], result[1])));

  constructor(private githubSearchService: GithubSearchService, private localDataService: LocalDataService) {
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  private mergeArrays = (a: Array<any>, b: Array<any>) => (a.length > b.length ? a : b).reduce((acc, cur, i) => a[i] && b[i] ? [...acc, a[i], b[i]] : [...acc, cur], []);
}
