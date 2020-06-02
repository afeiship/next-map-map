/*!
 * name: @feizheng/next-map-map
 * description: Map map method for next.
 * homepage: https://github.com/afeiship/next-map-map
 * version: 1.0.0
 * date: 2020-06-02T01:55:38.743Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.mapMap = function (inObj, inCallback, inContext) {
    var result = {};
    nx.each(inObj, function (key, value) {
      var pairs = inCallback.call(inContext, key, value, inObj);
      result[pairs.key] = pairs.value;
    }, inContext);
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.mapMap;
  }
})();

//# sourceMappingURL=next-map-map.js.map
