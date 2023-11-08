/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --navbar-height: 4rem;
}
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;    
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
    overflow: hidden;
}
header {
    background-color: orange;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--navbar-height);
}
header > h1 {
    text-align: center;
    margin-left: 2rem;
    padding-left: 2rem;
}
nav > ul {
    list-style-type: none;
    display: flex;
    margin-right: 1rem;
}
nav > ul > li {
    margin-inline: 2rem;
}
nav > ul > li > a {
    color: red;
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
    padding-bottom: 0.2rem;
}
nav > ul > li > a:hover {
    border-bottom: 2px solid red;
}
.active {
    border-bottom: 2px solid red;
}
main {
    background-color: gold;
    display: flex;
    width: 100vw;
    height: calc(100vh - var(--navbar-height));
}
#landing-content {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
}
#landing-content p {
    width: clamp(45ch, 70%, 70ch);
    margin-bottom: 3rem;
    font-size: 1rem;
    letter-spacing: 1px;
}
#landing-content button {
    width: 7rem;
    height: 3rem;
    font-size: 1rem;
    border-radius: 0.4rem;
    border: none;
    box-shadow: 0rem 2px 0px 0px rgb(0, 0, 0);
    margin-right: 1rem;
    color: white;
    font-weight: bold;
    letter-spacing: 0.1rem;
    cursor: pointer;
}
#landing-content button:first-of-type {
    background-color: rgba(255, 166, 0);
}
#landing-content button:last-of-type {
    background-color: salmon;
}
#landing-logo {
    display: flex;
    justify-content: center;
    align-items: center;
}
#landing-logo img {
    height: calc((100vh - var(--navbar-height)) - 35%);
    width: auto;
}

/* Menu */
#menu-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    overflow: auto;
}
#menu-item {
    margin-block: 2rem;
    text-align: center;
    background-color: white;
    height: 60vh;
    width: clamp(200px, 550px, 800px);
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: repeat(4, 1fr);
}
#menu-item h2 {
    margin-block: 0.5rem;
}
#menu-item figure img {
    width: 450px;
    height: 300px;
}
#menu-item figcaption {
    text-align: center;
    padding-inline: 4rem;
}
#menu-item ul {
    display: flex;
    list-style-type: none;
    justify-content: space-evenly;
    margin-block: 1rem;
}
#menu-item ul li:nth-child(2) {
    border-inline: 1px solid black;
    padding-inline: 4rem;
}

