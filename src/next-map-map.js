(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

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

}());
