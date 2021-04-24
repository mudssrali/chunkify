# chunkify
A simple utility to split given array into chunks of input size with array reverse option

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
<a aria-label="Package size" href="https://bundlephobia.com/result?p=@mudssrali/chunkify">
  <img alt="" src="https://badgen.net/bundlephobia/minzip/@mudssrali/chunkify">
</a>

## Install

Install with npm or yarn via

```
yarn add @mudssrali/chunkify
```

or

```
npm i @mudssrali/chunkify
```

## API

```ts
 const chunkify: <T>(kvArray: T[], chunkSize: number, reverse?: boolean) => T[][];
```

## Usage

```js
import chunkify from '@mudssrali/chunkify'

const value = chunkify([1,2,3,4], 2)

// value === [[1, 2], [3, 4]]
```

You can also pass reverse option as third argument to reverse the order of array element while creating chunks

```js
import chunkify from '@mudssrali/chunkify'

const value = chunkify(["open-source", "is", "everything"], 1, true)

// value === [["everything"], ["is"], ["open-source"]]

```

Also keep in mind, if the chunkSize is >= kvArray.length, return value will be in form of `[[]]`

```jsx
import chunkify from 'chunkify'

const value = chunkify([1,2,3,4], 4)
// value === [ [1, 2, 3, 4] ]
// value === [ [4, 3, 2, 1] ] // true passed as third argument to chunkify
```