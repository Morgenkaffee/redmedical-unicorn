import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MockComponent} from "ng-mocks";
import {DashboardComponent} from "./visualization/dashboard/dashboard.component";
import {anyNumber, anyString, instance, mock, reset, when} from "ts-mockito";
import {StackoverflowSearchService, StackoverflowSearchItem} from "./services/stackoverflow-search.service";
import {of, Subject} from "rxjs";
import {LocalDataService, WeatherData} from "./services/local-data.service";


describe('AppComponent', () => {
  let mockStackoverflowSeachService = mock(StackoverflowSearchService);
  let mockLocalDataService = mock(LocalDataService);
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    when(mockStackoverflowSeachService.search(anyString())).thenReturn(of());
    when(mockLocalDataService.getLocalWeatherData()).thenReturn(of());
    when(mockStackoverflowSeachService.search(anyString(), anyNumber())).thenReturn(of());
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent(DashboardComponent)
      ],
      providers: [
        {provide: StackoverflowSearchService, useValue: instance(mockStackoverflowSeachService)},
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
    reset(mockStackoverflowSeachService);
    reset(mockLocalDataService);
    const mockStackoverflowSearchResultSubject = new Subject<StackoverflowSearchItem[]>();
    const mockLocalDataSearchResultSubject = new Subject<WeatherData[]>();
    when(mockStackoverflowSeachService.search(anyString(), anyNumber())).thenReturn(mockStackoverflowSearchResultSubject);
    when(mockStackoverflowSeachService.search(anyString())).thenReturn(mockStackoverflowSearchResultSubject);
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
    mockStackoverflowSearchResultSubject.next([{title: 'a'} as any, {title: 'b'} as any]);
    mockLocalDataSearchResultSubject.next([{rain: 1} as any, {rain: 2} as any]);
  });
});
