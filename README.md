# next-map-map
> Map map method for next.

## installation
```bash
npm install -S @feizheng/next-map-map
```

## usage
```js
import '@feizheng/next-map-map';

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