/* Contact */
#contact-content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
#contact-content img {
    width: 450px;
    height: auto;
}
#contact-content form fieldset {
    border: none;
    border-top: 2px solid black;
}
#contact-content form input,
#contact-content form select {
    width: 100%;
    padding: 0.5rem;
}
#contact-content form label,
#contact-content form textarea{
    display: block;
}
#contact-content form fieldset{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 0.5rem 2rem;
    margin-block: 1rem;
}
#contact-content form textarea {
    margin-inline: 2rem;
    resize: vertical;
    padding: 0.5rem;
}
#contact-content form button {
    height: 3rem;
    margin: 2rem;
    width: 12rem;
    font-size: 1rem;
    letter-spacing: 2px;
    color: white;
    background: linear-gradient(to right, orange 55%, gold , yellow);
    border: none;
    border-radius: 1rem;
    box-shadow: 0rem 2px 0px 0px rgb(0, 0, 0);
}
#submit-btn {
    display: flex;
    justify-content: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;AACzB;AACA;IACI,8BAA8B;IAC9B,2BAA2B;IAC3B,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;AACA;IACI,gBAAgB;AACpB;AACA;IACI,wBAAwB;IACxB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,4BAA4B;AAChC;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,qBAAqB;IACrB,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,UAAU;IACV,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,sBAAsB;AAC1B;AACA;IACI,4BAA4B;AAChC;AACA;IACI,4BAA4B;AAChC;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,0CAA0C;AAC9C;AACA;IACI,UAAU;IACV,aAAa;IACb,eAAe;IACf,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,qBAAqB;AACzB;AACA;IACI,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,qBAAqB;IACrB,YAAY;IACZ,yCAAyC;IACzC,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,sBAAsB;IACtB,eAAe;AACnB;AACA;IACI,mCAAmC;AACvC;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,kDAAkD;IAClD,WAAW;AACf;;AAEA,SAAS;AACT;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;IACjB,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,iCAAiC;IACjC,aAAa;IACb,mBAAmB;IACnB,kCAAkC;AACtC;AACA;IACI,oBAAoB;AACxB;AACA;IACI,YAAY;IACZ,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,qBAAqB;IACrB,6BAA6B;IAC7B,kBAAkB;AACtB;AACA;IACI,8BAA8B;IAC9B,oBAAoB;AACxB;;AAEA,YAAY;AACZ;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,2BAA2B;AAC/B;AACA;;IAEI,WAAW;IACX,eAAe;AACnB;AACA;;IAEI,cAAc;AAClB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,oBAAoB;IACpB,kBAAkB;AACtB;AACA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,gEAAgE;IAChE,YAAY;IACZ,mBAAmB;IACnB,yCAAyC;AAC7C;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B","sourcesContent":[":root {\r\n    --navbar-height: 4rem;\r\n}\r\n* {\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;    \r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nbody {\r\n    overflow: hidden;\r\n}\r\nheader {\r\n    background-color: orange;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: var(--navbar-height);\r\n}\r\nheader > h1 {\r\n    text-align: center;\r\n    margin-left: 2rem;\r\n    padding-left: 2rem;\r\n}\r\nnav > ul {\r\n    list-style-type: none;\r\n    display: flex;\r\n    margin-right: 1rem;\r\n}\r\nnav > ul > li {\r\n    margin-inline: 2rem;\r\n}\r\nnav > ul > li > a {\r\n    color: red;\r\n    font-weight: bold;\r\n    font-size: 1.2rem;\r\n    cursor: pointer;\r\n    padding-bottom: 0.2rem;\r\n}\r\nnav > ul > li > a:hover {\r\n    border-bottom: 2px solid red;\r\n}\r\n.active {\r\n    border-bottom: 2px solid red;\r\n}\r\nmain {\r\n    background-color: gold;\r\n    display: flex;\r\n    width: 100vw;\r\n    height: calc(100vh - var(--navbar-height));\r\n}\r\n#landing-content {\r\n    width: 50%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    align-content: center;\r\n}\r\n#landing-content p {\r\n    width: clamp(45ch, 70%, 70ch);\r\n    margin-bottom: 3rem;\r\n    font-size: 1rem;\r\n    letter-spacing: 1px;\r\n}\r\n#landing-content button {\r\n    width: 7rem;\r\n    height: 3rem;\r\n    font-size: 1rem;\r\n    border-radius: 0.4rem;\r\n    border: none;\r\n    box-shadow: 0rem 2px 0px 0px rgb(0, 0, 0);\r\n    margin-right: 1rem;\r\n    color: white;\r\n    font-weight: bold;\r\n    letter-spacing: 0.1rem;\r\n    cursor: pointer;\r\n}\r\n#landing-content button:first-of-type {\r\n    background-color: rgba(255, 166, 0);\r\n}\r\n#landing-content button:last-of-type {\r\n    background-color: salmon;\r\n}\r\n#landing-logo {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n#landing-logo img {\r\n    height: calc((100vh - var(--navbar-height)) - 35%);\r\n    width: auto;\r\n}\r\n\r\n/* Menu */\r\n#menu-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    flex-wrap: nowrap;\r\n    overflow: auto;\r\n}\r\n#menu-item {\r\n    margin-block: 2rem;\r\n    text-align: center;\r\n    background-color: white;\r\n    height: 60vh;\r\n    width: clamp(200px, 550px, 800px);\r\n    display: grid;\r\n    grid-auto-flow: row;\r\n    grid-template-rows: repeat(4, 1fr);\r\n}\r\n#menu-item h2 {\r\n    margin-block: 0.5rem;\r\n}\r\n#menu-item figure img {\r\n    width: 450px;\r\n    height: 300px;\r\n}\r\n#menu-item figcaption {\r\n    text-align: center;\r\n    padding-inline: 4rem;\r\n}\r\n#menu-item ul {\r\n    display: flex;\r\n    list-style-type: none;\r\n    justify-content: space-evenly;\r\n    margin-block: 1rem;\r\n}\r\n#menu-item ul li:nth-child(2) {\r\n    border-inline: 1px solid black;\r\n    padding-inline: 4rem;\r\n}\r\n\r\n/* Contact */\r\n#contact-content {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n#contact-content img {\r\n    width: 450px;\r\n    height: auto;\r\n}\r\n#contact-content form fieldset {\r\n    border: none;\r\n    border-top: 2px solid black;\r\n}\r\n#contact-content form input,\r\n#contact-content form select {\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n}\r\n#contact-content form label,\r\n#contact-content form textarea{\r\n    display: block;\r\n}\r\n#contact-content form fieldset{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 1rem;\r\n    padding: 0.5rem 2rem;\r\n    margin-block: 1rem;\r\n}\r\n#contact-content form textarea {\r\n    margin-inline: 2rem;\r\n    resize: vertical;\r\n    padding: 0.5rem;\r\n}\r\n#contact-content form button {\r\n    height: 3rem;\r\n    margin: 2rem;\r\n    width: 12rem;\r\n    font-size: 1rem;\r\n    letter-spacing: 2px;\r\n    color: white;\r\n    background: linear-gradient(to right, orange 55%, gold , yellow);\r\n    border: none;\r\n    border-radius: 1rem;\r\n    box-shadow: 0rem 2px 0px 0px rgb(0, 0, 0);\r\n}\r\n#submit-btn {\r\n    display: flex;\r\n    justify-content: center;\r\n}"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/script/contact.js":
/*!*******************************!*\
  !*** ./src/script/contact.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
function Contact() {
    const main = document.createElement('main');
    main.id = 'contact-content';

    const img = document.createElement('img');
    img.src = "/src/assets/img/contact-img.jpg";
    img.alt = "Food Delivery services image: A box with the words contactless delivery written on it.";
    main.appendChild(img);

    const form = document.createElement('form');
    const fieldset1 = document.createElement('fieldset');
    
    const legend1 = document.createElement('legend');
    legend1.textContent = "Personal Details";
    fieldset1.appendChild(legend1);
    
    const firstName = document.createElement('div');
    
    const label1 = document.createElement('label');
    label1.setAttribute('for', 'first-name');
    label1.textContent = "First name:"
    firstName.appendChild(label1);
    const fname = document.createElement("input");
    fname.setAttribute('type', 'text');
    fname.id = 'first-name';
    firstName.appendChild(fname);

    fieldset1.appendChild(firstName);

    const lastName = document.createElement("div");
    const label2 = document.createElement("label");
    label2.setAttribute('for', 'last-name');
    label2.textContent = "Last name:"
    lastName.appendChild(label2);
    const lname = document.createElement("input");
    lname.setAttribute('type', 'text');
    lname.id = 'last-name';
    lastName.appendChild(lname);

    fieldset1.appendChild(lastName);

    form.appendChild(fieldset1);

    const fieldset2 = document.createElement("fieldset");
    const legend2 = document.createElement('legend');
    legend2.textContent = "Menu order";
    fieldset2.appendChild(legend2);

    const order = document.createElement("div");
    const label3 = document.createElement("label");
    label3.textContent = "Order";
    label3.setAttribute("for", "order-item");
    order.appendChild(label3);

    const orderItems = document.createElement("select");
    orderItems.name = "order-item";
    orderItems.id = "order-item";
    for (const options of ["Fried rice", "Fried yam", "Noodles"]) {
        const option = document.createElement("option");
        option.value = options;
        option.textContent = options;
        orderItems.appendChild(option);
    }
    order.appendChild(orderItems);
    fieldset2.appendChild(order);

    const orderType = document.createElement("div");
    const label4 = document.createElement("label");
    label4.textContent = "Order Type";
    label4.setAttribute("for", "order-type");
    order.appendChild(label4);

    const itemTypes = document.createElement("select");
    itemTypes.name = "order-type";
    itemTypes.id = "order-type";
    for (const options of ["Normal", "Deluxe", "Assorted"]) {
        const option = document.createElement("option");
        option.value = options;
        option.textContent = options;
        itemTypes.appendChild(option);
    }
    orderType.appendChild(itemTypes);

    fieldset2.appendChild(orderType);
    form.appendChild(fieldset2);

    const textarea = document.createElement("textarea");
    textarea.name = "note";
    textarea.id = "note";
    textarea.cols = 50;
    textarea.rows = 10;
    textarea.placeholder = "Any allergies or things to note...";
    form.appendChild(textarea);

    const submitDiv = document.createElement("div");
    submitDiv.id = "submit-btn";

    const button = document.createElement("button");
    button.textContent = "Place order";
    button.type = "button";
    submitDiv.appendChild(button);
    
    form.appendChild(submitDiv);
    main.appendChild(form);

    return main;
}

/***/ }),

