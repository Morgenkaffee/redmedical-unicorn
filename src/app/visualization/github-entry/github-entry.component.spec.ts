import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GithubEntryComponent} from './github-entry.component';
import {instance, mock, verify, when} from "ts-mockito";
import {MockComponent, MockPipe} from "ng-mocks";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {UnescapeHtmlPipe} from "../../pipes/unescape-html.pipe";

describe('GithubEntryComponent', () => {
  let component: GithubEntryComponent;
  let fixture: ComponentFixture<GithubEntryComponent>;
  let compiled: HTMLElement;
  let mockWindow = mock<Window>();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubEntryComponent, MockComponent(FaIconComponent), MockPipe(UnescapeHtmlPipe) ],
      providers: [{provide: Window, useValue: instance(mockWindow)}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubEntryComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should be empty when the input was empty', () => {
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.entry')).toBe(null);
  });

  it('should correctly display the data', () => {
    component.entryData = {title: 'testTitle', isAnswered: false, answerCount: 10, creationDate: new Date('01-31-1991'), link: 'testLink'};
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.entry')).not.toBe(null);
    expect(compiled.querySelector('.entry__date')?.textContent).toBe('31.01.1991');
    expect(compiled.querySelector('.entry--answered')).toBe(null);
    expect(compiled.querySelector('.entry__answer-count')?.textContent).toBe('10');
  });

  it('should correctly display append the class that marks the answer as answered', () => {
    component.entryData = {title: 'testTitle', isAnswered: true, answerCount: 10, creationDate: new Date('01-31-1991'), link: 'testLink'};
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.entry--answered')).not.toBe(null);
  });

  it('should open the link in a new window when the user clicks on the entry', () => {
    component.entryData = {title: 'testTitle', isAnswered: true, answerCount: 10, creationDate: new Date('01-31-1991'), link: 'testLink'};
    fixture.detectChanges();
    when(mockWindow.open('testLink', 'blank'));
    component.openIssueInStackOverflow();
    verify(mockWindow.open('testLink', 'blank')).once()
  });
});
