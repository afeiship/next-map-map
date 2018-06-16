var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-map-map');

describe('next/mapMap', function () {

  it('nx.mapMap', function () {
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

    // console.log(rs1);

    assert.equal(rs1.name, 'fei');
    assert.equal(rs1.age, '100');
  });

});
