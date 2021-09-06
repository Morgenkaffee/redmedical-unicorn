import { UnescapeHtmlPipe } from './unescape-html.pipe';

describe('UnescapeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new UnescapeHtmlPipe();
    expect(pipe).toBeTruthy();
  });

  it('should unescape a HTML escaped string', () => {
    const pipe = new UnescapeHtmlPipe();
    expect(pipe.transform('Test &#39;String&#39;')).toBe('Test \'String\'');
  });
});
