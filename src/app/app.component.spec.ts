import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MockComponent} from "ng-mocks";
import {DashboardComponent} from "./visualization/dashboard/dashboard.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent(DashboardComponent)
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should create three dashboards', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-dashboard')?.length).toEqual(3);
  });
});