/***/ "./src/script/home.js":
/*!****************************!*\
  !*** ./src/script/home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
function Home() {
    const main = document.createElement('main');
    const buttons = [];
    
    const landingContent = document.createElement('div');
    landingContent.id = "landing-content";

    const p = document.createElement('p');
    p.textContent = `Are you craving tasty and affordable food? 
    Do you love fried rice? Are you looking for something crispy?
    Look no further than Nappy's Home Food!
    \n\n
    Don't miss out on the chance to enjoy delicious food at a 
    great price. Head to Nappy's Home Food today!`

    landingContent.appendChild(p);

    const section = document.createElement('section');

    for (const item of ["Menu", "Contact us"]) {
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.textContent = item;
        section.appendChild(button);
        buttons.push(button);
    }
   
    landingContent.appendChild(section);

    main.appendChild(landingContent);

    const landingLogo = document.createElement('div');
    landingLogo.id = 'landing-logo';

    const img = document.createElement('img');
    img.src = "/src/assets/img/landing-img.jpg";
    img.alt = "A delicious plate of fried rice.";

    landingLogo.appendChild(img);
    main.appendChild(landingLogo);

    return [ main, ...[buttons]];
}

/***/ }),

/***/ "./src/script/menu.js":
/*!****************************!*\
  !*** ./src/script/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
function Menu() {
    const main = document.createElement('main');
    main.id = 'menu-content';

    const menuItems = {
        "Fried rice": {
            "name": "Fried rice",
            "src": "/src/assets/img/fried-rice.jpg",
            "caption": "Fried rice with green pepper, salad, ketchup and one choice of protein(egg, sausage, chicken).",
        }, 
        "Fried yam": {
            "name": "Fried yam",
            "src": "/src/assets/img/fried-yam.jpg",
            "caption": "Fried yam with green pepper, ketchup and one choice of protein(egg, sausage, chicken).",
        },
        "Noodles": {
            "name": "Noodles",
            "src": "/src/assets/img/noodles.jpg",
            "caption": "Noodles with sausages and either egg or chicken.",
        }
    }

    for (let [key, value] of Object.entries(menuItems)) {
        const menuItem = document.createElement('div');
        menuItem.id = 'menu-item';

        const h2 = document.createElement('h2');
        h2.textContent = value.name;
        menuItem.appendChild(h2);

        const figure = document.createElement('figure');
        
        const img = document.createElement('img');
        img.src = value.src;
        img.alt = value.name;
        figure.appendChild(img);

        const figcaption = document.createElement('figcaption');
        figcaption.textContent = value.caption;
        figure.appendChild(figcaption);
        
        menuItem.appendChild(figure);

        const ul = document.createElement('ul');
        for (const items of [["Normal", "$5.00"], ["Deluxe", "$10.00"], ["Assorted", "$15.00"]]){
            const li = document.createElement('li');
            for (const item of items) {
                const p = document.createElement('p');
                p.textContent = item;
                li.appendChild(p);
            }
            ul.appendChild(li);
        }
        menuItem.appendChild(ul);

        main.appendChild(menuItem);
    }

    return main;
    
}

/***/ }),

/***/ "./src/script/navbar.js":
/*!******************************!*\
  !*** ./src/script/navbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
function Navbar(link = "Home") {
    const header = document.createElement("header");
    const links = [];

    const h1 = document.createElement("h1");
    h1.id = "logo";
    h1.textContent = "Nappy's";
    header.appendChild(h1);

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    for (const item of ["Home", "Menu", "Contact"]) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.id = item.toLowerCase();
        a.textContent = item;
        if (item == link) {
            a.classList.add("active");
        }
        else {
            a.classList.remove("active");
        }
        links.push(a);
        li.appendChild(a);
        ul.appendChild(li);
    }

    nav.appendChild(ul);
    header.appendChild(nav);

    const div = document.createElement("div");
    header.appendChild(div);

    return [header, ...[links]];
}

/***/ }),

/***/ "./src/assets/img/contact-img.jpg":
/*!****************************************!*\
  !*** ./src/assets/img/contact-img.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "637fda61dbef6a4fd6d0.jpg";

/***/ }),

/***/ "./src/assets/img/fried-rice.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/fried-rice.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a44d5d6950f5d69d08a1.jpg";

/***/ }),

/***/ "./src/assets/img/fried-yam.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/fried-yam.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "302fe20d7344eff02cde.jpg";

