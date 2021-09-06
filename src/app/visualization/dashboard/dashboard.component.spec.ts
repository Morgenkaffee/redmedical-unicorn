import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent, DefaultDashboardEntry} from './dashboard.component';
import {MockComponent} from "ng-mocks";
import {MatCard} from "@angular/material/card";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent, MockComponent(MatCard)]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display an error message when no entries are there to display', () => {
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.dashboard__error').item(0).innerHTML).toEqual('Keine Daten zur Anzeige gefunden');
  });

  it('should display the content of the input, for each one in a new element', () => {
    fixture.componentInstance.dashboardEntries = new Array<DefaultDashboardEntry>(10).fill({content: 'Some content'});
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.dashboard__entry')?.length).toEqual(10);
  });
});
