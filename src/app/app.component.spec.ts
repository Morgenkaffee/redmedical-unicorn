import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MockComponent} from "ng-mocks";
import {DashboardComponent} from "./visualization/dashboard/dashboard.component";
import {anyNumber, anyString, instance, mock, reset, when} from "ts-mockito";
import {GithubSearchService, GithubSearchItem} from "./services/github-search.service";
import {of, Subject} from "rxjs";
import {LocalDataService, WeatherData} from "./services/local-data.service";


describe('AppComponent', () => {
  let mockGithubSeachService = mock(GithubSearchService);
  let mockLocalDataService = mock(LocalDataService);
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    when(mockGithubSeachService.search(anyString())).thenReturn(of());
    when(mockLocalDataService.getLocalWeatherData()).thenReturn(of());
    when(mockGithubSeachService.search(anyString(), anyNumber())).thenReturn(of());
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent(DashboardComponent)
      ],
      providers: [
        {provide: GithubSearchService, useValue: instance(mockGithubSeachService)},
        {provide: LocalDataService, useValue: instance(mockLocalDataService)}]
    }).compileComponents();
   });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {

    expect(component).toBeTruthy();
  });


  it('should create three dashboards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-dashboard')?.length).toEqual(3);
  });
  it('should merge the search results in an alternating order', (done) => {
    reset(mockGithubSeachService);
    reset(mockLocalDataService);
    const mockGithubSearchResultSubject = new Subject<GithubSearchItem[]>();
    const mockLocalDataSearchResultSubject = new Subject<WeatherData[]>();
    when(mockGithubSeachService.search(anyString(), anyNumber())).thenReturn(mockGithubSearchResultSubject);
    when(mockGithubSeachService.search(anyString())).thenReturn(mockGithubSearchResultSubject);
    when(mockLocalDataService.getLocalWeatherData()).thenReturn(mockLocalDataSearchResultSubject);
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    app.weatherSearchResult$.subscribe((result) => {
      expect(result.length).toBe(4);
      expect(result[0].title).toBe('a');
      expect(result[1].rain).toBe(1);
      expect(result[2].title).toBe('b');
      expect(result[3].rain).toBe(2);
      done();
    });
    mockGithubSearchResultSubject.next([{title: 'a'} as any, {title: 'b'} as any]);
    mockLocalDataSearchResultSubject.next([{rain: 1} as any, {rain: 2} as any]);
  });
});
