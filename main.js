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
___CSS_LOADER_EXPORT___.push([module.id, "/* General */\nhtml {\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: 'bauer-bodoni';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('opentype');\n  font-weight: bold;\n  font-style: normal;\n}\n  \n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  margin: 0;\n  font-family: 'bauer-bodoni';\n}\n  \n:root {\n  --pasta-white: white;\n  --pasta-black: black;\n  font-size: calc(0.625rem + 0.4vw);\n}\n\n#content {\n  overflow: nh ;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  color: var(--pasta-white);\n}\n\na {\n  color: var(--pasta-white);\n}\n\n/* Header */\nheader {\n  position: relative;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  flex-wrap: nowrap;\n  gap: 20px;\n  height: calc(10vh + 2vw);\n  font-size: calc(0.5rem + 3vw);\n  background-color: var(--pasta-black);\n}\n\n#title {\n  align-self: center;\n}\n\n#logo {\n  width: calc(1rem + 8vh);\n  height: calc(1rem + 8vh);\n  border-radius: 50%;\n  margin-top: 1%;\n}\n\n/* Main content */\nul {\n  list-style-type: none;\n}\n\nmain {\n  margin-top: 50px;\n}\n\n#main-content {\n  display: flex;\n  flex-flow: column;\n  padding-bottom: 15%;\n}\n\n.products {\n  display: flex;\n  align-items: center;\n  border-radius: 10%;\n  background-color: rgb(0, 0, 0, 0.9);\n  margin: 5%;\n  font-size: calc(1rem + 2vw);\n  gap: 15%;\n}\n\na > img {\n  width: calc(25vw + 10vh);\n  height: calc(25vw + 10vh);\n  border-radius: 15%;\n  margin: 15px;\n  margin-left: 0;\n}\n\n@media screen and (min-width: 500px) {\n  ul {\n    display: inline-flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n  }\n\n  #main-content {\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n  }\n}\n\n/* Footer */\nfooter {\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  width: 100%;\n  height: calc(5vh + 1vw);\n  font-size: calc(0.5rem + 3vw);\n  background-color: var(--pasta-black);\n}\n\n#slogan {\n  align-self: center;\n}\n\n/* Menu */\n#menu-content {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n}\n\n#menu-content > a > img {\n  width: 100%;\n  height: 120%;\n  border-radius: 10%;\n}\n\n/* Contact */\n#contact-content {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  display: flex;\n  flex-flow: column;\n  gap: 10vh;\n  text-align: center;\n  font-size: calc(1rem + 1vw);\n  transform: translate(-50%, -50%);\n  background-color: rgb(0, 0, 0, 0.9);\n  color: white;\n  padding: 5% 10%;\n  width: 80%;\n}\n\n/* Background */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,YAAY;AACZ;EACE,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;EAC3B,+DAAuD;EACvD,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;;;EAGE,mBAAmB;EACnB,SAAS;EACT,2BAA2B;AAC7B;;AAEA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,iCAAiC;AACnC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yDAA+C;EAC/C,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,WAAW;AACX;EACE,kBAAkB;EAClB,MAAM;EACN,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,SAAS;EACT,wBAAwB;EACxB,6BAA6B;EAC7B,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,wBAAwB;EACxB,kBAAkB;EAClB,cAAc;AAChB;;AAEA,iBAAiB;AACjB;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,mCAAmC;EACnC,UAAU;EACV,2BAA2B;EAC3B,QAAQ;AACV;;AAEA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE;IACE,oBAAoB;IACpB,6BAA6B;IAC7B,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,6BAA6B;IAC7B,eAAe;EACjB;AACF;;AAEA,WAAW;AACX;EACE,eAAe;EACf,SAAS;EACT,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,WAAW;EACX,uBAAuB;EACvB,6BAA6B;EAC7B,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;AACpB;;AAEA,SAAS;AACT;EACE,aAAa;EACb,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA,YAAY;AACZ;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,kBAAkB;EAClB,2BAA2B;EAC3B,gCAAgC;EAChC,mCAAmC;EACnC,YAAY;EACZ,eAAe;EACf,UAAU;AACZ;;AAEA,eAAe","sourcesContent":["/* General */\nhtml {\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: 'bauer-bodoni';\n  src: url('./fonts/bauer-bodoni.otf') format('opentype');\n  font-weight: bold;\n  font-style: normal;\n}\n  \n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  margin: 0;\n  font-family: 'bauer-bodoni';\n}\n  \n:root {\n  --pasta-white: white;\n  --pasta-black: black;\n  font-size: calc(0.625rem + 0.4vw);\n}\n\n#content {\n  overflow: nh ;\n}\n\nbody {\n  background-image: url('./imgs/background.jpeg');\n  color: var(--pasta-white);\n}\n\na {\n  color: var(--pasta-white);\n}\n\n/* Header */\nheader {\n  position: relative;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  flex-wrap: nowrap;\n  gap: 20px;\n  height: calc(10vh + 2vw);\n  font-size: calc(0.5rem + 3vw);\n  background-color: var(--pasta-black);\n}\n\n#title {\n  align-self: center;\n}\n\n#logo {\n  width: calc(1rem + 8vh);\n  height: calc(1rem + 8vh);\n  border-radius: 50%;\n  margin-top: 1%;\n}\n\n/* Main content */\nul {\n  list-style-type: none;\n}\n\nmain {\n  margin-top: 50px;\n}\n\n#main-content {\n  display: flex;\n  flex-flow: column;\n  padding-bottom: 15%;\n}\n\n.products {\n  display: flex;\n  align-items: center;\n  border-radius: 10%;\n  background-color: rgb(0, 0, 0, 0.9);\n  margin: 5%;\n  font-size: calc(1rem + 2vw);\n  gap: 15%;\n}\n\na > img {\n  width: calc(25vw + 10vh);\n  height: calc(25vw + 10vh);\n  border-radius: 15%;\n  margin: 15px;\n  margin-left: 0;\n}\n\n@media screen and (min-width: 500px) {\n  ul {\n    display: inline-flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n  }\n\n  #main-content {\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n  }\n}\n\n/* Footer */\nfooter {\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  width: 100%;\n  height: calc(5vh + 1vw);\n  font-size: calc(0.5rem + 3vw);\n  background-color: var(--pasta-black);\n}\n\n#slogan {\n  align-self: center;\n}\n\n/* Menu */\n#menu-content {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n}\n\n#menu-content > a > img {\n  width: 100%;\n  height: 120%;\n  border-radius: 10%;\n}\n\n/* Contact */\n#contact-content {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  display: flex;\n  flex-flow: column;\n  gap: 10vh;\n  text-align: center;\n  font-size: calc(1rem + 1vw);\n  transform: translate(-50%, -50%);\n  background-color: rgb(0, 0, 0, 0.9);\n  color: white;\n  padding: 5% 10%;\n  width: 80%;\n}\n\n/* Background */"],"sourceRoot":""}]);
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
      <a href="#">${type}</a>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsNkhBQTJDO0FBQ3ZGLDRDQUE0Qyx5SEFBeUM7QUFDckYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSwrREFBK0QsMkJBQTJCLEdBQUcsZ0JBQWdCLGdDQUFnQyw0RUFBNEUsc0JBQXNCLHVCQUF1QixHQUFHLGdDQUFnQyx3QkFBd0IsY0FBYyxnQ0FBZ0MsR0FBRyxhQUFhLHlCQUF5Qix5QkFBeUIsc0NBQXNDLEdBQUcsY0FBYyxrQkFBa0IsR0FBRyxVQUFVLHNFQUFzRSw4QkFBOEIsR0FBRyxPQUFPLDhCQUE4QixHQUFHLDBCQUEwQix1QkFBdUIsV0FBVyxrQkFBa0IsNEJBQTRCLHNCQUFzQixjQUFjLDZCQUE2QixrQ0FBa0MseUNBQXlDLEdBQUcsWUFBWSx1QkFBdUIsR0FBRyxXQUFXLDRCQUE0Qiw2QkFBNkIsdUJBQXVCLG1CQUFtQixHQUFHLDRCQUE0QiwwQkFBMEIsR0FBRyxVQUFVLHFCQUFxQixHQUFHLG1CQUFtQixrQkFBa0Isc0JBQXNCLHdCQUF3QixHQUFHLGVBQWUsa0JBQWtCLHdCQUF3Qix1QkFBdUIsd0NBQXdDLGVBQWUsZ0NBQWdDLGFBQWEsR0FBRyxhQUFhLDZCQUE2Qiw4QkFBOEIsdUJBQXVCLGlCQUFpQixtQkFBbUIsR0FBRywwQ0FBMEMsUUFBUSwyQkFBMkIsb0NBQW9DLHNCQUFzQixLQUFLLHFCQUFxQixvQkFBb0Isb0NBQW9DLHNCQUFzQixLQUFLLEdBQUcsMEJBQTBCLG9CQUFvQixjQUFjLGtCQUFrQiw0QkFBNEIsMEJBQTBCLGdCQUFnQiw0QkFBNEIsa0NBQWtDLHlDQUF5QyxHQUFHLGFBQWEsdUJBQXVCLEdBQUcsK0JBQStCLGtCQUFrQiwwQkFBMEIsNEJBQTRCLEdBQUcsNkJBQTZCLGdCQUFnQixpQkFBaUIsdUJBQXVCLEdBQUcscUNBQXFDLG9CQUFvQixhQUFhLGNBQWMsa0JBQWtCLHNCQUFzQixjQUFjLHVCQUF1QixnQ0FBZ0MscUNBQXFDLHdDQUF3QyxpQkFBaUIsb0JBQW9CLGVBQWUsR0FBRywyQkFBMkIscUZBQXFGLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLG1EQUFtRCwyQkFBMkIsR0FBRyxnQkFBZ0IsZ0NBQWdDLDREQUE0RCxzQkFBc0IsdUJBQXVCLEdBQUcsZ0NBQWdDLHdCQUF3QixjQUFjLGdDQUFnQyxHQUFHLGFBQWEseUJBQXlCLHlCQUF5QixzQ0FBc0MsR0FBRyxjQUFjLGtCQUFrQixHQUFHLFVBQVUsb0RBQW9ELDhCQUE4QixHQUFHLE9BQU8sOEJBQThCLEdBQUcsMEJBQTBCLHVCQUF1QixXQUFXLGtCQUFrQiw0QkFBNEIsc0JBQXNCLGNBQWMsNkJBQTZCLGtDQUFrQyx5Q0FBeUMsR0FBRyxZQUFZLHVCQUF1QixHQUFHLFdBQVcsNEJBQTRCLDZCQUE2Qix1QkFBdUIsbUJBQW1CLEdBQUcsNEJBQTRCLDBCQUEwQixHQUFHLFVBQVUscUJBQXFCLEdBQUcsbUJBQW1CLGtCQUFrQixzQkFBc0Isd0JBQXdCLEdBQUcsZUFBZSxrQkFBa0Isd0JBQXdCLHVCQUF1Qix3Q0FBd0MsZUFBZSxnQ0FBZ0MsYUFBYSxHQUFHLGFBQWEsNkJBQTZCLDhCQUE4Qix1QkFBdUIsaUJBQWlCLG1CQUFtQixHQUFHLDBDQUEwQyxRQUFRLDJCQUEyQixvQ0FBb0Msc0JBQXNCLEtBQUsscUJBQXFCLG9CQUFvQixvQ0FBb0Msc0JBQXNCLEtBQUssR0FBRywwQkFBMEIsb0JBQW9CLGNBQWMsa0JBQWtCLDRCQUE0QiwwQkFBMEIsZ0JBQWdCLDRCQUE0QixrQ0FBa0MseUNBQXlDLEdBQUcsYUFBYSx1QkFBdUIsR0FBRywrQkFBK0Isa0JBQWtCLDBCQUEwQiw0QkFBNEIsR0FBRyw2QkFBNkIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsR0FBRyxxQ0FBcUMsb0JBQW9CLGFBQWEsY0FBYyxrQkFBa0Isc0JBQXNCLGNBQWMsdUJBQXVCLGdDQUFnQyxxQ0FBcUMsd0NBQXdDLGlCQUFpQixvQkFBb0IsZUFBZSxHQUFHLHVDQUF1QztBQUNqOU07QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNaMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnFDO0FBQ0E7QUFDQTtBQUNJO0FBQ0o7QUFDRjs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixJQUFJLFNBQVMsS0FBSztBQUNoRCxvQkFBb0IsS0FBSztBQUN6QjtBQUNBOztBQUVBLDhCQUE4Qiw0Q0FBSztBQUNuQyw4QkFBOEIsNENBQUs7QUFDbkMsOEJBQThCLDRDQUFLO0FBQ25DLGdDQUFnQyw4Q0FBTztBQUN2Qyw4QkFBOEIsNENBQUs7O0FBRW5DLHNDQUFzQywyQ0FBSSxDQUFDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7QUMzQ0s7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxpREFBSTtBQUMvQzs7QUFFQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7O0FDeENROztBQUU5Qiw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsdURBQWM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHdEQUFlO0FBQzdCLGNBQWMsd0RBQWU7QUFDN0IsY0FBYyx3REFBZTtBQUM3QixjQUFjLDBEQUFpQjtBQUMvQixjQUFjLHdEQUFlO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7QUN0REU7QUFDcUI7O0FBRTFDLG9EQUFpQjs7Ozs7Ozs7Ozs7Ozs7OztBQ0hTOztBQUU4Qjs7O0FBR3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsSUFBSSxTQUFTLEtBQUs7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDJEQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsaURBQUk7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDTztBQUNNO0FBQ0w7O0FBRTNCOztBQUVBO0FBQ0EsNENBQTRDLGlEQUFJOztBQUVoRDtBQUNBLDhDQUE4QyxvREFBTzs7QUFFckQ7QUFDQTtBQUNBLGlEQUFpRCw0REFBa0I7QUFDbkU7O0FBRUE7QUFDQSxDQUFDOztBQUVELGlFQUFlLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9hc3NldHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3dlYnNpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvYmF1ZXItYm9kb25pLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1ncy9iYWNrZ3JvdW5kLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogR2VuZXJhbCAqL1xcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ2JhdWVyLWJvZG9uaSc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCdvcGVudHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbiAgXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnYmF1ZXItYm9kb25pJztcXG59XFxuICBcXG46cm9vdCB7XFxuICAtLXBhc3RhLXdoaXRlOiB3aGl0ZTtcXG4gIC0tcGFzdGEtYmxhY2s6IGJsYWNrO1xcbiAgZm9udC1zaXplOiBjYWxjKDAuNjI1cmVtICsgMC40dncpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBvdmVyZmxvdzogbmggO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBjb2xvcjogdmFyKC0tcGFzdGEtd2hpdGUpO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB2YXIoLS1wYXN0YS13aGl0ZSk7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGdhcDogMjBweDtcXG4gIGhlaWdodDogY2FsYygxMHZoICsgMnZ3KTtcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjVyZW0gKyAzdncpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFzdGEtYmxhY2spO1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jbG9nbyB7XFxuICB3aWR0aDogY2FsYygxcmVtICsgOHZoKTtcXG4gIGhlaWdodDogY2FsYygxcmVtICsgOHZoKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbi10b3A6IDElO1xcbn1cXG5cXG4vKiBNYWluIGNvbnRlbnQgKi9cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuI21haW4tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBwYWRkaW5nLWJvdHRvbTogMTUlO1xcbn1cXG5cXG4ucHJvZHVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC45KTtcXG4gIG1hcmdpbjogNSU7XFxuICBmb250LXNpemU6IGNhbGMoMXJlbSArIDJ2dyk7XFxuICBnYXA6IDE1JTtcXG59XFxuXFxuYSA+IGltZyB7XFxuICB3aWR0aDogY2FsYygyNXZ3ICsgMTB2aCk7XFxuICBoZWlnaHQ6IGNhbGMoMjV2dyArIDEwdmgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xcbiAgbWFyZ2luOiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XFxuICB1bCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcblxcbiAgI21haW4tY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxufVxcblxcbi8qIEZvb3RlciAqL1xcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogY2FsYyg1dmggKyAxdncpO1xcbiAgZm9udC1zaXplOiBjYWxjKDAuNXJlbSArIDN2dyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXN0YS1ibGFjayk7XFxufVxcblxcbiNzbG9nYW4ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4vKiBNZW51ICovXFxuI21lbnUtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNtZW51LWNvbnRlbnQgPiBhID4gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMjAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xcbn1cXG5cXG4vKiBDb250YWN0ICovXFxuI2NvbnRhY3QtY29udGVudCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMTB2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMXZ3KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuOSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA1JSAxMCU7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4vKiBCYWNrZ3JvdW5kICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxZQUFZO0FBQ1o7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsK0RBQXVEO0VBQ3ZELGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5REFBK0M7RUFDL0MseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLFdBQVc7QUFDWDtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsU0FBUztFQUNULHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGVBQWU7RUFDakI7QUFDRjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBLFlBQVk7QUFDWjtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztFQUNULGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQSxlQUFlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdlbmVyYWwgKi9cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdiYXVlci1ib2RvbmknO1xcbiAgc3JjOiB1cmwoJy4vZm9udHMvYmF1ZXItYm9kb25pLm90ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4gIFxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ2JhdWVyLWJvZG9uaSc7XFxufVxcbiAgXFxuOnJvb3Qge1xcbiAgLS1wYXN0YS13aGl0ZTogd2hpdGU7XFxuICAtLXBhc3RhLWJsYWNrOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjYyNXJlbSArIDAuNHZ3KTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgb3ZlcmZsb3c6IG5oIDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1ncy9iYWNrZ3JvdW5kLmpwZWcnKTtcXG4gIGNvbG9yOiB2YXIoLS1wYXN0YS13aGl0ZSk7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHZhcigtLXBhc3RhLXdoaXRlKTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgZ2FwOiAyMHB4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwdmggKyAydncpO1xcbiAgZm9udC1zaXplOiBjYWxjKDAuNXJlbSArIDN2dyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXN0YS1ibGFjayk7XFxufVxcblxcbiN0aXRsZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNsb2dvIHtcXG4gIHdpZHRoOiBjYWxjKDFyZW0gKyA4dmgpO1xcbiAgaGVpZ2h0OiBjYWxjKDFyZW0gKyA4dmgpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luLXRvcDogMSU7XFxufVxcblxcbi8qIE1haW4gY29udGVudCAqL1xcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxubWFpbiB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4jbWFpbi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIHBhZGRpbmctYm90dG9tOiAxNSU7XFxufVxcblxcbi5wcm9kdWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjkpO1xcbiAgbWFyZ2luOiA1JTtcXG4gIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMnZ3KTtcXG4gIGdhcDogMTUlO1xcbn1cXG5cXG5hID4gaW1nIHtcXG4gIHdpZHRoOiBjYWxjKDI1dncgKyAxMHZoKTtcXG4gIGhlaWdodDogY2FsYygyNXZ3ICsgMTB2aCk7XFxuICBib3JkZXItcmFkaXVzOiAxNSU7XFxuICBtYXJnaW46IDE1cHg7XFxuICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcXG4gIHVsIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxuXFxuICAjbWFpbi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG59XFxuXFxuLyogRm9vdGVyICovXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBjYWxjKDV2aCArIDF2dyk7XFxuICBmb250LXNpemU6IGNhbGMoMC41cmVtICsgM3Z3KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhc3RhLWJsYWNrKTtcXG59XFxuXFxuI3Nsb2dhbiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi8qIE1lbnUgKi9cXG4jbWVudS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI21lbnUtY29udGVudCA+IGEgPiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEyMCU7XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxufVxcblxcbi8qIENvbnRhY3QgKi9cXG4jY29udGFjdC1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAxMHZoO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKDFyZW0gKyAxdncpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC45KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDUlIDEwJTtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi8qIEJhY2tncm91bmQgKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFBpenphIGZyb20gJy4vaW1ncy9waXp6YS5qcGcnO1xuaW1wb3J0IFBhc3RhIGZyb20gJy4vaW1ncy9wYXN0YS5qcGcnO1xuaW1wb3J0IFNhbGFkIGZyb20gJy4vaW1ncy9zYWxhZC5qcGcnO1xuaW1wb3J0IERlc3NlcnQgZnJvbSAnLi9pbWdzL2Rlc3NlcnQuanBnJztcbmltcG9ydCBEcmluayBmcm9tICcuL2ltZ3MvZHJpbmsuanBnJztcbmltcG9ydCBMb2dvIGZyb20gJy4vaW1ncy9sb2dvLnBuZyc7XG5cbmNvbnN0IGltYWdlcyA9IChmdW5jdGlvbigpIHtcbiAgLy8gUHJpdmF0ZVxuICBjb25zdCBjcmVhdGVJbWdIdG1sID0gKGltZywgdHlwZSkgPT5cbiAgICBgXG4gICAgPGxpIGNsYXNzPVwicHJvZHVjdHNcIj5cbiAgICAgIDxhIGhyZWY9XCIjXCI+PGltZyBzcmM9XCIke2ltZ31cIiBhbHQ9XCIke3R5cGV9LWltYWdlXCI+PC9hPlxuICAgICAgPGEgaHJlZj1cIiNcIj4ke3R5cGV9PC9hPlxuICAgIDwvbGk+XG4gICAgYDtcblxuICBjb25zdCBwaXp6YSA9IGNyZWF0ZUltZ0h0bWwoUGl6emEsICdwaXp6YScpO1xuICBjb25zdCBwYXN0YSA9IGNyZWF0ZUltZ0h0bWwoUGFzdGEsICdwYXN0YScpO1xuICBjb25zdCBzYWxhZCA9IGNyZWF0ZUltZ0h0bWwoU2FsYWQsICdzYWxhZCcpO1xuICBjb25zdCBkZXNzZXJ0ID0gY3JlYXRlSW1nSHRtbChEZXNzZXJ0LCAnZGVzc2VydCcpO1xuICBjb25zdCBkcmluayA9IGNyZWF0ZUltZ0h0bWwoRHJpbmssICdkcmluaycpO1xuXG4gIGNvbnN0IGxvZ28gPSBgPGltZyBpZD1cImxvZ29cIiBzcmM9XCIke0xvZ299XCIgYWx0PVwidGhlLXBhc3RhLXNvY2lldHktbG9nb1wiPmA7XG5cbiAgLy8gUHVibGljXG4gIGNvbnN0IGdldFBpenphID0gKCkgPT4gcGl6emE7XG4gIGNvbnN0IGdldFBhc3RhID0gKCkgPT4gcGFzdGE7XG4gIGNvbnN0IGdldFNhbGFkID0gKCkgPT4gc2FsYWQ7XG4gIGNvbnN0IGdldERlc3NlcnQgPSAoKSA9PiBkZXNzZXJ0O1xuICBjb25zdCBnZXREcmluayA9ICgpID0+IGRyaW5rO1xuICBjb25zdCBnZXRMb2dvID0gKCkgPT4gbG9nbztcblxuICByZXR1cm4ge1xuICAgIGdldFBpenphLFxuICAgIGdldFBhc3RhLFxuICAgIGdldFNhbGFkLFxuICAgIGdldERlc3NlcnQsXG4gICAgZ2V0RHJpbmssXG4gICAgZ2V0TG9nbyxcbiAgfSAgIFxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaW1hZ2VzOyIsImltcG9ydCBob21lIGZyb20gXCIuL2hvbWVcIjtcblxuY29uc3QgY29udGFjdCA9IChmdW5jdGlvbigpIHtcbiAgLy8gUHJpdmF0ZVxuICBmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBgXG4gICAgICA8ZGl2IGlkPVwiY29udGFjdC1jb250ZW50XCI+XG4gICAgICAgIDxkaXY+KzUyIDIyMiA4MDUgMjU1MjwvZGl2PlxuICAgICAgICA8ZGl2Pkluc3RhZ3JhbTogPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdGhlcGFzdGFzb2NpZXR5Xy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+QHRoZXBhc3Rhc29jaWV0eV88L2E+PC9kaXY+XG4gICAgICAgIDxkaXY+RmFjZWJvb2s6IDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vdGhlcGFzdGFzb2NpZXR5L1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5UaGUgUGFzdGEgU29jaWV0eTwvYT48L2Rpdj5cbiAgICAgICAgPGRpdj48YSBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3BsYWNlL1Bhc3RhK1NvY2lldHkvQDE5LjAyMDc0OTUsLTk4LjEyOTU5MjYsMTV6L2RhdGE9ITRtNiEzbTUhMXMweDg1Y2ZlYmViOTFlMjc0MDM6MHhmYTljZWJjM2JiNzFkMTYxIThtMiEzZDE5LjAyMDc0OTUhNGQtOTguMTI5NTkyNiExNnMlMkZnJTJGMTFzd3BqMmo3bVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5Mb2NhdGlvbjwvYT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gYFxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdiBpZD1cInNsb2dhblwiPkJlIHBhcnQgb2YgdGhlIHNvY2lldHk6IFxuICAgICAgICAgIDxhIGhyZWY9XCJcIiBpZD1cImhvbWVcIj5Ib21lPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgYDtcbiAgICByZXR1cm4gZm9vdGVyO1xuICB9XG4gIFxuICAvLyBQdWJsaWNcbiAgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUw9ICcnO1xuICAgIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBjcmVhdGVDb250YWN0KCkpO1xuICAgIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGNyZWF0ZUZvb3RlcigpKTtcbiAgICBjb25zdCBob21lSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuICAgIGhvbWVJZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaG9tZSgpKTtcbiAgfVxuXG4gIHJldHVybiBsb2FkQ29udGFjdDtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7IiwiaW1wb3J0IGltYWdlcyBmcm9tICcuL2Fzc2V0cyc7XG5cbmNvbnN0IGhvbWUgPSAoZnVuY3Rpb24oKSB7ICAvLyBNb2R1bGUgZm9yIGhvbWUgSFRNTFxuICAvLyBQcml2YXRlXG4gIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBgXG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8aDEgaWQ9XCJ0aXRsZVwiPlRoZSBQYXN0YSBTb2NpZXR5PC9oMT5cbiAgICAgICAgJHtpbWFnZXMuZ2V0TG9nbygpfVxuICAgICAgPC9oZWFkZXI+XG4gICAgICBgO1xuICAgIHJldHVybiBoZWFkZXI7XG4gICAgfVxuICBcbiAgZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRlbnQoKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBgXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBpZD1cIm1haW4tY29udGVudFwiPlxuICAgICAgICAgIDx1bCBpZD1cInByb2R1Y3QtbGlzdFwiPlxuICAgICAgICAgICAgJHtpbWFnZXMuZ2V0UGl6emEoKX1cbiAgICAgICAgICAgICR7aW1hZ2VzLmdldFBhc3RhKCl9XG4gICAgICAgICAgICAke2ltYWdlcy5nZXRTYWxhZCgpfVxuICAgICAgICAgICAgJHtpbWFnZXMuZ2V0RGVzc2VydCgpfVxuICAgICAgICAgICAgJHtpbWFnZXMuZ2V0RHJpbmsoKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIGA7XG4gICAgcmV0dXJuIG1haW5Db250ZW50O1xuICB9XG4gIFxuICBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gYFxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdiBpZD1cInNsb2dhblwiPkJlIHBhcnQgb2YgdGhlIHNvY2lldHk6IFxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgaWQ9XCJjb250YWN0XCI+Q29udGFjdDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIGA7XG4gICAgcmV0dXJuIGZvb3RlcjtcbiAgfVxuXG4gIC8vIFB1YmxpYyBcbiAgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUw9ICcnO1xuICAgIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBjcmVhdGVIZWFkZXIoKSk7XG4gICAgY29udGVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgY3JlYXRlRm9vdGVyKCkpO1xuICAgIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGNyZWF0ZU1haW5Db250ZW50KCkpO1xuICB9XG4gIFxuICByZXR1cm4gbG9hZEhvbWU7XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGhvbWU7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaW5pdGlhbGl6ZVdlYnNpdGUgZnJvbSAnLi93ZWJzaXRlJztcblxuaW5pdGlhbGl6ZVdlYnNpdGUoKTsiLCJpbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lXCI7XG5cbmltcG9ydCBEcmlua3NNZW51IGZyb20gJy4vaW1ncy9iZWJpZGFzLW1lbWVsYXMtbWVudS5qcGcnXG5cblxuY29uc3QgbWVudSA9IChmdW5jdGlvbigpIHtcbiAgLy8gUHJpdmF0ZVxuICBjb25zdCBjcmVhdGVJbWdIdG1sID0gKGltZywgdHlwZSkgPT5cbiAgICBgXG4gICAgPGRpdiBpZD1cIm1lbnUtY29udGVudFwiPlxuICAgICAgPGEgaHJlZj1cIiNcIj48aW1nIHNyYz1cIiR7aW1nfVwiIGFsdD1cIiR7dHlwZX0tbWVudVwiPjwvYT5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICBcbiAgY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT5cbiAgICBgXG4gICAgPGZvb3Rlcj5cbiAgICAgIDxkaXYgaWQ9XCJzbG9nYW5cIj5CZSBwYXJ0IG9mIHRoZSBzb2NpZXR5OiBcbiAgICAgICAgPGEgaHJlZj1cIlwiIGlkPVwiaG9tZVwiPkhvbWU8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgICBgO1xuICBcbiAgY29uc3QgZHJpbmtzTWVudSA9IGNyZWF0ZUltZ0h0bWwoRHJpbmtzTWVudSwgJ2RyaW5rcycpO1xuICBcbiAgLy8gUHVibGljXG4gIGZ1bmN0aW9uIGxvYWRGaWZ0aE1lbnUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUw9ICcnO1xuICAgIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBkcmlua3NNZW51KTtcbiAgICBjb250ZW50Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBjcmVhdGVGb290ZXIoKSk7XG4gICAgY29uc3QgaG9tZUlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbiAgICBob21lSWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGhvbWUoKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxvYWRGaWZ0aE1lbnVcbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudTsiLCJpbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi9tZW51c1wiO1xuXG5jb25zdCBpbml0aWFsaXplV2Vic2l0ZSA9IChmdW5jdGlvbigpIHtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtob21lKCk7fVxuXG4gICAgY29uc3QgY29udGFjdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcbiAgICBjb250YWN0SWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNvbnRhY3QoKSk7XG5cbiAgICBcbiAgICBjb25zdCBmaWZ0aFByb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2R1Y3QtbGlzdCA6bnRoLWNoaWxkKDUpXCIpO1xuICAgIGZpZnRoUHJvZHVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbWVudS5sb2FkRmlmdGhNZW51KCkpO1xuICB9XG5cbiAgcmV0dXJuIGluaXQ7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplV2Vic2l0ZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=