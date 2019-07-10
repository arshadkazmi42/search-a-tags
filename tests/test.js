const { expect } = require('chai');

const SearchTags = require('../index');


const HTML = '<img src="https://github.com/arshadkazmi42"><a></a><b>Test</b><a href="https://google.com" />Click Here</a><p>This is a paragraph</p><a target="_" href="arshadkazmi42"><img src="test.png" /><img target="_" src="/images/1.png">';

describe('Validates parse functions', () => {
  it('show return all links from a tags', () => {
    expect(SearchTags(HTML)).to.deep.equal([
      'https://google.com',
      'arshadkazmi42'
    ]);
  });
  it('gives empty list for invalid input', () => {
    expect(SearchTags(null)).to.deep.equal([]);
    expect(SearchTags(undefined)).to.deep.equal([]);
    expect(SearchTags(0)).to.deep.equal([]);
    expect(SearchTags([0, 1, 2])).to.deep.equal([]);
    expect(SearchTags(['test1', 'test2', 'test3'])).to.deep.equal([]);
  });  
});
