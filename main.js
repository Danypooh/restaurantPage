"use strict";
(self["webpackChunkrestaurantpage"] = self["webpackChunkrestaurantpage"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/bauer-bodoni.otf */ "./src/fonts/bauer-bodoni.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/background.jpeg */ "./src/imgs/background.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* General */\nhtml {\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: 'bauer-bodoni';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('opentype');\n  font-weight: bold;\n  font-style: normal;\n}\n  \n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  margin: 0;\n  font-family: 'bauer-bodoni';\n}\n  \n:root {\n  --pasta-white: white;\n  --pasta-black: black;\n  font-size: calc(0.625rem + 0.4vw);\n}\n\n#content {\n  overflow: nh ;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  color: var(--pasta-white);\n}\n\na {\n  color: var(--pasta-white);\n}\n\n/* Header */\nheader {\n  position: relative;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  flex-wrap: nowrap;\n  gap: 20px;\n  height: calc(10vh + 2vw);\n  font-size: calc(0.5rem + 3vw);\n  background-color: var(--pasta-black);\n}\n\n#title {\n  align-self: center;\n}\n\n#logo {\n  width: calc(1rem + 8vh);\n  height: calc(1rem + 8vh);\n  border-radius: 50%;\n  margin-top: 1%;\n}\n\n/* Main content */\nul {\n  list-style-type: none;\n}\n\nmain {\n  margin-top: 50px;\n}\n\n#main-content {\n  display: flex;\n  flex-flow: column;\n  padding-bottom: 15%;\n}\n\na > img {\n  width: calc(25vw + 10vh);\n  height: calc(25vw + 10vh);\n  border-radius: 50%;\n  margin: 15px;\n}\n\n@media screen and (min-width: 500px) {\n  ul {\n    display: inline-flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n  }\n\n  #main-content {\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n  }\n}\n\n/* Footer */\nfooter {\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  width: 100%;\n  height: calc(5vh + 1vw);\n  font-size: calc(0.5rem + 3vw);\n  background-color: var(--pasta-black);\n}\n\n#slogan {\n  align-self: center;\n}\n\n/* Menu */\n#menu-content {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n}\n\n#menu-content > a > img {\n  width: 100%;\n  height: 120%;\n  border-radius: 10%;\n}\n\n/* Contact */\n#contact-content {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  display: flex;\n  flex-flow: column;\n  gap: 10vh;\n  text-align: center;\n  font-size: calc(1rem + 1vw);\n  transform: translate(-50%, -50%);\n  background-color: rgb(0, 0, 0, 0.9);\n  color: white;\n  padding: 5% 10%;\n  width: 80%;\n}\n\n/* Background */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,YAAY;AACZ;EACE,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;EAC3B,+DAAuD;EACvD,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;;;EAGE,mBAAmB;EACnB,SAAS;EACT,2BAA2B;AAC7B;;AAEA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,iCAAiC;AACnC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yDAA+C;EAC/C,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,WAAW;AACX;EACE,kBAAkB;EAClB,MAAM;EACN,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,SAAS;EACT,wBAAwB;EACxB,6BAA6B;EAC7B,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,wBAAwB;EACxB,kBAAkB;EAClB,cAAc;AAChB;;AAEA,iBAAiB;AACjB;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE;IACE,oBAAoB;IACpB,6BAA6B;IAC7B,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,6BAA6B;IAC7B,eAAe;EACjB;AACF;;AAEA,WAAW;AACX;EACE,eAAe;EACf,SAAS;EACT,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,WAAW;EACX,uBAAuB;EACvB,6BAA6B;EAC7B,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;AACpB;;AAEA,SAAS;AACT;EACE,aAAa;EACb,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA,YAAY;AACZ;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,kBAAkB;EAClB,2BAA2B;EAC3B,gCAAgC;EAChC,mCAAmC;EACnC,YAAY;EACZ,eAAe;EACf,UAAU;AACZ;;AAEA,eAAe","sourcesContent":["/* General */\nhtml {\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: 'bauer-bodoni';\n  src: url('./fonts/bauer-bodoni.otf') format('opentype');\n  font-weight: bold;\n  font-style: normal;\n}\n  \n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  margin: 0;\n  font-family: 'bauer-bodoni';\n}\n  \n:root {\n  --pasta-white: white;\n  --pasta-black: black;\n  font-size: calc(0.625rem + 0.4vw);\n}\n\n#content {\n  overflow: nh ;\n}\n\nbody {\n  background-image: url('./imgs/background.jpeg');\n  color: var(--pasta-white);\n}\n\na {\n  color: var(--pasta-white);\n}\n\n/* Header */\nheader {\n  position: relative;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  flex-wrap: nowrap;\n  gap: 20px;\n  height: calc(10vh + 2vw);\n  font-size: calc(0.5rem + 3vw);\n  background-color: var(--pasta-black);\n}\n\n#title {\n  align-self: center;\n}\n\n#logo {\n  width: calc(1rem + 8vh);\n  height: calc(1rem + 8vh);\n  border-radius: 50%;\n  margin-top: 1%;\n}\n\n/* Main content */\nul {\n  list-style-type: none;\n}\n\nmain {\n  margin-top: 50px;\n}\n\n#main-content {\n  display: flex;\n  flex-flow: column;\n  padding-bottom: 15%;\n}\n\na > img {\n  width: calc(25vw + 10vh);\n  height: calc(25vw + 10vh);\n  border-radius: 50%;\n  margin: 15px;\n}\n\n@media screen and (min-width: 500px) {\n  ul {\n    display: inline-flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n  }\n\n  #main-content {\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n  }\n}\n\n/* Footer */\nfooter {\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  width: 100%;\n  height: calc(5vh + 1vw);\n  font-size: calc(0.5rem + 3vw);\n  background-color: var(--pasta-black);\n}\n\n#slogan {\n  align-self: center;\n}\n\n/* Menu */\n#menu-content {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n}\n\n#menu-content > a > img {\n  width: 100%;\n  height: 120%;\n  border-radius: 10%;\n}\n\n/* Contact */\n#contact-content {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  display: flex;\n  flex-flow: column;\n  gap: 10vh;\n  text-align: center;\n  font-size: calc(1rem + 1vw);\n  transform: translate(-50%, -50%);\n  background-color: rgb(0, 0, 0, 0.9);\n  color: white;\n  padding: 5% 10%;\n  width: 80%;\n}\n\n/* Background */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets.js":
/*!***********************!*\
  !*** ./src/assets.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/pizza.jpg */ "./src/imgs/pizza.jpg");
