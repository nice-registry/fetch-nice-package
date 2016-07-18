# fetch-[nice-package](https://github.com/zeke/nice-package/) [![Build Status](https://travis-ci.org/hemanth/fetch-nice-package.svg?branch=master)](https://travis-ci.org/hemanth/fetch-nice-package)

> fetch cleaned package metadata from the npm registry.


## Install

```
$ npm install --save fetch-nice-package
```


## Usage

```js
const fetchNicePackage = require('fetch-nice-package');

fetchNicePackage('nice-package')
.then(info => console.log(info))
.catch(err => console.error(err))
```

P.S: `info` will have all the [convenience-methods](https://github.com/zeke/nice-package/blob/master/README.md#convenience-methods) that `nice-package` has.

## API

### fetchNicePackage(input)

#### input

Type: `string`

Node module name.

## License

MIT © [Hemanth.HM](https://h3manth.com)
