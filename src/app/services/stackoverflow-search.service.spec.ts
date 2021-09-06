import {TestBed} from '@angular/core/testing';

import {StackoverflowSearchService} from './stackoverflow-search.service';
import {anyString, instance, mock, when} from "ts-mockito";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

describe('StackoverflowSearchService', () => {
  let service: StackoverflowSearchService;

  let mockHttpClient = mock(HttpClient);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: HttpClient, useValue: instance(mockHttpClient)}]
    });
    service = TestBed.inject(StackoverflowSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should map a search result correctly when a search was successfully', (done) => {
    when(mockHttpClient.get(anyString())).thenReturn(of(mockResponseBody))
    service.search('anything').subscribe((result) => {
      expect(result.length).toBe(2);
      expect(result[0].title).toBe('First Test Title');
      expect(result[0].isAnswered).toBe(false);
      expect(result[0].creationDate.getTime()).toEqual(123456789000);
      expect(result[1].title).toBe('Second Test Title');
      expect(result[1].isAnswered).toBe(true);
      expect(result[1].creationDate.getTime()).toEqual(1630740441000);
      done();
    });
  })
});

const mockResponseBody = {
  "items": [
    {
      "tags": [
        "testtag1",
      ],
      "is_answered": false,
      "view_count": 15,
      "answer_count": 1,
      "score": 0,
      "last_activity_date": 1630755386,
      "creation_date": 123456789,
      "last_edit_date": 1630755386,
      "question_id": 69054735,
      "content_license": "CC BY-SA 4.0",
      "link": "https://stackoverflow.com/questions/69054735/angular-12-listening-to-multiple-children-events-in-parent-component",
      "title": "First Test Title"
    },
    {
      "tags": [
        "testtag3",
      ],
      "is_answered": true,
      "view_count": 15,
      "answer_count": 1,
      "score": 0,
      "last_activity_date": 1630740768,
      "creation_date": 1630740441,
      "question_id": 69053245,
      "content_license": "CC BY-SA 4.0",
      "link": "https://stackoverflow.com/questions/69053245/how-to-install-angular-9-using-nvm",
      "title": "Second Test Title"
    }
  ],
  "has_more": true,
  "quota_max": 300,
  "quota_remaining": 294
}
