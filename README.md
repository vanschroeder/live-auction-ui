# auction ui
[![Build Status](https://travis-ci.org/vancarney/live-auction-ui.svg?branch=master)](https://travis-ci.org/vancarney/live-auction-ui)
[![codecov](https://codecov.io/gh/vancarney/live-auction-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/vancarney/live-auction-ui)
[![npm version](https://badge.fury.io/js/live-auction-ui.svg)](http://badge.fury.io/js/live-auction-ui)
[![devDependency Status](https://david-dm.org/vancarney/live-auction-ui/dev-status.svg)](https://david-dm.org/vancarney/live-auction-ui?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/vancarney/live-auction-ui.svg)](https://github.com/vancarney/live-auction-ui/issues)
[![GitHub stars](https://img.shields.io/github/stars/vancarney/live-auction-ui.svg)](https://github.com/vancarney/live-auction-ui/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/vancarney/live-auction-ui/master/LICENSE)

## Demo
https://vancarney.github.io/auction-ui/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

UI for Live Video Auctions

## Installation

Install through npm:
```
npm install --save auction-ui
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { AuctionUiModule } from 'live-auction-ui';

@NgModule({
  imports: [
    AuctionUiModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<auction-ui></auction-ui>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/vancarney/live-auction-ui/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/auction-ui/bundles/auction-ui.umd.js"></script>
<script>
    // everything is exported AuctionUi namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://vancarney.github.io/auction-ui/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