/***/ }),

/***/ "./src/assets/img/landing-img.jpg":
/*!****************************************!*\
  !*** ./src/assets/img/landing-img.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b39ce2d651c759bced22.jpg";

/***/ }),

/***/ "./src/assets/img/noodles.jpg":
/*!************************************!*\
  !*** ./src/assets/img/noodles.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f71036d646fa32bbdfc.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/script/navbar.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/script/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/script/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/script/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../style.css */ "./src/style.css");
/* harmony import */ var _assets_img_contact_img_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../assets/img/contact-img.jpg */ "./src/assets/img/contact-img.jpg");
/* harmony import */ var _assets_img_fried_rice_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../assets/img/fried-rice.jpg */ "./src/assets/img/fried-rice.jpg");
/* harmony import */ var _assets_img_fried_yam_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../assets/img/fried-yam.jpg */ "./src/assets/img/fried-yam.jpg");
/* harmony import */ var _assets_img_landing_img_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../assets/img/landing-img.jpg */ "./src/assets/img/landing-img.jpg");
/* harmony import */ var _assets_img_noodles_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../assets/img/noodles.jpg */ "./src/assets/img/noodles.jpg");











const doc = document.querySelector("body");

const [navbar, links] = (0,_navbar__WEBPACK_IMPORTED_MODULE_0__["default"])();
const [home, buttons] = (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
const menu = (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
const contact = (0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();

const content = document.createElement("div");
console.log(links);
content.appendChild(home);
doc.appendChild(navbar);

doc.appendChild(content);


const gotoHome = function() {
    for (const link of links) {
        if (link.id == "home") {
            link.classList.add("active");
        }
        else {
            link.classList.remove("active");
        }
    }
    content.removeChild(content.firstChild);
    content.appendChild(home);
    doc.removeChild(doc.lastChild);
    doc.appendChild(content);
}

const gotoMenu = function() {
    for (const link of links) {
        if (link.id == "menu") {
            link.classList.add("active");
        }
        else {
            link.classList.remove("active");
        }
    }
    content.removeChild(content.firstChild);
    content.appendChild(menu);
    doc.removeChild(doc.lastChild);
    doc.appendChild(content);
}

const gotoContact = function() {
    for (const link of links) {
        if (link.id == "contact") {
            link.classList.add("active");
        }
        else {
            link.classList.remove("active");
        }
    }
    content.removeChild(content.firstChild);
    content.appendChild(contact);
    doc.removeChild(doc.lastChild);
    doc.appendChild(content);
}

const [Homepage, Menupage, Contactpage] = links;
Homepage.addEventListener("click", gotoHome);
Menupage.addEventListener("click", gotoMenu);
Contactpage.addEventListener("click", gotoContact);

const [Menubtn, Contactbtn] = buttons;
Menubtn.addEventListener("click", gotoMenu);
Contactbtn.addEventListener("click", gotoContact);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFB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Q0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxR2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1RGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNKO0FBQ0E7QUFDTTtBQUNSO0FBQ2lCO0FBQ0Q7QUFDRDtBQUNFO0FBQ0o7QUFDckM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1EQUFNO0FBQzlCLHdCQUF3QixpREFBSTtBQUM1QixhQUFhLGlEQUFJO0FBQ2pCLGdCQUFnQixvREFBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zY3JpcHQvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc2NyaXB0L2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdC9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zY3JpcHQvbmF2YmFyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc2NyaXB0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgICAtLW5hdmJhci1oZWlnaHQ6IDRyZW07XHJcbn1cclxuKiB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgIFxyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuYm9keSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogdmFyKC0tbmF2YmFyLWhlaWdodCk7XHJcbn1cclxuaGVhZGVyID4gaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbn1cclxubmF2ID4gdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5uYXYgPiB1bCA+IGxpIHtcclxuICAgIG1hcmdpbi1pbmxpbmU6IDJyZW07XHJcbn1cclxubmF2ID4gdWwgPiBsaSA+IGEge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xyXG59XHJcbm5hdiA+IHVsID4gbGkgPiBhOmhvdmVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuLmFjdGl2ZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmVkO1xyXG59XHJcbm1haW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1uYXZiYXItaGVpZ2h0KSk7XHJcbn1cclxuI2xhbmRpbmctY29udGVudCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbiNsYW5kaW5nLWNvbnRlbnQgcCB7XHJcbiAgICB3aWR0aDogY2xhbXAoNDVjaCwgNzAlLCA3MGNoKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbiNsYW5kaW5nLWNvbnRlbnQgYnV0dG9uIHtcclxuICAgIHdpZHRoOiA3cmVtO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMHJlbSAycHggMHB4IDBweCByZ2IoMCwgMCwgMCk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2xhbmRpbmctY29udGVudCBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY2LCAwKTtcclxufVxyXG4jbGFuZGluZy1jb250ZW50IGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2FsbW9uO1xyXG59XHJcbiNsYW5kaW5nLWxvZ28ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4jbGFuZGluZy1sb2dvIGltZyB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoKDEwMHZoIC0gdmFyKC0tbmF2YmFyLWhlaWdodCkpIC0gMzUlKTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4vKiBNZW51ICovXHJcbiNtZW51LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4jbWVudS1pdGVtIHtcclxuICAgIG1hcmdpbi1ibG9jazogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgd2lkdGg6IGNsYW1wKDIwMHB4LCA1NTBweCwgODAwcHgpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xyXG59XHJcbiNtZW51LWl0ZW0gaDIge1xyXG4gICAgbWFyZ2luLWJsb2NrOiAwLjVyZW07XHJcbn1cclxuI21lbnUtaXRlbSBmaWd1cmUgaW1nIHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuI21lbnUtaXRlbSBmaWdjYXB0aW9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctaW5saW5lOiA0cmVtO1xyXG59XHJcbiNtZW51LWl0ZW0gdWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgbWFyZ2luLWJsb2NrOiAxcmVtO1xyXG59XHJcbiNtZW51LWl0ZW0gdWwgbGk6bnRoLWNoaWxkKDIpIHtcclxuICAgIGJvcmRlci1pbmxpbmU6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmctaW5saW5lOiA0cmVtO1xyXG59XHJcblxyXG4vKiBDb250YWN0ICovXHJcbiNjb250YWN0LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4jY29udGFjdC1jb250ZW50IGltZyB7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuI2NvbnRhY3QtY29udGVudCBmb3JtIGZpZWxkc2V0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG4jY29udGFjdC1jb250ZW50IGZvcm0gaW5wdXQsXHJcbiNjb250YWN0LWNvbnRlbnQgZm9ybSBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuI2NvbnRhY3QtY29udGVudCBmb3JtIGxhYmVsLFxyXG4jY29udGFjdC1jb250ZW50IGZvcm0gdGV4dGFyZWF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4jY29udGFjdC1jb250ZW50IGZvcm0gZmllbGRzZXR7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XHJcbiAgICBtYXJnaW4tYmxvY2s6IDFyZW07XHJcbn1cclxuI2NvbnRhY3QtY29udGVudCBmb3JtIHRleHRhcmVhIHtcclxuICAgIG1hcmdpbi1pbmxpbmU6IDJyZW07XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcbiNjb250YWN0LWNvbnRlbnQgZm9ybSBidXR0b24ge1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgbWFyZ2luOiAycmVtO1xyXG4gICAgd2lkdGg6IDEycmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgb3JhbmdlIDU1JSwgZ29sZCAsIHllbGxvdyk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYm94LXNoYWRvdzogMHJlbSAycHggMHB4IDBweCByZ2IoMCwgMCwgMCk7XHJcbn1cclxuI3N1Ym1pdC1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0lBQ1osMENBQTBDO0FBQzlDO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0RBQWtEO0lBQ2xELFdBQVc7QUFDZjs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsb0JBQW9CO0FBQ3hCOztBQUVBLFlBQVk7QUFDWjtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjtBQUNBOztJQUVJLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnRUFBZ0U7SUFDaEUsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLW5hdmJhci1oZWlnaHQ6IDRyZW07XFxyXFxufVxcclxcbioge1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgXFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLW5hdmJhci1oZWlnaHQpO1xcclxcbn1cXHJcXG5oZWFkZXIgPiBoMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG59XFxyXFxubmF2ID4gdWwge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxubmF2ID4gdWwgPiBsaSB7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IDJyZW07XFxyXFxufVxcclxcbm5hdiA+IHVsID4gbGkgPiBhIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XFxyXFxufVxcclxcbm5hdiA+IHVsID4gbGkgPiBhOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuLmFjdGl2ZSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcbm1haW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLW5hdmJhci1oZWlnaHQpKTtcXHJcXG59XFxyXFxuI2xhbmRpbmctY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbiNsYW5kaW5nLWNvbnRlbnQgcCB7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCg0NWNoLCA3MCUsIDcwY2gpO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcbiNsYW5kaW5nLWNvbnRlbnQgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDdyZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHJlbSAycHggMHB4IDBweCByZ2IoMCwgMCwgMCk7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4jbGFuZGluZy1jb250ZW50IGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCk7XFxyXFxufVxcclxcbiNsYW5kaW5nLWNvbnRlbnQgYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjtcXHJcXG59XFxyXFxuI2xhbmRpbmctbG9nbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4jbGFuZGluZy1sb2dvIGltZyB7XFxyXFxuICAgIGhlaWdodDogY2FsYygoMTAwdmggLSB2YXIoLS1uYXZiYXItaGVpZ2h0KSkgLSAzNSUpO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVudSAqL1xcclxcbiNtZW51LWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcbiNtZW51LWl0ZW0ge1xcclxcbiAgICBtYXJnaW4tYmxvY2s6IDJyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNjB2aDtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDIwMHB4LCA1NTBweCwgODAwcHgpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xcclxcbn1cXHJcXG4jbWVudS1pdGVtIGgyIHtcXHJcXG4gICAgbWFyZ2luLWJsb2NrOiAwLjVyZW07XFxyXFxufVxcclxcbiNtZW51LWl0ZW0gZmlndXJlIGltZyB7XFxyXFxuICAgIHdpZHRoOiA0NTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuI21lbnUtaXRlbSBmaWdjYXB0aW9uIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogNHJlbTtcXHJcXG59XFxyXFxuI21lbnUtaXRlbSB1bCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIG1hcmdpbi1ibG9jazogMXJlbTtcXHJcXG59XFxyXFxuI21lbnUtaXRlbSB1bCBsaTpudGgtY2hpbGQoMikge1xcclxcbiAgICBib3JkZXItaW5saW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250YWN0ICovXFxyXFxuI2NvbnRhY3QtY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4jY29udGFjdC1jb250ZW50IGltZyB7XFxyXFxuICAgIHdpZHRoOiA0NTBweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG4jY29udGFjdC1jb250ZW50IGZvcm0gZmllbGRzZXQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuI2NvbnRhY3QtY29udGVudCBmb3JtIGlucHV0LFxcclxcbiNjb250YWN0LWNvbnRlbnQgZm9ybSBzZWxlY3Qge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG4jY29udGFjdC1jb250ZW50IGZvcm0gbGFiZWwsXFxyXFxuI2NvbnRhY3QtY29udGVudCBmb3JtIHRleHRhcmVhe1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuI2NvbnRhY3QtY29udGVudCBmb3JtIGZpZWxkc2V0e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XFxyXFxuICAgIG1hcmdpbi1ibG9jazogMXJlbTtcXHJcXG59XFxyXFxuI2NvbnRhY3QtY29udGVudCBmb3JtIHRleHRhcmVhIHtcXHJcXG4gICAgbWFyZ2luLWlubGluZTogMnJlbTtcXHJcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG4jY29udGFjdC1jb250ZW50IGZvcm0gYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBtYXJnaW46IDJyZW07XFxyXFxuICAgIHdpZHRoOiAxMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgb3JhbmdlIDU1JSwgZ29sZCAsIHllbGxvdyk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHJlbSAycHggMHB4IDBweCByZ2IoMCwgMCwgMCk7XFxyXFxufVxcclxcbiNzdWJtaXQtYnRuIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgIG1haW4uaWQgPSAnY29udGFjdC1jb250ZW50JztcclxuXHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZy5zcmMgPSBcIi9zcmMvYXNzZXRzL2ltZy9jb250YWN0LWltZy5qcGdcIjtcclxuICAgIGltZy5hbHQgPSBcIkZvb2QgRGVsaXZlcnkgc2VydmljZXMgaW1hZ2U6IEEgYm94IHdpdGggdGhlIHdvcmRzIGNvbnRhY3RsZXNzIGRlbGl2ZXJ5IHdyaXR0ZW4gb24gaXQuXCI7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGNvbnN0IGZpZWxkc2V0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGxlZ2VuZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcclxuICAgIGxlZ2VuZDEudGV4dENvbnRlbnQgPSBcIlBlcnNvbmFsIERldGFpbHNcIjtcclxuICAgIGZpZWxkc2V0MS5hcHBlbmRDaGlsZChsZWdlbmQxKTtcclxuICAgIFxyXG4gICAgY29uc3QgZmlyc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGxhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbDEuc2V0QXR0cmlidXRlKCdmb3InLCAnZmlyc3QtbmFtZScpO1xyXG4gICAgbGFiZWwxLnRleHRDb250ZW50ID0gXCJGaXJzdCBuYW1lOlwiXHJcbiAgICBmaXJzdE5hbWUuYXBwZW5kQ2hpbGQobGFiZWwxKTtcclxuICAgIGNvbnN0IGZuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZm5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgIGZuYW1lLmlkID0gJ2ZpcnN0LW5hbWUnO1xyXG4gICAgZmlyc3ROYW1lLmFwcGVuZENoaWxkKGZuYW1lKTtcclxuXHJcbiAgICBmaWVsZHNldDEuYXBwZW5kQ2hpbGQoZmlyc3ROYW1lKTtcclxuXHJcbiAgICBjb25zdCBsYXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBsYWJlbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbDIuc2V0QXR0cmlidXRlKCdmb3InLCAnbGFzdC1uYW1lJyk7XHJcbiAgICBsYWJlbDIudGV4dENvbnRlbnQgPSBcIkxhc3QgbmFtZTpcIlxyXG4gICAgbGFzdE5hbWUuYXBwZW5kQ2hpbGQobGFiZWwyKTtcclxuICAgIGNvbnN0IGxuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgbG5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgIGxuYW1lLmlkID0gJ2xhc3QtbmFtZSc7XHJcbiAgICBsYXN0TmFtZS5hcHBlbmRDaGlsZChsbmFtZSk7XHJcblxyXG4gICAgZmllbGRzZXQxLmFwcGVuZENoaWxkKGxhc3ROYW1lKTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0MSk7XHJcblxyXG4gICAgY29uc3QgZmllbGRzZXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gICAgY29uc3QgbGVnZW5kMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xyXG4gICAgbGVnZW5kMi50ZXh0Q29udGVudCA9IFwiTWVudSBvcmRlclwiO1xyXG4gICAgZmllbGRzZXQyLmFwcGVuZENoaWxkKGxlZ2VuZDIpO1xyXG5cclxuICAgIGNvbnN0IG9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGxhYmVsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsMy50ZXh0Q29udGVudCA9IFwiT3JkZXJcIjtcclxuICAgIGxhYmVsMy5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJvcmRlci1pdGVtXCIpO1xyXG4gICAgb3JkZXIuYXBwZW5kQ2hpbGQobGFiZWwzKTtcclxuXHJcbiAgICBjb25zdCBvcmRlckl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgIG9yZGVySXRlbXMubmFtZSA9IFwib3JkZXItaXRlbVwiO1xyXG4gICAgb3JkZXJJdGVtcy5pZCA9IFwib3JkZXItaXRlbVwiO1xyXG4gICAgZm9yIChjb25zdCBvcHRpb25zIG9mIFtcIkZyaWVkIHJpY2VcIiwgXCJGcmllZCB5YW1cIiwgXCJOb29kbGVzXCJdKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25zO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbnM7XHJcbiAgICAgICAgb3JkZXJJdGVtcy5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfVxyXG4gICAgb3JkZXIuYXBwZW5kQ2hpbGQob3JkZXJJdGVtcyk7XHJcbiAgICBmaWVsZHNldDIuYXBwZW5kQ2hpbGQob3JkZXIpO1xyXG5cclxuICAgIGNvbnN0IG9yZGVyVHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBsYWJlbDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbDQudGV4dENvbnRlbnQgPSBcIk9yZGVyIFR5cGVcIjtcclxuICAgIGxhYmVsNC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJvcmRlci10eXBlXCIpO1xyXG4gICAgb3JkZXIuYXBwZW5kQ2hpbGQobGFiZWw0KTtcclxuXHJcbiAgICBjb25zdCBpdGVtVHlwZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgaXRlbVR5cGVzLm5hbWUgPSBcIm9yZGVyLXR5cGVcIjtcclxuICAgIGl0ZW1UeXBlcy5pZCA9IFwib3JkZXItdHlwZVwiO1xyXG4gICAgZm9yIChjb25zdCBvcHRpb25zIG9mIFtcIk5vcm1hbFwiLCBcIkRlbHV4ZVwiLCBcIkFzc29ydGVkXCJdKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25zO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbnM7XHJcbiAgICAgICAgaXRlbVR5cGVzLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9XHJcbiAgICBvcmRlclR5cGUuYXBwZW5kQ2hpbGQoaXRlbVR5cGVzKTtcclxuXHJcbiAgICBmaWVsZHNldDIuYXBwZW5kQ2hpbGQob3JkZXJUeXBlKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQyKTtcclxuXHJcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgIHRleHRhcmVhLm5hbWUgPSBcIm5vdGVcIjtcclxuICAgIHRleHRhcmVhLmlkID0gXCJub3RlXCI7XHJcbiAgICB0ZXh0YXJlYS5jb2xzID0gNTA7XHJcbiAgICB0ZXh0YXJlYS5yb3dzID0gMTA7XHJcbiAgICB0ZXh0YXJlYS5wbGFjZWhvbGRlciA9IFwiQW55IGFsbGVyZ2llcyBvciB0aGluZ3MgdG8gbm90ZS4uLlwiO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XHJcblxyXG4gICAgY29uc3Qgc3VibWl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHN1Ym1pdERpdi5pZCA9IFwic3VibWl0LWJ0blwiO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlBsYWNlIG9yZGVyXCI7XHJcbiAgICBidXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICBzdWJtaXREaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgIFxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXREaXYpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgICByZXR1cm4gbWFpbjtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgY29uc3QgYnV0dG9ucyA9IFtdO1xyXG4gICAgXHJcbiAgICBjb25zdCBsYW5kaW5nQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGFuZGluZ0NvbnRlbnQuaWQgPSBcImxhbmRpbmctY29udGVudFwiO1xyXG5cclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwLnRleHRDb250ZW50ID0gYEFyZSB5b3UgY3JhdmluZyB0YXN0eSBhbmQgYWZmb3JkYWJsZSBmb29kPyBcclxuICAgIERvIHlvdSBsb3ZlIGZyaWVkIHJpY2U/IEFyZSB5b3UgbG9va2luZyBmb3Igc29tZXRoaW5nIGNyaXNweT9cclxuICAgIExvb2sgbm8gZnVydGhlciB0aGFuIE5hcHB5J3MgSG9tZSBGb29kIVxyXG4gICAgXFxuXFxuXHJcbiAgICBEb24ndCBtaXNzIG91dCBvbiB0aGUgY2hhbmNlIHRvIGVuam95IGRlbGljaW91cyBmb29kIGF0IGEgXHJcbiAgICBncmVhdCBwcmljZS4gSGVhZCB0byBOYXBweSdzIEhvbWUgRm9vZCB0b2RheSFgXHJcblxyXG4gICAgbGFuZGluZ0NvbnRlbnQuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgW1wiTWVudVwiLCBcIkNvbnRhY3QgdXNcIl0pIHtcclxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGl0ZW07XHJcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIGJ1dHRvbnMucHVzaChidXR0b24pO1xyXG4gICAgfVxyXG4gICBcclxuICAgIGxhbmRpbmdDb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG5cclxuICAgIG1haW4uYXBwZW5kQ2hpbGQobGFuZGluZ0NvbnRlbnQpO1xyXG5cclxuICAgIGNvbnN0IGxhbmRpbmdMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsYW5kaW5nTG9nby5pZCA9ICdsYW5kaW5nLWxvZ28nO1xyXG5cclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nLnNyYyA9IFwiL3NyYy9hc3NldHMvaW1nL2xhbmRpbmctaW1nLmpwZ1wiO1xyXG4gICAgaW1nLmFsdCA9IFwiQSBkZWxpY2lvdXMgcGxhdGUgb2YgZnJpZWQgcmljZS5cIjtcclxuXHJcbiAgICBsYW5kaW5nTG9nby5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChsYW5kaW5nTG9nbyk7XHJcblxyXG4gICAgcmV0dXJuIFsgbWFpbiwgLi4uW2J1dHRvbnNdXTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoKSB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgbWFpbi5pZCA9ICdtZW51LWNvbnRlbnQnO1xyXG5cclxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IHtcclxuICAgICAgICBcIkZyaWVkIHJpY2VcIjoge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJGcmllZCByaWNlXCIsXHJcbiAgICAgICAgICAgIFwic3JjXCI6IFwiL3NyYy9hc3NldHMvaW1nL2ZyaWVkLXJpY2UuanBnXCIsXHJcbiAgICAgICAgICAgIFwiY2FwdGlvblwiOiBcIkZyaWVkIHJpY2Ugd2l0aCBncmVlbiBwZXBwZXIsIHNhbGFkLCBrZXRjaHVwIGFuZCBvbmUgY2hvaWNlIG9mIHByb3RlaW4oZWdnLCBzYXVzYWdlLCBjaGlja2VuKS5cIixcclxuICAgICAgICB9LCBcclxuICAgICAgICBcIkZyaWVkIHlhbVwiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkZyaWVkIHlhbVwiLFxyXG4gICAgICAgICAgICBcInNyY1wiOiBcIi9zcmMvYXNzZXRzL2ltZy9mcmllZC15YW0uanBnXCIsXHJcbiAgICAgICAgICAgIFwiY2FwdGlvblwiOiBcIkZyaWVkIHlhbSB3aXRoIGdyZWVuIHBlcHBlciwga2V0Y2h1cCBhbmQgb25lIGNob2ljZSBvZiBwcm90ZWluKGVnZywgc2F1c2FnZSwgY2hpY2tlbikuXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIk5vb2RsZXNcIjoge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOb29kbGVzXCIsXHJcbiAgICAgICAgICAgIFwic3JjXCI6IFwiL3NyYy9hc3NldHMvaW1nL25vb2RsZXMuanBnXCIsXHJcbiAgICAgICAgICAgIFwiY2FwdGlvblwiOiBcIk5vb2RsZXMgd2l0aCBzYXVzYWdlcyBhbmQgZWl0aGVyIGVnZyBvciBjaGlja2VuLlwiLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobWVudUl0ZW1zKSkge1xyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbWVudUl0ZW0uaWQgPSAnbWVudS1pdGVtJztcclxuXHJcbiAgICAgICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGgyLnRleHRDb250ZW50ID0gdmFsdWUubmFtZTtcclxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChoMik7XHJcblxyXG4gICAgICAgIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ3VyZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGltZy5zcmMgPSB2YWx1ZS5zcmM7XHJcbiAgICAgICAgaW1nLmFsdCA9IHZhbHVlLm5hbWU7XHJcbiAgICAgICAgZmlndXJlLmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZpZ2NhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWdjYXB0aW9uJyk7XHJcbiAgICAgICAgZmlnY2FwdGlvbi50ZXh0Q29udGVudCA9IHZhbHVlLmNhcHRpb247XHJcbiAgICAgICAgZmlndXJlLmFwcGVuZENoaWxkKGZpZ2NhcHRpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZpZ3VyZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW1zIG9mIFtbXCJOb3JtYWxcIiwgXCIkNS4wMFwiXSwgW1wiRGVsdXhlXCIsIFwiJDEwLjAwXCJdLCBbXCJBc3NvcnRlZFwiLCBcIiQxNS4wMFwiXV0pe1xyXG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZCh1bCk7XHJcblxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtYWluO1xyXG4gICAgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIobGluayA9IFwiSG9tZVwiKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgY29uc3QgbGlua3MgPSBbXTtcclxuXHJcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGgxLmlkID0gXCJsb2dvXCI7XHJcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiTmFwcHknc1wiO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcclxuXHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcblxyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIFtcIkhvbWVcIiwgXCJNZW51XCIsIFwiQ29udGFjdFwiXSkge1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBhLmlkID0gaXRlbS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGEudGV4dENvbnRlbnQgPSBpdGVtO1xyXG4gICAgICAgIGlmIChpdGVtID09IGxpbmspIHtcclxuICAgICAgICAgICAgYS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaW5rcy5wdXNoKGEpO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xyXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxuXHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XHJcblxyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgIHJldHVybiBbaGVhZGVyLCAuLi5bbGlua3NdXTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9uYXZiYXJcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCBDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuaW1wb3J0IFwiLi8uLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFwiLi8uLi9hc3NldHMvaW1nL2NvbnRhY3QtaW1nLmpwZ1wiO1xyXG5pbXBvcnQgXCIuLy4uL2Fzc2V0cy9pbWcvZnJpZWQtcmljZS5qcGdcIjtcclxuaW1wb3J0IFwiLi8uLi9hc3NldHMvaW1nL2ZyaWVkLXlhbS5qcGdcIjtcclxuaW1wb3J0IFwiLi8uLi9hc3NldHMvaW1nL2xhbmRpbmctaW1nLmpwZ1wiO1xyXG5pbXBvcnQgXCIuLy4uL2Fzc2V0cy9pbWcvbm9vZGxlcy5qcGdcIjtcclxuXHJcbmNvbnN0IGRvYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuY29uc3QgW25hdmJhciwgbGlua3NdID0gTmF2YmFyKCk7XHJcbmNvbnN0IFtob21lLCBidXR0b25zXSA9IEhvbWUoKTtcclxuY29uc3QgbWVudSA9IE1lbnUoKTtcclxuY29uc3QgY29udGFjdCA9IENvbnRhY3QoKTtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb25zb2xlLmxvZyhsaW5rcyk7XHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbmRvYy5hcHBlbmRDaGlsZChuYXZiYXIpO1xyXG5cclxuZG9jLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuXHJcbmNvbnN0IGdvdG9Ib21lID0gZnVuY3Rpb24oKSB7XHJcbiAgICBmb3IgKGNvbnN0IGxpbmsgb2YgbGlua3MpIHtcclxuICAgICAgICBpZiAobGluay5pZCA9PSBcImhvbWVcIikge1xyXG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob21lKTtcclxuICAgIGRvYy5yZW1vdmVDaGlsZChkb2MubGFzdENoaWxkKTtcclxuICAgIGRvYy5hcHBlbmRDaGlsZChjb250ZW50KTtcclxufVxyXG5cclxuY29uc3QgZ290b01lbnUgPSBmdW5jdGlvbigpIHtcclxuICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xyXG4gICAgICAgIGlmIChsaW5rLmlkID09IFwibWVudVwiKSB7XHJcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gICAgZG9jLnJlbW92ZUNoaWxkKGRvYy5sYXN0Q2hpbGQpO1xyXG4gICAgZG9jLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG59XHJcblxyXG5jb25zdCBnb3RvQ29udGFjdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZm9yIChjb25zdCBsaW5rIG9mIGxpbmtzKSB7XHJcbiAgICAgICAgaWYgKGxpbmsuaWQgPT0gXCJjb250YWN0XCIpIHtcclxuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcbiAgICBkb2MucmVtb3ZlQ2hpbGQoZG9jLmxhc3RDaGlsZCk7XHJcbiAgICBkb2MuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbn1cclxuXHJcbmNvbnN0IFtIb21lcGFnZSwgTWVudXBhZ2UsIENvbnRhY3RwYWdlXSA9IGxpbmtzO1xyXG5Ib21lcGFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ290b0hvbWUpO1xyXG5NZW51cGFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ290b01lbnUpO1xyXG5Db250YWN0cGFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ290b0NvbnRhY3QpO1xyXG5cclxuY29uc3QgW01lbnVidG4sIENvbnRhY3RidG5dID0gYnV0dG9ucztcclxuTWVudWJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ290b01lbnUpO1xyXG5Db250YWN0YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb3RvQ29udGFjdCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9