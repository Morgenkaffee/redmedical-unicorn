import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  private static readonly STACKOVERFLOW_API_URL =
    "https://api.stackexchange.com/2.2/search?";


  constructor(private httpClient: HttpClient) { }

  search(keyword: string, maxResults?: number): Observable<Array<SearchItems>> {
    return this.httpClient.get<GithubSearchResponse>(GithubSearchService.createSearchUrl(keyword, maxResults)).pipe(
      tap((githubSearchResponse: GithubSearchResponse) => console.log(`API USAGE: ${githubSearchResponse.quota_remaining} of ${githubSearchResponse.quota_max} requests available`)),
      map((githubSearchResponse: GithubSearchResponse) => githubSearchResponse.items.map(this.mapSearchResultItems())));
  }

  private mapSearchResultItems(): (value: GithubSearchResultItem, index: number, array: GithubSearchResultItem[]) => SearchItems {
    return (item: GithubSearchResultItem) => {
      return {title: item.title, creationDate: new Date(item.creation_date * 1000), isAnswered: item.is_answered, answerCount: item.answer_count} // little hack to fast create ms out of seconds
    };
  }

  private static createSearchUrl(keyword: string, maxResults: number = 10): string {
    return `${GithubSearchService.STACKOVERFLOW_API_URL}pagesize=${maxResults}&order=desc&sort=activity&site=stackoverflow&intitle=${keyword}`
  }

}

interface GithubSearchResponse {
  has_more: boolean;
  items: Array<GithubSearchResultItem>;
  quota_max: number;
  quota_remaining: number;


}

interface GithubSearchResultItem  {
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

export interface SearchItems {
  title: string;
  isAnswered: boolean;
  creationDate: Date;
  answerCount: number
}

