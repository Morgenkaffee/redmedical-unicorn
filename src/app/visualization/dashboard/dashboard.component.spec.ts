import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent, DashboardEntry} from './dashboard.component';
import {MockComponent} from "ng-mocks";
import {MatCard} from "@angular/material/card";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent, MockComponent(MatCard)]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the content of the input, for each one in a new element', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    fixture.componentInstance.dashboardEntries = new Array<DashboardEntry>(10).fill({content: 'Some content'});
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.dashboard__entry')?.length).toEqual(10);
  });
});
