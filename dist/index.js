/*!
 * name: @jswork/next-map-map
 * description: Map map method for next.
 * homepage: https://github.com/afeiship/next-map-map
 * version: 1.0.0
 * date: 2020-11-20 16:55:18
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
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
