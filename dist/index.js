/*!
 * name: @jswork/next-map-map
 * description: Map map method for next.
 * homepage: https://github.com/afeiship/next-map-map
 * version: 1.0.1
 * date: 2021-01-06 22:22:03
 * license: MIT
 */

(function () {
  var global = global || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.mapMap = function (inObj, inCallback, inContext) {
    var result = {};
    nx.each(
      inObj,
      function (key, value) {
        var pairs = inCallback.call(inContext, key, value, inObj);
        result[pairs.key] = pairs.value;
      },
      inContext
    );
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.mapMap;
  }
})();