/* harmony import */ var _imgs_pasta_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/pasta.jpg */ "./src/imgs/pasta.jpg");
/* harmony import */ var _imgs_salad_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/salad.jpg */ "./src/imgs/salad.jpg");
/* harmony import */ var _imgs_dessert_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/dessert.jpg */ "./src/imgs/dessert.jpg");
/* harmony import */ var _imgs_drink_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/drink.jpg */ "./src/imgs/drink.jpg");
/* harmony import */ var _imgs_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgs/logo.png */ "./src/imgs/logo.png");







const images = (function() {
  // Private
  const createImgHtml = (img, type) =>
    `
    <li class="products">
      <a href="#"><img src="${img}" alt="${type}-image"></a>
      <div></div>
    </li>
    `;

  const pizza = createImgHtml(_imgs_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__, 'pizza');
  const pasta = createImgHtml(_imgs_pasta_jpg__WEBPACK_IMPORTED_MODULE_1__, 'pasta');
  const salad = createImgHtml(_imgs_salad_jpg__WEBPACK_IMPORTED_MODULE_2__, 'salad');
  const dessert = createImgHtml(_imgs_dessert_jpg__WEBPACK_IMPORTED_MODULE_3__, 'dessert');
  const drink = createImgHtml(_imgs_drink_jpg__WEBPACK_IMPORTED_MODULE_4__, 'drink');

  const logo = `<img id="logo" src="${_imgs_logo_png__WEBPACK_IMPORTED_MODULE_5__}" alt="the-pasta-society-logo">`;

  // Public
  const getPizza = () => pizza;
  const getPasta = () => pasta;
  const getSalad = () => salad;
  const getDessert = () => dessert;
  const getDrink = () => drink;
  const getLogo = () => logo;

  return {
    getPizza,
    getPasta,
    getSalad,
    getDessert,
    getDrink,
    getLogo,
  }   
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (images);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


const contact = (function() {
  // Private
  function createContact() {
    const content = `
      <div id="contact-content">
        <div>+52 222 805 2552</div>
        <div>Instagram: <a href="https://www.instagram.com/thepastasociety_/" target="_blank" rel="noopener noreferrer">@thepastasociety_</a></div>
        <div>Facebook: <a href="https://www.facebook.com/thepastasociety/" target="_blank" rel="noopener noreferrer">The Pasta Society</a></div>
        <div><a href="https://www.google.com/maps/place/Pasta+Society/@19.0207495,-98.1295926,15z/data=!4m6!3m5!1s0x85cfebeb91e27403:0xfa9cebc3bb71d161!8m2!3d19.0207495!4d-98.1295926!16s%2Fg%2F11swpj2j7m" target="_blank" rel="noopener noreferrer">Location</a></div>
      </div>
    `;
    return content;
  }

  function createFooter() {
    const footer = `
      <footer>
        <div id="slogan">Be part of the society: 
          <a href="" id="home">Home</a>
        </div>
      </footer>
      `;
    return footer;
  }
  
  // Public
  function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML= '';
    content.insertAdjacentHTML("afterbegin", createContact());
    content.insertAdjacentHTML("beforeend", createFooter());
    const homeId = document.getElementById('home');
    homeId.addEventListener("click", () => (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
  }

  return loadContact;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ "./src/assets.js");


const home = (function() {  // Module for home HTML
  // Private
  function createHeader() {
    const header = `
      <header>
        <h1 id="title">The Pasta Society</h1>
        ${_assets__WEBPACK_IMPORTED_MODULE_0__["default"].getLogo()}
      </header>
      `;
    return header;
    }
  
  function createMainContent() {
    const mainContent = `
      <main>
        <div id="main-content">
          <ul id="product-list">
            ${_assets__WEBPACK_IMPORTED_MODULE_0__["default"].getPizza()}
            ${_assets__WEBPACK_IMPORTED_MODULE_0__["default"].getPasta()}
            ${_assets__WEBPACK_IMPORTED_MODULE_0__["default"].getSalad()}
            ${_assets__WEBPACK_IMPORTED_MODULE_0__["default"].getDessert()}
            ${_assets__WEBPACK_IMPORTED_MODULE_0__["default"].getDrink()}
          </ul>
        </div>
      </main>
      `;
    return mainContent;
  }
  
  function createFooter() {
    const footer = `
      <footer>
        <div id="slogan">Be part of the society: 
          <a href="#" id="contact">Contact</a>
        </div>
      </footer>
      `;
    return footer;
  }

  // Public 
  function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML= '';
    content.insertAdjacentHTML("afterbegin", createHeader());
    content.insertAdjacentHTML("beforeend", createFooter());
    content.insertAdjacentHTML("beforeend", createMainContent());
  }
  
  return loadHome;
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website */ "./src/website.js");



(0,_website__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/menus.js":
/*!**********************!*\
  !*** ./src/menus.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _imgs_bebidas_memelas_menu_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/bebidas-memelas-menu.jpg */ "./src/imgs/bebidas-memelas-menu.jpg");





const menu = (function() {
  // Private
  const createImgHtml = (img, type) =>
    `
    <div id="menu-content">
      <a href="#"><img src="${img}" alt="${type}-menu"></a>
      <div></div>
    </div>
    `;
  
  const createFooter = () =>
    `
    <footer>
      <div id="slogan">Be part of the society: 
        <a href="" id="home">Home</a>
      </div>
    </footer>
    `;
  
  const drinksMenu = createImgHtml(_imgs_bebidas_memelas_menu_jpg__WEBPACK_IMPORTED_MODULE_1__, 'drinks');
  
  // Public
  function loadFifthMenu() {
    const content = document.getElementById('content');
    content.innerHTML= '';
    content.insertAdjacentHTML("afterbegin", drinksMenu);
    content.insertAdjacentHTML("beforeend", createFooter());
    const homeId = document.getElementById('home');
    homeId.addEventListener("click", () => (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
  }

  return {
    loadFifthMenu
  }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menus */ "./src/menus.js");




const initializeWebsite = (function() {

  function init() {
    if (document.readyState !== 'loading') {(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();}

    const contactId = document.getElementById('contact');
    contactId.addEventListener("click", () => (0,_contact__WEBPACK_IMPORTED_MODULE_1__["default"])());
    const fifthProduct = document.querySelector("#product-list :nth-child(5)");
    fifthProduct.addEventListener("click", () => _menus__WEBPACK_IMPORTED_MODULE_2__["default"].loadFifthMenu());
  }

  return init;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);

/***/ }),

/***/ "./src/fonts/bauer-bodoni.otf":
/*!************************************!*\
  !*** ./src/fonts/bauer-bodoni.otf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e1848119f0e066d5687.otf";

/***/ }),

/***/ "./src/imgs/background.jpeg":
/*!**********************************!*\
  !*** ./src/imgs/background.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb89ab8b5f26bb2df771.jpeg";

/***/ }),

/***/ "./src/imgs/bebidas-memelas-menu.jpg":
/*!*******************************************!*\
  !*** ./src/imgs/bebidas-memelas-menu.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "587a3e1236acbe3cd89b.jpg";

/***/ }),

/***/ "./src/imgs/dessert.jpg":
/*!******************************!*\
  !*** ./src/imgs/dessert.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96aa8241a9d64d05fda1.jpg";

/***/ }),

