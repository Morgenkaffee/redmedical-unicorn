import { Pipe, PipeTransform } from '@angular/core';
import { unescape } from 'lodash';

@Pipe({
  name: 'unescapeHtml',
  pure: true
})
export class UnescapeHtmlPipe implements PipeTransform {

  transform(value: string): string {
    return unescape(value);
  }

}
