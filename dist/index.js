/*!
 * name: @jswork/next-map-map
 * description: Map map method for next.
 * homepage: https://github.com/afeiship/next-map-map
 * version: 1.0.2
 * date: 2021-01-09 16:29:21
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
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
