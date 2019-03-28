# hexdump-parser

> Parses hexdump(1) output

## Install

Using npm:

```sh
npm install --save hexdump-parser
```

or using yarn:

```sh
yarn add hexdump-parser
```

## Usage

cli:
```sh
hexdump -C FILE | cli-to-json
```

or api:
```js
const lib = require("hexdump-parser");
const arr: Uint8Array = lib.parse(input);
```
