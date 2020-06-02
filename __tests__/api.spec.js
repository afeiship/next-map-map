const nx = require('@feizheng/next-js-core2');
require('../src/next-map-map');

describe('api.basic test', () => {
  test('nx.mapMap', function () {
    var obj1 = {
      name: ['fei'],
      age: [100]
    };

    var rs1 = nx.mapMap(obj1, function (key, value) {
      return {
        key: key,
        value: value[0]
      }
    });

    expect(rs1.name).toBe('fei');
    expect(rs1.age).toBe(100);
  });
});
