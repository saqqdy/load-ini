<div style="text-align: center;" align="center">

# load-ini

Read and parse a .ini file

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

<div style="text-align: center; margin-bottom: 20px;" align="center">

## **For API documentation, see: [API Docs](./docs/modules.md)**

</div>

## Installing

```bash
# use pnpm
$ pnpm install load-ini

# use npm
$ npm install load-ini --save

# use yarn
$ yarn add load-ini
```

## Usage

1. use `load-ini` in async mode

```js
import { loadIni } from 'load-ini'

loadIni().then(path => {
  console.log('result is: ', path) // { "name": "saqqdy" }
})
```

2. use `load-ini` in sync mode

```js
import { loadIniSync } from 'load-ini'

console.log('result is: ', loadIniSync()) // { "name": "saqqdy" }
```

## Support & Issues

Please open an issue [here](https://github.com/saqqdy/load-ini/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/load-ini.svg?style=flat-square
[npm-url]: https://npmjs.org/package/load-ini
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/load-ini/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/load-ini&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/load-ini.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/load-ini?branch=master
[download-image]: https://img.shields.io/npm/dm/load-ini.svg?style=flat-square
[download-url]: https://npmjs.org/package/load-ini
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_load-ini
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_load-ini
