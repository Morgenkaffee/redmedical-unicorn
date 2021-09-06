import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import {StackoverflowSearchService} from "./services/stackoverflow-search.service";
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
  angularSearchResults$: Observable<any> = this.stackoverflowSearchService.search('Angular2').pipe(takeUntil(this.destroyed$));
  typeScriptSearchResults$: Observable<any> = this.stackoverflowSearchService.search('TypeScript').pipe(takeUntil(this.destroyed$));
  weatherSearchResult$: Observable<any> = zip(this.stackoverflowSearchService.search('Weather', 5).pipe(takeUntil(this.destroyed$)), this.localDataService.getLocalWeatherData()).pipe(map(result => this.mergeArrays(result[0], result[1])));

  constructor(private stackoverflowSearchService: StackoverflowSearchService, private localDataService: LocalDataService) {
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  private mergeArrays = (a: Array<any>, b: Array<any>) => (a.length > b.length ? a : b).reduce((acc, cur, i) => a[i] && b[i] ? [...acc, a[i], b[i]] : [...acc, cur], []);
}
