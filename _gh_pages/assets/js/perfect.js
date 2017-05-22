(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.perfect = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var perfect = {
    /**
     * The version of the framework
     * @type String
     */
    version: '0.1.0',
    versionDetail: {
      major: 0,
      minor: 1,
      patch: 0
    }
  };
  exports.default = perfect;
});
//# sourceMappingURL=perfect.js.map
