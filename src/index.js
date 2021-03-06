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
