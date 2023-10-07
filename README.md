# search-a-tags

[![Build](https://github.com/arshadkazmi42/search-a-tags/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/search-a-tags/actions/workflows/nodejs.yml)
[![NPM Version](https://img.shields.io/npm/v/search-a-tags-hacktoberfest.svg)](https://www.npmjs.com/package/search-a-tags-hacktoberfest)
[![NPM Downloads](https://img.shields.io/npm/dt/search-a-tags-hacktoberfest.svg)](https://www.npmjs.com/package/search-a-tags-hacktoberfest)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/search-a-tags-hacktoberfest.svg)](https://github.com/arshadkazmi42/search-a-tags-hacktoberfest)
[![LICENSE](https://img.shields.io/npm/l/search-a-tags-hacktoberfest.svg)](https://github.com/arshadkazmi42/search-a-tags-hacktoberfest/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/search-a-tags-hacktoberfest.svg)](https://github.com/arshadkazmi42/search-a-tags-hacktoberfest/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/search-a-tags-hacktoberfest.svg)](https://github.com/arshadkazmi42/search-a-tags-hacktoberfest/commits/master)

Search `<a>` tags of HTML from HTML content

## Install

```
npm install search-a-tags
```

## Usage

```javascript
const SearchTags = require('search-a-tags');

const HTML = '<img src="https://github.com/arshadkazmi42"><a></a><b>Test</b><a href="https://google.com" />Click Here</a><p>This is a paragraph</p><a target="_" href="arshadkazmi42"><img src="test.png" /><img target="_" src="/images/1.png">';

const links = SearchTags(HTML);
console.log(links);
// [
//   'https://google.com',
//   'arshadkazmi42'
// ]
```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/search-a-tags/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase
