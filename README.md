# next-map-map
> Map map method for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-map-map
```

## usage
```js
import '@jswork/next-map-map';

const obj1 = {
  name: ['fei'],
  age: [100]
};

const rs1 = nx.mapMap(obj1, function (key, value) {
  return {
    key: key,
    value: value[0]
  }
});

// { name:'fei', age: 100 }
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-map-map/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-map-map
[version-url]: https://npmjs.org/package/@jswork/next-map-map

[license-image]: https://img.shields.io/npm/l/@jswork/next-map-map
[license-url]: https://github.com/afeiship/next-map-map/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-map-map
[size-url]: https://github.com/afeiship/next-map-map/blob/master/dist/next-map-map.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-map-map
[download-url]: https://www.npmjs.com/package/@jswork/next-map-map