/***/ "./src/imgs/drink.jpg":
/*!****************************!*\
  !*** ./src/imgs/drink.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1793ff3f81b39f4f5ff7.jpg";

/***/ }),

/***/ "./src/imgs/logo.png":
/*!***************************!*\
  !*** ./src/imgs/logo.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d69aea2c4e45eb633223.png";

/***/ }),

/***/ "./src/imgs/pasta.jpg":
/*!****************************!*\
  !*** ./src/imgs/pasta.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40fa364bb30333f05f4d.jpg";

/***/ }),

/***/ "./src/imgs/pizza.jpg":
/*!****************************!*\
  !*** ./src/imgs/pizza.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "125f02d5058464f99055.jpg";

/***/ }),

/***/ "./src/imgs/salad.jpg":
/*!****************************!*\
  !*** ./src/imgs/salad.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "246b67f5e05a3dc72d8f.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsd0RBQWU7QUFDN0IsY0FBYyx3REFBZTtBQUM3QixjQUFjLHdEQUFlO0FBQzdCLGNBQWMsMERBQWlCO0FBQy9CLGNBQWMsd0RBQWU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7OztBQ3RERTtBQUNxQjs7QUFFMUMsb0RBQWlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDSFM7O0FBRThCOzs7QUFHeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixJQUFJLFNBQVMsS0FBSztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywyREFBVTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGlEQUFJO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q087QUFDTTtBQUNMOztBQUUzQjs7QUFFQTtBQUNBLDRDQUE0QyxpREFBSTs7QUFFaEQ7QUFDQSw4Q0FBOEMsb0RBQU87QUFDckQ7QUFDQSxpREFBaUQsNERBQWtCO0FBQ25FOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvYXNzZXRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy93ZWJzaXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL2JhdWVyLWJvZG9uaS5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvYmFja2dyb3VuZC5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdlbmVyYWwgKi9cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdiYXVlci1ib2RvbmknO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4gIFxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ2JhdWVyLWJvZG9uaSc7XFxufVxcbiAgXFxuOnJvb3Qge1xcbiAgLS1wYXN0YS13aGl0ZTogd2hpdGU7XFxuICAtLXBhc3RhLWJsYWNrOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjYyNXJlbSArIDAuNHZ3KTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgb3ZlcmZsb3c6IG5oIDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgY29sb3I6IHZhcigtLXBhc3RhLXdoaXRlKTtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogdmFyKC0tcGFzdGEtd2hpdGUpO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBnYXA6IDIwcHg7XFxuICBoZWlnaHQ6IGNhbGMoMTB2aCArIDJ2dyk7XFxuICBmb250LXNpemU6IGNhbGMoMC41cmVtICsgM3Z3KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhc3RhLWJsYWNrKTtcXG59XFxuXFxuI3RpdGxlIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2xvZ28ge1xcbiAgd2lkdGg6IGNhbGMoMXJlbSArIDh2aCk7XFxuICBoZWlnaHQ6IGNhbGMoMXJlbSArIDh2aCk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAxJTtcXG59XFxuXFxuLyogTWFpbiBjb250ZW50ICovXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5tYWluIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbiNtYWluLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgcGFkZGluZy1ib3R0b206IDE1JTtcXG59XFxuXFxuYSA+IGltZyB7XFxuICB3aWR0aDogY2FsYygyNXZ3ICsgMTB2aCk7XFxuICBoZWlnaHQ6IGNhbGMoMjV2dyArIDEwdmgpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xcbiAgdWwge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG5cXG4gICNtYWluLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGNhbGMoNXZoICsgMXZ3KTtcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjVyZW0gKyAzdncpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFzdGEtYmxhY2spO1xcbn1cXG5cXG4jc2xvZ2FuIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLyogTWVudSAqL1xcbiNtZW51LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbWVudS1jb250ZW50ID4gYSA+IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTIwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG59XFxuXFxuLyogQ29udGFjdCAqL1xcbiNjb250YWN0LWNvbnRlbnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBnYXA6IDEwdmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGMoMXJlbSArIDF2dyk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNSUgMTAlO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLyogQmFja2dyb3VuZCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsWUFBWTtBQUNaO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLCtEQUF1RDtFQUN2RCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseURBQStDO0VBQy9DLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCx3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtJQUNwQiw2QkFBNkI7SUFDN0IsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZUFBZTtFQUNqQjtBQUNGOztBQUVBLFdBQVc7QUFDWDtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLFNBQVM7QUFDVDtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixnQ0FBZ0M7RUFDaEMsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBLGVBQWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR2VuZXJhbCAqL1xcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ2JhdWVyLWJvZG9uaSc7XFxuICBzcmM6IHVybCgnLi9mb250cy9iYXVlci1ib2Rvbmkub3RmJykgZm9ybWF0KCdvcGVudHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbiAgXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnYmF1ZXItYm9kb25pJztcXG59XFxuICBcXG46cm9vdCB7XFxuICAtLXBhc3RhLXdoaXRlOiB3aGl0ZTtcXG4gIC0tcGFzdGEtYmxhY2s6IGJsYWNrO1xcbiAgZm9udC1zaXplOiBjYWxjKDAuNjI1cmVtICsgMC40dncpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBvdmVyZmxvdzogbmggO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWdzL2JhY2tncm91bmQuanBlZycpO1xcbiAgY29sb3I6IHZhcigtLXBhc3RhLXdoaXRlKTtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogdmFyKC0tcGFzdGEtd2hpdGUpO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBnYXA6IDIwcHg7XFxuICBoZWlnaHQ6IGNhbGMoMTB2aCArIDJ2dyk7XFxuICBmb250LXNpemU6IGNhbGMoMC41cmVtICsgM3Z3KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhc3RhLWJsYWNrKTtcXG59XFxuXFxuI3RpdGxlIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2xvZ28ge1xcbiAgd2lkdGg6IGNhbGMoMXJlbSArIDh2aCk7XFxuICBoZWlnaHQ6IGNhbGMoMXJlbSArIDh2aCk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAxJTtcXG59XFxuXFxuLyogTWFpbiBjb250ZW50ICovXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5tYWluIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbiNtYWluLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgcGFkZGluZy1ib3R0b206IDE1JTtcXG59XFxuXFxuYSA+IGltZyB7XFxuICB3aWR0aDogY2FsYygyNXZ3ICsgMTB2aCk7XFxuICBoZWlnaHQ6IGNhbGMoMjV2dyArIDEwdmgpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xcbiAgdWwge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG5cXG4gICNtYWluLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGNhbGMoNXZoICsgMXZ3KTtcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjVyZW0gKyAzdncpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFzdGEtYmxhY2spO1xcbn1cXG5cXG4jc2xvZ2FuIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLyogTWVudSAqL1xcbiNtZW51LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbWVudS1jb250ZW50ID4gYSA+IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTIwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG59XFxuXFxuLyogQ29udGFjdCAqL1xcbiNjb250YWN0LWNvbnRlbnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBnYXA6IDEwdmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGMoMXJlbSArIDF2dyk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNSUgMTAlO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLyogQmFja2dyb3VuZCAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUGl6emEgZnJvbSAnLi9pbWdzL3BpenphLmpwZyc7XG5pbXBvcnQgUGFzdGEgZnJvbSAnLi9pbWdzL3Bhc3RhLmpwZyc7XG5pbXBvcnQgU2FsYWQgZnJvbSAnLi9pbWdzL3NhbGFkLmpwZyc7XG5pbXBvcnQgRGVzc2VydCBmcm9tICcuL2ltZ3MvZGVzc2VydC5qcGcnO1xuaW1wb3J0IERyaW5rIGZyb20gJy4vaW1ncy9kcmluay5qcGcnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi9pbWdzL2xvZ28ucG5nJztcblxuY29uc3QgaW1hZ2VzID0gKGZ1bmN0aW9uKCkge1xuICAvLyBQcml2YXRlXG4gIGNvbnN0IGNyZWF0ZUltZ0h0bWwgPSAoaW1nLCB0eXBlKSA9PlxuICAgIGBcbiAgICA8bGkgY2xhc3M9XCJwcm9kdWN0c1wiPlxuICAgICAgPGEgaHJlZj1cIiNcIj48aW1nIHNyYz1cIiR7aW1nfVwiIGFsdD1cIiR7dHlwZX0taW1hZ2VcIj48L2E+XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgIDwvbGk+XG4gICAgYDtcblxuICBjb25zdCBwaXp6YSA9IGNyZWF0ZUltZ0h0bWwoUGl6emEsICdwaXp6YScpO1xuICBjb25zdCBwYXN0YSA9IGNyZWF0ZUltZ0h0bWwoUGFzdGEsICdwYXN0YScpO1xuICBjb25zdCBzYWxhZCA9IGNyZWF0ZUltZ0h0bWwoU2FsYWQsICdzYWxhZCcpO1xuICBjb25zdCBkZXNzZXJ0ID0gY3JlYXRlSW1nSHRtbChEZXNzZXJ0LCAnZGVzc2VydCcpO1xuICBjb25zdCBkcmluayA9IGNyZWF0ZUltZ0h0bWwoRHJpbmssICdkcmluaycpO1xuXG4gIGNvbnN0IGxvZ28gPSBgPGltZyBpZD1cImxvZ29cIiBzcmM9XCIke0xvZ299XCIgYWx0PVwidGhlLXBhc3RhLXNvY2lldHktbG9nb1wiPmA7XG5cbiAgLy8gUHVibGljXG4gIGNvbnN0IGdldFBpenphID0gKCkgPT4gcGl6emE7XG4gIGNvbnN0IGdldFBhc3RhID0gKCkgPT4gcGFzdGE7XG4gIGNvbnN0IGdldFNhbGFkID0gKCkgPT4gc2FsYWQ7XG4gIGNvbnN0IGdldERlc3NlcnQgPSAoKSA9PiBkZXNzZXJ0O1xuICBjb25zdCBnZXREcmluayA9ICgpID0+IGRyaW5rO1xuICBjb25zdCBnZXRMb2dvID0gKCkgPT4gbG9nbztcblxuICByZXR1cm4ge1xuICAgIGdldFBpenphLFxuICAgIGdldFBhc3RhLFxuICAgIGdldFNhbGFkLFxuICAgIGdldERlc3NlcnQsXG4gICAgZ2V0RHJpbmssXG4gICAgZ2V0TG9nbyxcbiAgfSAgIFxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaW1hZ2VzOyIsImltcG9ydCBob21lIGZyb20gXCIuL2hvbWVcIjtcblxuY29uc3QgY29udGFjdCA9IChmdW5jdGlvbigpIHtcbiAgLy8gUHJpdmF0ZVxuICBmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBgXG4gICAgICA8ZGl2IGlkPVwiY29udGFjdC1jb250ZW50XCI+XG4gICAgICAgIDxkaXY+KzUyIDIyMiA4MDUgMjU1MjwvZGl2PlxuICAgICAgICA8ZGl2Pkluc3RhZ3JhbTogPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdGhlcGFzdGFzb2NpZXR5Xy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+QHRoZXBhc3Rhc29jaWV0eV88L2E+PC9kaXY+XG4gICAgICAgIDxkaXY+RmFjZWJvb2s6IDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vdGhlcGFzdGFzb2NpZXR5L1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5UaGUgUGFzdGEgU29jaWV0eTwvYT48L2Rpdj5cbiAgICAgICAgPGRpdj48YSBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3BsYWNlL1Bhc3RhK1NvY2lldHkvQDE5LjAyMDc0OTUsLTk4LjEyOTU5MjYsMTV6L2RhdGE9ITRtNiEzbTUhMXMweDg1Y2ZlYmViOTFlMjc0MDM6MHhmYTljZWJjM2JiNzFkMTYxIThtMiEzZDE5LjAyMDc0OTUhNGQtOTguMTI5NTkyNiExNnMlMkZnJTJGMTFzd3BqMmo3bVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5Mb2NhdGlvbjwvYT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gYFxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdiBpZD1cInNsb2dhblwiPkJlIHBhcnQgb2YgdGhlIHNvY2lldHk6IFxuICAgICAgICAgIDxhIGhyZWY9XCJcIiBpZD1cImhvbWVcIj5Ib21lPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgYDtcbiAgICByZXR1cm4gZm9vdGVyO1xuICB9XG4gIFxuICAvLyBQdWJsaWNcbiAgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUw9ICcnO1xuICAgIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBjcmVhdGVDb250YWN0KCkpO1xuICAgIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGNyZWF0ZUZvb3RlcigpKTtcbiAgICBjb25zdCBob21lSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuICAgIGhvbWVJZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaG9tZSgpKTtcbiAgfVxuXG4gIHJldHVybiBsb2FkQ29udGFjdDtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7IiwiaW1wb3J0IGltYWdlcyBmcm9tICcuL2Fzc2V0cyc7XG5cbmNvbnN0IGhvbWUgPSAoZnVuY3Rpb24oKSB7ICAvLyBNb2R1bGUgZm9yIGhvbWUgSFRNTFxuICAvLyBQcml2YXRlXG4gIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBgXG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8aDEgaWQ9XCJ0aXRsZVwiPlRoZSBQYXN0YSBTb2NpZXR5PC9oMT5cbiAgICAgICAgJHtpbWFnZXMuZ2V0TG9nbygpfVxuICAgICAgPC9oZWFkZXI+XG4gICAgICBgO1xuICAgIHJldHVybiBoZWFkZXI7XG4gICAgfVxuICBcbiAgZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRlbnQoKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBgXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBpZD1cIm1haW4tY29udGVudFwiPlxuICAgICAgICAgIDx1bCBpZD1cInByb2R1Y3QtbGlzdFwiPlxuICAgICAgICAgICAgJHtpbWFnZXMuZ2V0UGl6emEoKX1cbiAgICAgICAgICAgICR7aW1hZ2VzLmdldFBhc3RhKCl9XG4gICAgICAgICAgICAke2ltYWdlcy5nZXRTYWxhZCgpfVxuICAgICAgICAgICAgJHtpbWFnZXMuZ2V0RGVzc2VydCgpfVxuICAgICAgICAgICAgJHtpbWFnZXMuZ2V0RHJpbmsoKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIGA7XG4gICAgcmV0dXJuIG1haW5Db250ZW50O1xuICB9XG4gIFxuICBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gYFxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdiBpZD1cInNsb2dhblwiPkJlIHBhcnQgb2YgdGhlIHNvY2lldHk6IFxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgaWQ9XCJjb250YWN0XCI+Q29udGFjdDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIGA7XG4gICAgcmV0dXJuIGZvb3RlcjtcbiAgfVxuXG4gIC8vIFB1YmxpYyBcbiAgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUw9ICcnO1xuICAgIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBjcmVhdGVIZWFkZXIoKSk7XG4gICAgY29udGVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgY3JlYXRlRm9vdGVyKCkpO1xuICAgIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGNyZWF0ZU1haW5Db250ZW50KCkpO1xuICB9XG4gIFxuICByZXR1cm4gbG9hZEhvbWU7XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGhvbWU7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaW5pdGlhbGl6ZVdlYnNpdGUgZnJvbSAnLi93ZWJzaXRlJztcblxuaW5pdGlhbGl6ZVdlYnNpdGUoKTsiLCJpbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lXCI7XG5cbmltcG9ydCBEcmlua3NNZW51IGZyb20gJy4vaW1ncy9iZWJpZGFzLW1lbWVsYXMtbWVudS5qcGcnXG5cblxuY29uc3QgbWVudSA9IChmdW5jdGlvbigpIHtcbiAgLy8gUHJpdmF0ZVxuICBjb25zdCBjcmVhdGVJbWdIdG1sID0gKGltZywgdHlwZSkgPT5cbiAgICBgXG4gICAgPGRpdiBpZD1cIm1lbnUtY29udGVudFwiPlxuICAgICAgPGEgaHJlZj1cIiNcIj48aW1nIHNyYz1cIiR7aW1nfVwiIGFsdD1cIiR7dHlwZX0tbWVudVwiPjwvYT5cbiAgICAgIDxkaXY+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgXG4gIGNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+XG4gICAgYFxuICAgIDxmb290ZXI+XG4gICAgICA8ZGl2IGlkPVwic2xvZ2FuXCI+QmUgcGFydCBvZiB0aGUgc29jaWV0eTogXG4gICAgICAgIDxhIGhyZWY9XCJcIiBpZD1cImhvbWVcIj5Ib21lPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICAgYDtcbiAgXG4gIGNvbnN0IGRyaW5rc01lbnUgPSBjcmVhdGVJbWdIdG1sKERyaW5rc01lbnUsICdkcmlua3MnKTtcbiAgXG4gIC8vIFB1YmxpY1xuICBmdW5jdGlvbiBsb2FkRmlmdGhNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MPSAnJztcbiAgICBjb250ZW50Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgZHJpbmtzTWVudSk7XG4gICAgY29udGVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgY3JlYXRlRm9vdGVyKCkpO1xuICAgIGNvbnN0IGhvbWVJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG4gICAgaG9tZUlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBob21lKCkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsb2FkRmlmdGhNZW51XG4gIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7IiwiaW1wb3J0IGhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudXNcIjtcblxuY29uc3QgaW5pdGlhbGl6ZVdlYnNpdGUgPSAoZnVuY3Rpb24oKSB7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7aG9tZSgpO31cblxuICAgIGNvbnN0IGNvbnRhY3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG4gICAgY29udGFjdElkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjb250YWN0KCkpO1xuICAgIGNvbnN0IGZpZnRoUHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZHVjdC1saXN0IDpudGgtY2hpbGQoNSlcIik7XG4gICAgZmlmdGhQcm9kdWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBtZW51LmxvYWRGaWZ0aE1lbnUoKSk7XG4gIH1cblxuICByZXR1cm4gaW5pdDtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVXZWJzaXRlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==