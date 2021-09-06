import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import * as moment from "moment";


@Injectable({
  providedIn: 'root'
})
export class StackoverflowSearchService {
  private static readonly STACKOVERFLOW_API_URL =
    "https://api.stackexchange.com/2.2/search?";


  constructor(private httpClient: HttpClient) { }

  search(keyword: string, maxResults?: number): Observable<Array<StackoverflowSearchItem>> {
    return this.httpClient.get<StackoverflowSearchResponse>(StackoverflowSearchService.createSearchUrl(keyword, maxResults)).pipe(
      tap((stackoverflowSearchResponse: StackoverflowSearchResponse) => console.log(`API USAGE: ${stackoverflowSearchResponse.quota_remaining} of ${stackoverflowSearchResponse.quota_max} requests available`)),
      map((stackoverflowSearchResponse: StackoverflowSearchResponse) => stackoverflowSearchResponse.items.map(this.mapSearchResultItems())));
  }

  private mapSearchResultItems(): (value: StackoverflowSearchResultItem, index: number, array: StackoverflowSearchResultItem[]) => StackoverflowSearchItem {
    return (item: StackoverflowSearchResultItem) => {
      return {title: item.title, creationDate: moment(item.creation_date, 'X').toDate(), isAnswered: item.is_answered, answerCount: item.answer_count, link: item.link}
    };
  }

  private static createSearchUrl(keyword: string, maxResults: number = 10): string {
    return `${StackoverflowSearchService.STACKOVERFLOW_API_URL}pagesize=${maxResults}&order=desc&sort=activity&site=stackoverflow&intitle=${keyword}`
  }
}


interface StackoverflowSearchResponse {
  has_more: boolean;
  items: Array<StackoverflowSearchResultItem>;
  quota_max: number;
  quota_remaining: number;
}

interface StackoverflowSearchResultItem  {
  answer_count: number;
  closed_date: number;
  closed_reason: string;
  creation_date: number;
  is_answered: boolean;
  last_activity_date: number;
  link: string;
  score: number;
  tags: Array<string>;
  title: string;
  view_count: number;
}

export interface StackoverflowSearchItem {
  title: string;
  isAnswered: boolean;
  creationDate: Date;
  answerCount: number;
  link: string;
}

