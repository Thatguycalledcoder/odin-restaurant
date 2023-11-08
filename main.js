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
    doc.removeChild(doc.firstChild);
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
    doc.removeChild(doc.firstChild);
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
    doc.removeChild(doc.firstChild);
    doc.appendChild(content);
}

const [Homepage, Menupage, Contactpage] = links;
Homepage.addEventListener("click", gotoHome);
Menupage.addEventListener("click", gotoMenu);
Contactpage.addEventListener("click", gotoContact);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFB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Q0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxR2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1RGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNKO0FBQ0E7QUFDTTtBQUNSO0FBQ2lCO0FBQ0Q7QUFDRDtBQUNFO0FBQ0o7QUFDckM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1EQUFNO0FBQzlCLHdCQUF3QixpREFBSTtBQUM1QixhQUFhLGlEQUFJO0FBQ2pCLGdCQUFnQixvREFBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc2NyaXB0L2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdC9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zY3JpcHQvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc2NyaXB0L25hdmJhci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gICAgLS1uYXZiYXItaGVpZ2h0OiA0cmVtO1xyXG59XHJcbioge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICBcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbmJvZHkge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IHZhcigtLW5hdmJhci1oZWlnaHQpO1xyXG59XHJcbmhlYWRlciA+IGgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcbm5hdiA+IHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxubmF2ID4gdWwgPiBsaSB7XHJcbiAgICBtYXJnaW4taW5saW5lOiAycmVtO1xyXG59XHJcbm5hdiA+IHVsID4gbGkgPiBhIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcclxufVxyXG5uYXYgPiB1bCA+IGxpID4gYTpob3ZlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmVkO1xyXG59XHJcbi5hY3RpdmUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcclxufVxyXG5tYWluIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tbmF2YmFyLWhlaWdodCkpO1xyXG59XHJcbiNsYW5kaW5nLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4jbGFuZGluZy1jb250ZW50IHAge1xyXG4gICAgd2lkdGg6IGNsYW1wKDQ1Y2gsIDcwJSwgNzBjaCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4jbGFuZGluZy1jb250ZW50IGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogN3JlbTtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDByZW0gMnB4IDBweCAwcHggcmdiKDAsIDAsIDApO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiNsYW5kaW5nLWNvbnRlbnQgYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCk7XHJcbn1cclxuI2xhbmRpbmctY29udGVudCBidXR0b246bGFzdC1vZi10eXBlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjtcclxufVxyXG4jbGFuZGluZy1sb2dvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuI2xhbmRpbmctbG9nbyBpbWcge1xyXG4gICAgaGVpZ2h0OiBjYWxjKCgxMDB2aCAtIHZhcigtLW5hdmJhci1oZWlnaHQpKSAtIDM1JSk7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLyogTWVudSAqL1xyXG4jbWVudS1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuI21lbnUtaXRlbSB7XHJcbiAgICBtYXJnaW4tYmxvY2s6IDJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIHdpZHRoOiBjbGFtcCgyMDBweCwgNTUwcHgsIDgwMHB4KTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcclxufVxyXG4jbWVudS1pdGVtIGgyIHtcclxuICAgIG1hcmdpbi1ibG9jazogMC41cmVtO1xyXG59XHJcbiNtZW51LWl0ZW0gZmlndXJlIGltZyB7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcbiNtZW51LWl0ZW0gZmlnY2FwdGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWlubGluZTogNHJlbTtcclxufVxyXG4jbWVudS1pdGVtIHVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIG1hcmdpbi1ibG9jazogMXJlbTtcclxufVxyXG4jbWVudS1pdGVtIHVsIGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgICBib3JkZXItaW5saW5lOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nLWlubGluZTogNHJlbTtcclxufVxyXG5cclxuLyogQ29udGFjdCAqL1xyXG4jY29udGFjdC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuI2NvbnRhY3QtY29udGVudCBpbWcge1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiNjb250YWN0LWNvbnRlbnQgZm9ybSBmaWVsZHNldCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuI2NvbnRhY3QtY29udGVudCBmb3JtIGlucHV0LFxyXG4jY29udGFjdC1jb250ZW50IGZvcm0gc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcbiNjb250YWN0LWNvbnRlbnQgZm9ybSBsYWJlbCxcclxuI2NvbnRhY3QtY29udGVudCBmb3JtIHRleHRhcmVhe1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuI2NvbnRhY3QtY29udGVudCBmb3JtIGZpZWxkc2V0e1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xyXG4gICAgbWFyZ2luLWJsb2NrOiAxcmVtO1xyXG59XHJcbiNjb250YWN0LWNvbnRlbnQgZm9ybSB0ZXh0YXJlYSB7XHJcbiAgICBtYXJnaW4taW5saW5lOiAycmVtO1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG4jY29udGFjdC1jb250ZW50IGZvcm0gYnV0dG9uIHtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIG1hcmdpbjogMnJlbTtcclxuICAgIHdpZHRoOiAxMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIG9yYW5nZSA1NSUsIGdvbGQgLCB5ZWxsb3cpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDByZW0gMnB4IDBweCAwcHggcmdiKDAsIDAsIDApO1xyXG59XHJcbiNzdWJtaXQtYnRuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtEQUFrRDtJQUNsRCxXQUFXO0FBQ2Y7O0FBRUEsU0FBUztBQUNUO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLG9CQUFvQjtBQUN4Qjs7QUFFQSxZQUFZO0FBQ1o7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0I7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBOztJQUVJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztJQUNULG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0VBQWdFO0lBQ2hFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1uYXZiYXItaGVpZ2h0OiA0cmVtO1xcclxcbn1cXHJcXG4qIHtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgIFxcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1uYXZiYXItaGVpZ2h0KTtcXHJcXG59XFxyXFxuaGVhZGVyID4gaDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcbm5hdiA+IHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcbm5hdiA+IHVsID4gbGkge1xcclxcbiAgICBtYXJnaW4taW5saW5lOiAycmVtO1xcclxcbn1cXHJcXG5uYXYgPiB1bCA+IGxpID4gYSB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xcclxcbn1cXHJcXG5uYXYgPiB1bCA+IGxpID4gYTpob3ZlciB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcbi5hY3RpdmUge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5tYWluIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1uYXZiYXItaGVpZ2h0KSk7XFxyXFxufVxcclxcbiNsYW5kaW5nLWNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4jbGFuZGluZy1jb250ZW50IHAge1xcclxcbiAgICB3aWR0aDogY2xhbXAoNDVjaCwgNzAlLCA3MGNoKTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG4jbGFuZGluZy1jb250ZW50IGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiA3cmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDByZW0gMnB4IDBweCAwcHggcmdiKDAsIDAsIDApO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuI2xhbmRpbmctY29udGVudCBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDApO1xcclxcbn1cXHJcXG4jbGFuZGluZy1jb250ZW50IGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzYWxtb247XFxyXFxufVxcclxcbiNsYW5kaW5nLWxvZ28ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuI2xhbmRpbmctbG9nbyBpbWcge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoKDEwMHZoIC0gdmFyKC0tbmF2YmFyLWhlaWdodCkpIC0gMzUlKTtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIE1lbnUgKi9cXHJcXG4jbWVudS1jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG4jbWVudS1pdGVtIHtcXHJcXG4gICAgbWFyZ2luLWJsb2NrOiAycmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDYwdmg7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCgyMDBweCwgNTUwcHgsIDgwMHB4KTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXHJcXG59XFxyXFxuI21lbnUtaXRlbSBoMiB7XFxyXFxuICAgIG1hcmdpbi1ibG9jazogMC41cmVtO1xcclxcbn1cXHJcXG4jbWVudS1pdGVtIGZpZ3VyZSBpbWcge1xcclxcbiAgICB3aWR0aDogNDUwcHg7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcbiNtZW51LWl0ZW0gZmlnY2FwdGlvbiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDRyZW07XFxyXFxufVxcclxcbiNtZW51LWl0ZW0gdWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBtYXJnaW4tYmxvY2s6IDFyZW07XFxyXFxufVxcclxcbiNtZW51LWl0ZW0gdWwgbGk6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgYm9yZGVyLWlubGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGFjdCAqL1xcclxcbiNjb250YWN0LWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuI2NvbnRhY3QtY29udGVudCBpbWcge1xcclxcbiAgICB3aWR0aDogNDUwcHg7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuI2NvbnRhY3QtY29udGVudCBmb3JtIGZpZWxkc2V0IHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbiNjb250YWN0LWNvbnRlbnQgZm9ybSBpbnB1dCxcXHJcXG4jY29udGFjdC1jb250ZW50IGZvcm0gc2VsZWN0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuI2NvbnRhY3QtY29udGVudCBmb3JtIGxhYmVsLFxcclxcbiNjb250YWN0LWNvbnRlbnQgZm9ybSB0ZXh0YXJlYXtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbiNjb250YWN0LWNvbnRlbnQgZm9ybSBmaWVsZHNldHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcclxcbiAgICBtYXJnaW4tYmxvY2s6IDFyZW07XFxyXFxufVxcclxcbiNjb250YWN0LWNvbnRlbnQgZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IDJyZW07XFxyXFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuI2NvbnRhY3QtY29udGVudCBmb3JtIGJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgbWFyZ2luOiAycmVtO1xcclxcbiAgICB3aWR0aDogMTJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIG9yYW5nZSA1NSUsIGdvbGQgLCB5ZWxsb3cpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDByZW0gMnB4IDBweCAwcHggcmdiKDAsIDAsIDApO1xcclxcbn1cXHJcXG4jc3VibWl0LWJ0biB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBtYWluLmlkID0gJ2NvbnRhY3QtY29udGVudCc7XHJcblxyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuc3JjID0gXCIvc3JjL2Fzc2V0cy9pbWcvY29udGFjdC1pbWcuanBnXCI7XHJcbiAgICBpbWcuYWx0ID0gXCJGb29kIERlbGl2ZXJ5IHNlcnZpY2VzIGltYWdlOiBBIGJveCB3aXRoIHRoZSB3b3JkcyBjb250YWN0bGVzcyBkZWxpdmVyeSB3cml0dGVuIG9uIGl0LlwiO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChpbWcpO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBjb25zdCBmaWVsZHNldDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xyXG4gICAgXHJcbiAgICBjb25zdCBsZWdlbmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XHJcbiAgICBsZWdlbmQxLnRleHRDb250ZW50ID0gXCJQZXJzb25hbCBEZXRhaWxzXCI7XHJcbiAgICBmaWVsZHNldDEuYXBwZW5kQ2hpbGQobGVnZW5kMSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGZpcnN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgXHJcbiAgICBjb25zdCBsYWJlbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWwxLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2ZpcnN0LW5hbWUnKTtcclxuICAgIGxhYmVsMS50ZXh0Q29udGVudCA9IFwiRmlyc3QgbmFtZTpcIlxyXG4gICAgZmlyc3ROYW1lLmFwcGVuZENoaWxkKGxhYmVsMSk7XHJcbiAgICBjb25zdCBmbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGZuYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICBmbmFtZS5pZCA9ICdmaXJzdC1uYW1lJztcclxuICAgIGZpcnN0TmFtZS5hcHBlbmRDaGlsZChmbmFtZSk7XHJcblxyXG4gICAgZmllbGRzZXQxLmFwcGVuZENoaWxkKGZpcnN0TmFtZSk7XHJcblxyXG4gICAgY29uc3QgbGFzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgbGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWwyLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2xhc3QtbmFtZScpO1xyXG4gICAgbGFiZWwyLnRleHRDb250ZW50ID0gXCJMYXN0IG5hbWU6XCJcclxuICAgIGxhc3ROYW1lLmFwcGVuZENoaWxkKGxhYmVsMik7XHJcbiAgICBjb25zdCBsbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGxuYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICBsbmFtZS5pZCA9ICdsYXN0LW5hbWUnO1xyXG4gICAgbGFzdE5hbWUuYXBwZW5kQ2hpbGQobG5hbWUpO1xyXG5cclxuICAgIGZpZWxkc2V0MS5hcHBlbmRDaGlsZChsYXN0TmFtZSk7XHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldDEpO1xyXG5cclxuICAgIGNvbnN0IGZpZWxkc2V0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcclxuICAgIGNvbnN0IGxlZ2VuZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcclxuICAgIGxlZ2VuZDIudGV4dENvbnRlbnQgPSBcIk1lbnUgb3JkZXJcIjtcclxuICAgIGZpZWxkc2V0Mi5hcHBlbmRDaGlsZChsZWdlbmQyKTtcclxuXHJcbiAgICBjb25zdCBvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBsYWJlbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbDMudGV4dENvbnRlbnQgPSBcIk9yZGVyXCI7XHJcbiAgICBsYWJlbDMuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwib3JkZXItaXRlbVwiKTtcclxuICAgIG9yZGVyLmFwcGVuZENoaWxkKGxhYmVsMyk7XHJcblxyXG4gICAgY29uc3Qgb3JkZXJJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICBvcmRlckl0ZW1zLm5hbWUgPSBcIm9yZGVyLWl0ZW1cIjtcclxuICAgIG9yZGVySXRlbXMuaWQgPSBcIm9yZGVyLWl0ZW1cIjtcclxuICAgIGZvciAoY29uc3Qgb3B0aW9ucyBvZiBbXCJGcmllZCByaWNlXCIsIFwiRnJpZWQgeWFtXCIsIFwiTm9vZGxlc1wiXSkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9ucztcclxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25zO1xyXG4gICAgICAgIG9yZGVySXRlbXMuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH1cclxuICAgIG9yZGVyLmFwcGVuZENoaWxkKG9yZGVySXRlbXMpO1xyXG4gICAgZmllbGRzZXQyLmFwcGVuZENoaWxkKG9yZGVyKTtcclxuXHJcbiAgICBjb25zdCBvcmRlclR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgbGFiZWw0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWw0LnRleHRDb250ZW50ID0gXCJPcmRlciBUeXBlXCI7XHJcbiAgICBsYWJlbDQuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwib3JkZXItdHlwZVwiKTtcclxuICAgIG9yZGVyLmFwcGVuZENoaWxkKGxhYmVsNCk7XHJcblxyXG4gICAgY29uc3QgaXRlbVR5cGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgIGl0ZW1UeXBlcy5uYW1lID0gXCJvcmRlci10eXBlXCI7XHJcbiAgICBpdGVtVHlwZXMuaWQgPSBcIm9yZGVyLXR5cGVcIjtcclxuICAgIGZvciAoY29uc3Qgb3B0aW9ucyBvZiBbXCJOb3JtYWxcIiwgXCJEZWx1eGVcIiwgXCJBc3NvcnRlZFwiXSkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9ucztcclxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25zO1xyXG4gICAgICAgIGl0ZW1UeXBlcy5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfVxyXG4gICAgb3JkZXJUeXBlLmFwcGVuZENoaWxkKGl0ZW1UeXBlcyk7XHJcblxyXG4gICAgZmllbGRzZXQyLmFwcGVuZENoaWxkKG9yZGVyVHlwZSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0Mik7XHJcblxyXG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICB0ZXh0YXJlYS5uYW1lID0gXCJub3RlXCI7XHJcbiAgICB0ZXh0YXJlYS5pZCA9IFwibm90ZVwiO1xyXG4gICAgdGV4dGFyZWEuY29scyA9IDUwO1xyXG4gICAgdGV4dGFyZWEucm93cyA9IDEwO1xyXG4gICAgdGV4dGFyZWEucGxhY2Vob2xkZXIgPSBcIkFueSBhbGxlcmdpZXMgb3IgdGhpbmdzIHRvIG5vdGUuLi5cIjtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzdWJtaXREaXYuaWQgPSBcInN1Ym1pdC1idG5cIjtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJQbGFjZSBvcmRlclwiO1xyXG4gICAgYnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgc3VibWl0RGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICBcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0RGl2KTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gICAgcmV0dXJuIG1haW47XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBbXTtcclxuICAgIFxyXG4gICAgY29uc3QgbGFuZGluZ0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxhbmRpbmdDb250ZW50LmlkID0gXCJsYW5kaW5nLWNvbnRlbnRcIjtcclxuXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IGBBcmUgeW91IGNyYXZpbmcgdGFzdHkgYW5kIGFmZm9yZGFibGUgZm9vZD8gXHJcbiAgICBEbyB5b3UgbG92ZSBmcmllZCByaWNlPyBBcmUgeW91IGxvb2tpbmcgZm9yIHNvbWV0aGluZyBjcmlzcHk/XHJcbiAgICBMb29rIG5vIGZ1cnRoZXIgdGhhbiBOYXBweSdzIEhvbWUgRm9vZCFcclxuICAgIFxcblxcblxyXG4gICAgRG9uJ3QgbWlzcyBvdXQgb24gdGhlIGNoYW5jZSB0byBlbmpveSBkZWxpY2lvdXMgZm9vZCBhdCBhIFxyXG4gICAgZ3JlYXQgcHJpY2UuIEhlYWQgdG8gTmFwcHkncyBIb21lIEZvb2QgdG9kYXkhYFxyXG5cclxuICAgIGxhbmRpbmdDb250ZW50LmFwcGVuZENoaWxkKHApO1xyXG5cclxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcblxyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIFtcIk1lbnVcIiwgXCJDb250YWN0IHVzXCJdKSB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBpdGVtO1xyXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBidXR0b25zLnB1c2goYnV0dG9uKTtcclxuICAgIH1cclxuICAgXHJcbiAgICBsYW5kaW5nQ29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxuXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGxhbmRpbmdDb250ZW50KTtcclxuXHJcbiAgICBjb25zdCBsYW5kaW5nTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGFuZGluZ0xvZ28uaWQgPSAnbGFuZGluZy1sb2dvJztcclxuXHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZy5zcmMgPSBcIi9zcmMvYXNzZXRzL2ltZy9sYW5kaW5nLWltZy5qcGdcIjtcclxuICAgIGltZy5hbHQgPSBcIkEgZGVsaWNpb3VzIHBsYXRlIG9mIGZyaWVkIHJpY2UuXCI7XHJcblxyXG4gICAgbGFuZGluZ0xvZ28uYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQobGFuZGluZ0xvZ28pO1xyXG5cclxuICAgIHJldHVybiBbIG1haW4sIC4uLltidXR0b25zXV07XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgIG1haW4uaWQgPSAnbWVudS1jb250ZW50JztcclxuXHJcbiAgICBjb25zdCBtZW51SXRlbXMgPSB7XHJcbiAgICAgICAgXCJGcmllZCByaWNlXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRnJpZWQgcmljZVwiLFxyXG4gICAgICAgICAgICBcInNyY1wiOiBcIi9zcmMvYXNzZXRzL2ltZy9mcmllZC1yaWNlLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImNhcHRpb25cIjogXCJGcmllZCByaWNlIHdpdGggZ3JlZW4gcGVwcGVyLCBzYWxhZCwga2V0Y2h1cCBhbmQgb25lIGNob2ljZSBvZiBwcm90ZWluKGVnZywgc2F1c2FnZSwgY2hpY2tlbikuXCIsXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgXCJGcmllZCB5YW1cIjoge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJGcmllZCB5YW1cIixcclxuICAgICAgICAgICAgXCJzcmNcIjogXCIvc3JjL2Fzc2V0cy9pbWcvZnJpZWQteWFtLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImNhcHRpb25cIjogXCJGcmllZCB5YW0gd2l0aCBncmVlbiBwZXBwZXIsIGtldGNodXAgYW5kIG9uZSBjaG9pY2Ugb2YgcHJvdGVpbihlZ2csIHNhdXNhZ2UsIGNoaWNrZW4pLlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJOb29kbGVzXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTm9vZGxlc1wiLFxyXG4gICAgICAgICAgICBcInNyY1wiOiBcIi9zcmMvYXNzZXRzL2ltZy9ub29kbGVzLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImNhcHRpb25cIjogXCJOb29kbGVzIHdpdGggc2F1c2FnZXMgYW5kIGVpdGhlciBlZ2cgb3IgY2hpY2tlbi5cIixcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG1lbnVJdGVtcykpIHtcclxuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1lbnVJdGVtLmlkID0gJ21lbnUtaXRlbSc7XHJcblxyXG4gICAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBoMi50ZXh0Q29udGVudCA9IHZhbHVlLm5hbWU7XHJcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaDIpO1xyXG5cclxuICAgICAgICBjb25zdCBmaWd1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWd1cmUnKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBpbWcuc3JjID0gdmFsdWUuc3JjO1xyXG4gICAgICAgIGltZy5hbHQgPSB2YWx1ZS5uYW1lO1xyXG4gICAgICAgIGZpZ3VyZS5hcHBlbmRDaGlsZChpbWcpO1xyXG5cclxuICAgICAgICBjb25zdCBmaWdjYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmlnY2FwdGlvbicpO1xyXG4gICAgICAgIGZpZ2NhcHRpb24udGV4dENvbnRlbnQgPSB2YWx1ZS5jYXB0aW9uO1xyXG4gICAgICAgIGZpZ3VyZS5hcHBlbmRDaGlsZChmaWdjYXB0aW9uKTtcclxuICAgICAgICBcclxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChmaWd1cmUpO1xyXG5cclxuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtcyBvZiBbW1wiTm9ybWFsXCIsIFwiJDUuMDBcIl0sIFtcIkRlbHV4ZVwiLCBcIiQxMC4wMFwiXSwgW1wiQXNzb3J0ZWRcIiwgXCIkMTUuMDBcIl1dKXtcclxuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICBwLnRleHRDb250ZW50ID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQodWwpO1xyXG5cclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWFpbjtcclxuICAgIFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKGxpbmsgPSBcIkhvbWVcIikge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIGNvbnN0IGxpbmtzID0gW107XHJcblxyXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBoMS5pZCA9IFwibG9nb1wiO1xyXG4gICAgaDEudGV4dENvbnRlbnQgPSBcIk5hcHB5J3NcIjtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XHJcblxyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5cclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBbXCJIb21lXCIsIFwiTWVudVwiLCBcIkNvbnRhY3RcIl0pIHtcclxuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgYS5pZCA9IGl0ZW0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBhLnRleHRDb250ZW50ID0gaXRlbTtcclxuICAgICAgICBpZiAoaXRlbSA9PSBsaW5rKSB7XHJcbiAgICAgICAgICAgIGEuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGlua3MucHVzaChhKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xyXG5cclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICByZXR1cm4gW2hlYWRlciwgLi4uW2xpbmtzXV07XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBOYXZiYXIgZnJvbSBcIi4vbmF2YmFyXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmltcG9ydCBcIi4vLi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4vLi4vYXNzZXRzL2ltZy9jb250YWN0LWltZy5qcGdcIjtcclxuaW1wb3J0IFwiLi8uLi9hc3NldHMvaW1nL2ZyaWVkLXJpY2UuanBnXCI7XHJcbmltcG9ydCBcIi4vLi4vYXNzZXRzL2ltZy9mcmllZC15YW0uanBnXCI7XHJcbmltcG9ydCBcIi4vLi4vYXNzZXRzL2ltZy9sYW5kaW5nLWltZy5qcGdcIjtcclxuaW1wb3J0IFwiLi8uLi9hc3NldHMvaW1nL25vb2RsZXMuanBnXCI7XHJcblxyXG5jb25zdCBkb2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbmNvbnN0IFtuYXZiYXIsIGxpbmtzXSA9IE5hdmJhcigpO1xyXG5jb25zdCBbaG9tZSwgYnV0dG9uc10gPSBIb21lKCk7XHJcbmNvbnN0IG1lbnUgPSBNZW51KCk7XHJcbmNvbnN0IGNvbnRhY3QgPSBDb250YWN0KCk7XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuY29uc29sZS5sb2cobGlua3MpO1xyXG5jb250ZW50LmFwcGVuZENoaWxkKGhvbWUpO1xyXG5kb2MuYXBwZW5kQ2hpbGQobmF2YmFyKTtcclxuXHJcbmRvYy5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHJcblxyXG5jb25zdCBnb3RvSG9tZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZm9yIChjb25zdCBsaW5rIG9mIGxpbmtzKSB7XHJcbiAgICAgICAgaWYgKGxpbmsuaWQgPT0gXCJob21lXCIpIHtcclxuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbiAgICBkb2MucmVtb3ZlQ2hpbGQoZG9jLmZpcnN0Q2hpbGQpO1xyXG4gICAgZG9jLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG59XHJcblxyXG5jb25zdCBnb3RvTWVudSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZm9yIChjb25zdCBsaW5rIG9mIGxpbmtzKSB7XHJcbiAgICAgICAgaWYgKGxpbmsuaWQgPT0gXCJtZW51XCIpIHtcclxuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XHJcbiAgICBkb2MucmVtb3ZlQ2hpbGQoZG9jLmZpcnN0Q2hpbGQpO1xyXG4gICAgZG9jLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG59XHJcblxyXG5jb25zdCBnb3RvQ29udGFjdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZm9yIChjb25zdCBsaW5rIG9mIGxpbmtzKSB7XHJcbiAgICAgICAgaWYgKGxpbmsuaWQgPT0gXCJjb250YWN0XCIpIHtcclxuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcbiAgICBkb2MucmVtb3ZlQ2hpbGQoZG9jLmZpcnN0Q2hpbGQpO1xyXG4gICAgZG9jLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG59XHJcblxyXG5jb25zdCBbSG9tZXBhZ2UsIE1lbnVwYWdlLCBDb250YWN0cGFnZV0gPSBsaW5rcztcclxuSG9tZXBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvdG9Ib21lKTtcclxuTWVudXBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvdG9NZW51KTtcclxuQ29udGFjdHBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvdG9Db250YWN0KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9