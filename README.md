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

### **[Documentation](https://www.saqqdy.com/load-ini)** • **[Change Log](./CHANGELOG.md)**

</div>

- [load-ini](#load-ini)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Nodejs require](#nodejs-require)
    - [ES6 module](#es6-module)
  - [API Reference](#api-reference)
    - [loadIni](#loadini)
    - [loadIniSync](#loadinisync)
    - [parseIni](#parseini)
    - [stringifyIni](#stringifyini)
  - [Support & Issues](#support--issues)
  - [License](#license)

## Installing

```bash
# use pnpm
$ pnpm install load-ini

# use npm
$ npm install load-ini --save
```

## Usage

### 1. Nodejs require

```js
const { loadIni, loadIniSync } = require('load-ini')

loadIni('/path/of/ini_file').then(data => {})
loadIniSync('/path/of/ini_file')
```

### 2. ES6 module

```js
import { loadIni, loadIniSync } from 'load-ini'
```

## API Reference

### loadIni

Read and parse a .ini file

- Since: `1.0.0`

- Arguments:

| Parameters | Description      | Type     | Optional | Required | Default |
| ---------- | ---------------- | -------- | -------- | -------- | ------- |
| path       | path of ini file | `string` | -        | true     | -       |

- Returns: `object | array`

- Example:

```ts
loadIni('/path/of/ini_file').then(data => {
  console.log(data)
  // { "name": "saqqdy" }
})
```

- Types:

```ts
declare function loadIni(path: string): Promise<Record<string, unknown> | unknown[]>
```

### loadIniSync

Read and parse a .ini file sync mode

- Since: `1.0.0`

- Arguments:

| Parameters | Description      | Type     | Optional | Required | Default |
| ---------- | ---------------- | -------- | -------- | -------- | ------- |
| path       | path of ini file | `string` | -        | true     | -       |

- Returns: `object | array`

- Example:

```ts
loadIniSync('/path/of/ini_file')
// { "name": "saqqdy" }
```

- Types:

```ts
declare function loadIniSync(path: string): Record<string, unknown> | unknown[]
```

### parseIni

Parse ini string into object

- Since: `1.0.0`

- Arguments:

| Parameters | Description | Type     | Optional | Required | Default |
| ---------- | ----------- | -------- | -------- | -------- | ------- |
| data       | ini string  | `string` | -        | true     | -       |

- Returns: `object | array`

- Example:

```ts
parseIni(`
[user]
    name = saqqdy
    age = 18
`)
// { "name": "saqqdy", age: 18 }
```

- Types:

```ts
declare function parseIni(data: string): Record<string, unknown> | unknown[]
```

### stringifyIni

Convert objects to ini strings

- Since: `1.0.0`

- Arguments:

| Parameters | Description | Type             | Optional | Required | Default |
| ---------- | ----------- | ---------------- | -------- | -------- | ------- |
| data       | object data | `object` `array` | -        | true     | -       |

- Returns: `string`

- Example:

```ts
stringifyIni({ name: 'saqqdy', age: 18 })
// [user]
//     name = saqqdy
//     age = 18
```

- Types:

```ts
declare function stringifyIni<T>(data: T, options?: EncodeOptions): string
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
