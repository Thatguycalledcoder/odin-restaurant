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
#content {
    animation: fadeIn 300ms ease-in-out;
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
}

@keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1}
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;AACzB;AACA;IACI,8BAA8B;IAC9B,2BAA2B;IAC3B,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;AACA;IACI,gBAAgB;AACpB;AACA;IACI,mCAAmC;AACvC;AACA;IACI,wBAAwB;IACxB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,4BAA4B;AAChC;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,qBAAqB;IACrB,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,UAAU;IACV,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,sBAAsB;AAC1B;AACA;IACI,4BAA4B;AAChC;AACA;IACI,4BAA4B;AAChC;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,0CAA0C;AAC9C;AACA;IACI,UAAU;IACV,aAAa;IACb,eAAe;IACf,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,qBAAqB;AACzB;AACA;IACI,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,qBAAqB;IACrB,YAAY;IACZ,yCAAyC;IACzC,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,sBAAsB;IACtB,eAAe;AACnB;AACA;IACI,mCAAmC;AACvC;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,kDAAkD;IAClD,WAAW;AACf;;AAEA,SAAS;AACT;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;IACjB,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,iCAAiC;IACjC,aAAa;IACb,mBAAmB;IACnB,kCAAkC;AACtC;AACA;IACI,oBAAoB;AACxB;AACA;IACI,YAAY;IACZ,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,qBAAqB;IACrB,6BAA6B;IAC7B,kBAAkB;AACtB;AACA;IACI,8BAA8B;IAC9B,oBAAoB;AACxB;;AAEA,YAAY;AACZ;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,2BAA2B;AAC/B;AACA;;IAEI,WAAW;IACX,eAAe;AACnB;AACA;;IAEI,cAAc;AAClB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,oBAAoB;IACpB,kBAAkB;AACtB;AACA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,gEAAgE;IAChE,YAAY;IACZ,mBAAmB;IACnB,yCAAyC;AAC7C;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,IAAI,UAAU,CAAC;IACf,MAAM,UAAU;AACpB","sourcesContent":[":root {\r\n    --navbar-height: 4rem;\r\n}\r\n* {\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;    \r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nbody {\r\n    overflow: hidden;\r\n}\r\n#content {\r\n    animation: fadeIn 300ms ease-in-out;\r\n}\r\nheader {\r\n    background-color: orange;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: var(--navbar-height);\r\n}\r\nheader > h1 {\r\n    text-align: center;\r\n    margin-left: 2rem;\r\n    padding-left: 2rem;\r\n}\r\nnav > ul {\r\n    list-style-type: none;\r\n    display: flex;\r\n    margin-right: 1rem;\r\n}\r\nnav > ul > li {\r\n    margin-inline: 2rem;\r\n}\r\nnav > ul > li > a {\r\n    color: red;\r\n    font-weight: bold;\r\n    font-size: 1.2rem;\r\n    cursor: pointer;\r\n    padding-bottom: 0.2rem;\r\n}\r\nnav > ul > li > a:hover {\r\n    border-bottom: 2px solid red;\r\n}\r\n.active {\r\n    border-bottom: 2px solid red;\r\n}\r\nmain {\r\n    background-color: gold;\r\n    display: flex;\r\n    width: 100vw;\r\n    height: calc(100vh - var(--navbar-height));\r\n}\r\n#landing-content {\r\n    width: 50%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    align-content: center;\r\n}\r\n#landing-content p {\r\n    width: clamp(45ch, 70%, 70ch);\r\n    margin-bottom: 3rem;\r\n    font-size: 1rem;\r\n    letter-spacing: 1px;\r\n}\r\n#landing-content button {\r\n    width: 7rem;\r\n    height: 3rem;\r\n    font-size: 1rem;\r\n    border-radius: 0.4rem;\r\n    border: none;\r\n    box-shadow: 0rem 2px 0px 0px rgb(0, 0, 0);\r\n    margin-right: 1rem;\r\n    color: white;\r\n    font-weight: bold;\r\n    letter-spacing: 0.1rem;\r\n    cursor: pointer;\r\n}\r\n#landing-content button:first-of-type {\r\n    background-color: rgba(255, 166, 0);\r\n}\r\n#landing-content button:last-of-type {\r\n    background-color: salmon;\r\n}\r\n#landing-logo {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n#landing-logo img {\r\n    height: calc((100vh - var(--navbar-height)) - 35%);\r\n    width: auto;\r\n}\r\n\r\n/* Menu */\r\n#menu-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    flex-wrap: nowrap;\r\n    overflow: auto;\r\n}\r\n#menu-item {\r\n    margin-block: 2rem;\r\n    text-align: center;\r\n    background-color: white;\r\n    height: 60vh;\r\n    width: clamp(200px, 550px, 800px);\r\n    display: grid;\r\n    grid-auto-flow: row;\r\n    grid-template-rows: repeat(4, 1fr);\r\n}\r\n#menu-item h2 {\r\n    margin-block: 0.5rem;\r\n}\r\n#menu-item figure img {\r\n    width: 450px;\r\n    height: 300px;\r\n}\r\n#menu-item figcaption {\r\n    text-align: center;\r\n    padding-inline: 4rem;\r\n}\r\n#menu-item ul {\r\n    display: flex;\r\n    list-style-type: none;\r\n    justify-content: space-evenly;\r\n    margin-block: 1rem;\r\n}\r\n#menu-item ul li:nth-child(2) {\r\n    border-inline: 1px solid black;\r\n    padding-inline: 4rem;\r\n}\r\n\r\n/* Contact */\r\n#contact-content {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n#contact-content img {\r\n    width: 450px;\r\n    height: auto;\r\n}\r\n#contact-content form fieldset {\r\n    border: none;\r\n    border-top: 2px solid black;\r\n}\r\n#contact-content form input,\r\n#contact-content form select {\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n}\r\n#contact-content form label,\r\n#contact-content form textarea{\r\n    display: block;\r\n}\r\n#contact-content form fieldset{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 1rem;\r\n    padding: 0.5rem 2rem;\r\n    margin-block: 1rem;\r\n}\r\n#contact-content form textarea {\r\n    margin-inline: 2rem;\r\n    resize: vertical;\r\n    padding: 0.5rem;\r\n}\r\n#contact-content form button {\r\n    height: 3rem;\r\n    margin: 2rem;\r\n    width: 12rem;\r\n    font-size: 1rem;\r\n    letter-spacing: 2px;\r\n    color: white;\r\n    background: linear-gradient(to right, orange 55%, gold , yellow);\r\n    border: none;\r\n    border-radius: 1rem;\r\n    box-shadow: 0rem 2px 0px 0px rgb(0, 0, 0);\r\n}\r\n#submit-btn {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    0% {opacity: 0;}\r\n    100% {opacity: 1}\r\n}"],"sourceRoot":""}]);
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
content.id = "content";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLFVBQVU7QUFDVixDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sVUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUdlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNURlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOEI7QUFDSjtBQUNBO0FBQ007QUFDUjtBQUNpQjtBQUNEO0FBQ0Q7QUFDRTtBQUNKO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtREFBTTtBQUM5Qix3QkFBd0IsaURBQUk7QUFDNUIsYUFBYSxpREFBSTtBQUNqQixnQkFBZ0Isb0RBQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zY3JpcHQvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc2NyaXB0L2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdC9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zY3JpcHQvbmF2YmFyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc2NyaXB0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgICAtLW5hdmJhci1oZWlnaHQ6IDRyZW07XHJcbn1cclxuKiB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgIFxyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuYm9keSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiNjb250ZW50IHtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDMwMG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcbmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogdmFyKC0tbmF2YmFyLWhlaWdodCk7XHJcbn1cclxuaGVhZGVyID4gaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbn1cclxubmF2ID4gdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5uYXYgPiB1bCA+IGxpIHtcclxuICAgIG1hcmdpbi1pbmxpbmU6IDJyZW07XHJcbn1cclxubmF2ID4gdWwgPiBsaSA+IGEge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xyXG59XHJcbm5hdiA+IHVsID4gbGkgPiBhOmhvdmVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuLmFjdGl2ZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmVkO1xyXG59XHJcbm1haW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1uYXZiYXItaGVpZ2h0KSk7XHJcbn1cclxuI2xhbmRpbmctY29udGVudCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbiNsYW5kaW5nLWNvbnRlbnQgcCB7XHJcbiAgICB3aWR0aDogY2xhbXAoNDVjaCwgNzAlLCA3MGNoKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbiNsYW5kaW5nLWNvbnRlbnQgYnV0dG9uIHtcclxuICAgIHdpZHRoOiA3cmVtO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMHJlbSAycHggMHB4IDBweCByZ2IoMCwgMCwgMCk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2xhbmRpbmctY29udGVudCBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY2LCAwKTtcclxufVxyXG4jbGFuZGluZy1jb250ZW50IGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2FsbW9uO1xyXG59XHJcbiNsYW5kaW5nLWxvZ28ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4jbGFuZGluZy1sb2dvIGltZyB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoKDEwMHZoIC0gdmFyKC0tbmF2YmFyLWhlaWdodCkpIC0gMzUlKTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4vKiBNZW51ICovXHJcbiNtZW51LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4jbWVudS1pdGVtIHtcclxuICAgIG1hcmdpbi1ibG9jazogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgd2lkdGg6IGNsYW1wKDIwMHB4LCA1NTBweCwgODAwcHgpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xyXG59XHJcbiNtZW51LWl0ZW0gaDIge1xyXG4gICAgbWFyZ2luLWJsb2NrOiAwLjVyZW07XHJcbn1cclxuI21lbnUtaXRlbSBmaWd1cmUgaW1nIHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuI21lbnUtaXRlbSBmaWdjYXB0aW9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctaW5saW5lOiA0cmVtO1xyXG59XHJcbiNtZW51LWl0ZW0gdWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgbWFyZ2luLWJsb2NrOiAxcmVtO1xyXG59XHJcbiNtZW51LWl0ZW0gdWwgbGk6bnRoLWNoaWxkKDIpIHtcclxuICAgIGJvcmRlci1pbmxpbmU6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmctaW5saW5lOiA0cmVtO1xyXG59XHJcblxyXG4vKiBDb250YWN0ICovXHJcbiNjb250YWN0LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4jY29udGFjdC1jb250ZW50IGltZyB7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuI2NvbnRhY3QtY29udGVudCBmb3JtIGZpZWxkc2V0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG4jY29udGFjdC1jb250ZW50IGZvcm0gaW5wdXQsXHJcbiNjb250YWN0LWNvbnRlbnQgZm9ybSBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuI2NvbnRhY3QtY29udGVudCBmb3JtIGxhYmVsLFxyXG4jY29udGFjdC1jb250ZW50IGZvcm0gdGV4dGFyZWF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4jY29udGFjdC1jb250ZW50IGZvcm0gZmllbGRzZXR7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XHJcbiAgICBtYXJnaW4tYmxvY2s6IDFyZW07XHJcbn1cclxuI2NvbnRhY3QtY29udGVudCBmb3JtIHRleHRhcmVhIHtcclxuICAgIG1hcmdpbi1pbmxpbmU6IDJyZW07XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcbiNjb250YWN0LWNvbnRlbnQgZm9ybSBidXR0b24ge1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgbWFyZ2luOiAycmVtO1xyXG4gICAgd2lkdGg6IDEycmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgb3JhbmdlIDU1JSwgZ29sZCAsIHllbGxvdyk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYm94LXNoYWRvdzogMHJlbSAycHggMHB4IDBweCByZ2IoMCwgMCwgMCk7XHJcbn1cclxuI3N1Ym1pdC1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAwJSB7b3BhY2l0eTogMDt9XHJcbiAgICAxMDAlIHtvcGFjaXR5OiAxfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7SUFDWiwwQ0FBMEM7QUFDOUM7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrREFBa0Q7SUFDbEQsV0FBVztBQUNmOztBQUVBLFNBQVM7QUFDVDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixvQkFBb0I7QUFDeEI7O0FBRUEsWUFBWTtBQUNaO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0FBQy9CO0FBQ0E7O0lBRUksV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdFQUFnRTtJQUNoRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLElBQUksVUFBVSxDQUFDO0lBQ2YsTUFBTSxVQUFVO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1uYXZiYXItaGVpZ2h0OiA0cmVtO1xcclxcbn1cXHJcXG4qIHtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgIFxcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDMwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1uYXZiYXItaGVpZ2h0KTtcXHJcXG59XFxyXFxuaGVhZGVyID4gaDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcbm5hdiA+IHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcbm5hdiA+IHVsID4gbGkge1xcclxcbiAgICBtYXJnaW4taW5saW5lOiAycmVtO1xcclxcbn1cXHJcXG5uYXYgPiB1bCA+IGxpID4gYSB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xcclxcbn1cXHJcXG5uYXYgPiB1bCA+IGxpID4gYTpob3ZlciB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcbi5hY3RpdmUge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5tYWluIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1uYXZiYXItaGVpZ2h0KSk7XFxyXFxufVxcclxcbiNsYW5kaW5nLWNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4jbGFuZGluZy1jb250ZW50IHAge1xcclxcbiAgICB3aWR0aDogY2xhbXAoNDVjaCwgNzAlLCA3MGNoKTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG4jbGFuZGluZy1jb250ZW50IGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiA3cmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDByZW0gMnB4IDBweCAwcHggcmdiKDAsIDAsIDApO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuI2xhbmRpbmctY29udGVudCBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDApO1xcclxcbn1cXHJcXG4jbGFuZGluZy1jb250ZW50IGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzYWxtb247XFxyXFxufVxcclxcbiNsYW5kaW5nLWxvZ28ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuI2xhbmRpbmctbG9nbyBpbWcge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoKDEwMHZoIC0gdmFyKC0tbmF2YmFyLWhlaWdodCkpIC0gMzUlKTtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIE1lbnUgKi9cXHJcXG4jbWVudS1jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG4jbWVudS1pdGVtIHtcXHJcXG4gICAgbWFyZ2luLWJsb2NrOiAycmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDYwdmg7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCgyMDBweCwgNTUwcHgsIDgwMHB4KTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXHJcXG59XFxyXFxuI21lbnUtaXRlbSBoMiB7XFxyXFxuICAgIG1hcmdpbi1ibG9jazogMC41cmVtO1xcclxcbn1cXHJcXG4jbWVudS1pdGVtIGZpZ3VyZSBpbWcge1xcclxcbiAgICB3aWR0aDogNDUwcHg7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcbiNtZW51LWl0ZW0gZmlnY2FwdGlvbiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDRyZW07XFxyXFxufVxcclxcbiNtZW51LWl0ZW0gdWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBtYXJnaW4tYmxvY2s6IDFyZW07XFxyXFxufVxcclxcbiNtZW51LWl0ZW0gdWwgbGk6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgYm9yZGVyLWlubGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGFjdCAqL1xcclxcbiNjb250YWN0LWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuI2NvbnRhY3QtY29udGVudCBpbWcge1xcclxcbiAgICB3aWR0aDogNDUwcHg7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuI2NvbnRhY3QtY29udGVudCBmb3JtIGZpZWxkc2V0IHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbiNjb250YWN0LWNvbnRlbnQgZm9ybSBpbnB1dCxcXHJcXG4jY29udGFjdC1jb250ZW50IGZvcm0gc2VsZWN0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuI2NvbnRhY3QtY29udGVudCBmb3JtIGxhYmVsLFxcclxcbiNjb250YWN0LWNvbnRlbnQgZm9ybSB0ZXh0YXJlYXtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbiNjb250YWN0LWNvbnRlbnQgZm9ybSBmaWVsZHNldHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcclxcbiAgICBtYXJnaW4tYmxvY2s6IDFyZW07XFxyXFxufVxcclxcbiNjb250YWN0LWNvbnRlbnQgZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IDJyZW07XFxyXFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuI2NvbnRhY3QtY29udGVudCBmb3JtIGJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgbWFyZ2luOiAycmVtO1xcclxcbiAgICB3aWR0aDogMTJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIG9yYW5nZSA1NSUsIGdvbGQgLCB5ZWxsb3cpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDByZW0gMnB4IDBweCAwcHggcmdiKDAsIDAsIDApO1xcclxcbn1cXHJcXG4jc3VibWl0LWJ0biB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxyXFxuICAgIDAlIHtvcGFjaXR5OiAwO31cXHJcXG4gICAgMTAwJSB7b3BhY2l0eTogMX1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgbWFpbi5pZCA9ICdjb250YWN0LWNvbnRlbnQnO1xyXG5cclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nLnNyYyA9IFwiL3NyYy9hc3NldHMvaW1nL2NvbnRhY3QtaW1nLmpwZ1wiO1xyXG4gICAgaW1nLmFsdCA9IFwiRm9vZCBEZWxpdmVyeSBzZXJ2aWNlcyBpbWFnZTogQSBib3ggd2l0aCB0aGUgd29yZHMgY29udGFjdGxlc3MgZGVsaXZlcnkgd3JpdHRlbiBvbiBpdC5cIjtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgY29uc3QgZmllbGRzZXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcclxuICAgIFxyXG4gICAgY29uc3QgbGVnZW5kMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xyXG4gICAgbGVnZW5kMS50ZXh0Q29udGVudCA9IFwiUGVyc29uYWwgRGV0YWlsc1wiO1xyXG4gICAgZmllbGRzZXQxLmFwcGVuZENoaWxkKGxlZ2VuZDEpO1xyXG4gICAgXHJcbiAgICBjb25zdCBmaXJzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIFxyXG4gICAgY29uc3QgbGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsMS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdmaXJzdC1uYW1lJyk7XHJcbiAgICBsYWJlbDEudGV4dENvbnRlbnQgPSBcIkZpcnN0IG5hbWU6XCJcclxuICAgIGZpcnN0TmFtZS5hcHBlbmRDaGlsZChsYWJlbDEpO1xyXG4gICAgY29uc3QgZm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBmbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgZm5hbWUuaWQgPSAnZmlyc3QtbmFtZSc7XHJcbiAgICBmaXJzdE5hbWUuYXBwZW5kQ2hpbGQoZm5hbWUpO1xyXG5cclxuICAgIGZpZWxkc2V0MS5hcHBlbmRDaGlsZChmaXJzdE5hbWUpO1xyXG5cclxuICAgIGNvbnN0IGxhc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGxhYmVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsMi5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsYXN0LW5hbWUnKTtcclxuICAgIGxhYmVsMi50ZXh0Q29udGVudCA9IFwiTGFzdCBuYW1lOlwiXHJcbiAgICBsYXN0TmFtZS5hcHBlbmRDaGlsZChsYWJlbDIpO1xyXG4gICAgY29uc3QgbG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBsbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgbG5hbWUuaWQgPSAnbGFzdC1uYW1lJztcclxuICAgIGxhc3ROYW1lLmFwcGVuZENoaWxkKGxuYW1lKTtcclxuXHJcbiAgICBmaWVsZHNldDEuYXBwZW5kQ2hpbGQobGFzdE5hbWUpO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQxKTtcclxuXHJcbiAgICBjb25zdCBmaWVsZHNldDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgICBjb25zdCBsZWdlbmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XHJcbiAgICBsZWdlbmQyLnRleHRDb250ZW50ID0gXCJNZW51IG9yZGVyXCI7XHJcbiAgICBmaWVsZHNldDIuYXBwZW5kQ2hpbGQobGVnZW5kMik7XHJcblxyXG4gICAgY29uc3Qgb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgbGFiZWwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWwzLnRleHRDb250ZW50ID0gXCJPcmRlclwiO1xyXG4gICAgbGFiZWwzLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm9yZGVyLWl0ZW1cIik7XHJcbiAgICBvcmRlci5hcHBlbmRDaGlsZChsYWJlbDMpO1xyXG5cclxuICAgIGNvbnN0IG9yZGVySXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgb3JkZXJJdGVtcy5uYW1lID0gXCJvcmRlci1pdGVtXCI7XHJcbiAgICBvcmRlckl0ZW1zLmlkID0gXCJvcmRlci1pdGVtXCI7XHJcbiAgICBmb3IgKGNvbnN0IG9wdGlvbnMgb2YgW1wiRnJpZWQgcmljZVwiLCBcIkZyaWVkIHlhbVwiLCBcIk5vb2RsZXNcIl0pIHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvbnM7XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9ucztcclxuICAgICAgICBvcmRlckl0ZW1zLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9XHJcbiAgICBvcmRlci5hcHBlbmRDaGlsZChvcmRlckl0ZW1zKTtcclxuICAgIGZpZWxkc2V0Mi5hcHBlbmRDaGlsZChvcmRlcik7XHJcblxyXG4gICAgY29uc3Qgb3JkZXJUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGxhYmVsNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsNC50ZXh0Q29udGVudCA9IFwiT3JkZXIgVHlwZVwiO1xyXG4gICAgbGFiZWw0LnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm9yZGVyLXR5cGVcIik7XHJcbiAgICBvcmRlci5hcHBlbmRDaGlsZChsYWJlbDQpO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1UeXBlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICBpdGVtVHlwZXMubmFtZSA9IFwib3JkZXItdHlwZVwiO1xyXG4gICAgaXRlbVR5cGVzLmlkID0gXCJvcmRlci10eXBlXCI7XHJcbiAgICBmb3IgKGNvbnN0IG9wdGlvbnMgb2YgW1wiTm9ybWFsXCIsIFwiRGVsdXhlXCIsIFwiQXNzb3J0ZWRcIl0pIHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvbnM7XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9ucztcclxuICAgICAgICBpdGVtVHlwZXMuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH1cclxuICAgIG9yZGVyVHlwZS5hcHBlbmRDaGlsZChpdGVtVHlwZXMpO1xyXG5cclxuICAgIGZpZWxkc2V0Mi5hcHBlbmRDaGlsZChvcmRlclR5cGUpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldDIpO1xyXG5cclxuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgdGV4dGFyZWEubmFtZSA9IFwibm90ZVwiO1xyXG4gICAgdGV4dGFyZWEuaWQgPSBcIm5vdGVcIjtcclxuICAgIHRleHRhcmVhLmNvbHMgPSA1MDtcclxuICAgIHRleHRhcmVhLnJvd3MgPSAxMDtcclxuICAgIHRleHRhcmVhLnBsYWNlaG9sZGVyID0gXCJBbnkgYWxsZXJnaWVzIG9yIHRoaW5ncyB0byBub3RlLi4uXCI7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRleHRhcmVhKTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3VibWl0RGl2LmlkID0gXCJzdWJtaXQtYnRuXCI7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUGxhY2Ugb3JkZXJcIjtcclxuICAgIGJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcclxuICAgIHN1Ym1pdERpdi5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdERpdik7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICAgIHJldHVybiBtYWluO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBjb25zdCBidXR0b25zID0gW107XHJcbiAgICBcclxuICAgIGNvbnN0IGxhbmRpbmdDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsYW5kaW5nQ29udGVudC5pZCA9IFwibGFuZGluZy1jb250ZW50XCI7XHJcblxyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSBgQXJlIHlvdSBjcmF2aW5nIHRhc3R5IGFuZCBhZmZvcmRhYmxlIGZvb2Q/IFxyXG4gICAgRG8geW91IGxvdmUgZnJpZWQgcmljZT8gQXJlIHlvdSBsb29raW5nIGZvciBzb21ldGhpbmcgY3Jpc3B5P1xyXG4gICAgTG9vayBubyBmdXJ0aGVyIHRoYW4gTmFwcHkncyBIb21lIEZvb2QhXHJcbiAgICBcXG5cXG5cclxuICAgIERvbid0IG1pc3Mgb3V0IG9uIHRoZSBjaGFuY2UgdG8gZW5qb3kgZGVsaWNpb3VzIGZvb2QgYXQgYSBcclxuICAgIGdyZWF0IHByaWNlLiBIZWFkIHRvIE5hcHB5J3MgSG9tZSBGb29kIHRvZGF5IWBcclxuXHJcbiAgICBsYW5kaW5nQ29udGVudC5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5cclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBbXCJNZW51XCIsIFwiQ29udGFjdCB1c1wiXSkge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gaXRlbTtcclxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgYnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgbGFuZGluZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcblxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChsYW5kaW5nQ29udGVudCk7XHJcblxyXG4gICAgY29uc3QgbGFuZGluZ0xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxhbmRpbmdMb2dvLmlkID0gJ2xhbmRpbmctbG9nbyc7XHJcblxyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuc3JjID0gXCIvc3JjL2Fzc2V0cy9pbWcvbGFuZGluZy1pbWcuanBnXCI7XHJcbiAgICBpbWcuYWx0ID0gXCJBIGRlbGljaW91cyBwbGF0ZSBvZiBmcmllZCByaWNlLlwiO1xyXG5cclxuICAgIGxhbmRpbmdMb2dvLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGxhbmRpbmdMb2dvKTtcclxuXHJcbiAgICByZXR1cm4gWyBtYWluLCAuLi5bYnV0dG9uc11dO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSgpIHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBtYWluLmlkID0gJ21lbnUtY29udGVudCc7XHJcblxyXG4gICAgY29uc3QgbWVudUl0ZW1zID0ge1xyXG4gICAgICAgIFwiRnJpZWQgcmljZVwiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkZyaWVkIHJpY2VcIixcclxuICAgICAgICAgICAgXCJzcmNcIjogXCIvc3JjL2Fzc2V0cy9pbWcvZnJpZWQtcmljZS5qcGdcIixcclxuICAgICAgICAgICAgXCJjYXB0aW9uXCI6IFwiRnJpZWQgcmljZSB3aXRoIGdyZWVuIHBlcHBlciwgc2FsYWQsIGtldGNodXAgYW5kIG9uZSBjaG9pY2Ugb2YgcHJvdGVpbihlZ2csIHNhdXNhZ2UsIGNoaWNrZW4pLlwiLFxyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIFwiRnJpZWQgeWFtXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRnJpZWQgeWFtXCIsXHJcbiAgICAgICAgICAgIFwic3JjXCI6IFwiL3NyYy9hc3NldHMvaW1nL2ZyaWVkLXlhbS5qcGdcIixcclxuICAgICAgICAgICAgXCJjYXB0aW9uXCI6IFwiRnJpZWQgeWFtIHdpdGggZ3JlZW4gcGVwcGVyLCBrZXRjaHVwIGFuZCBvbmUgY2hvaWNlIG9mIHByb3RlaW4oZWdnLCBzYXVzYWdlLCBjaGlja2VuKS5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiTm9vZGxlc1wiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk5vb2RsZXNcIixcclxuICAgICAgICAgICAgXCJzcmNcIjogXCIvc3JjL2Fzc2V0cy9pbWcvbm9vZGxlcy5qcGdcIixcclxuICAgICAgICAgICAgXCJjYXB0aW9uXCI6IFwiTm9vZGxlcyB3aXRoIHNhdXNhZ2VzIGFuZCBlaXRoZXIgZWdnIG9yIGNoaWNrZW4uXCIsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZW51SXRlbXMpKSB7XHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtZW51SXRlbS5pZCA9ICdtZW51LWl0ZW0nO1xyXG5cclxuICAgICAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgaDIudGV4dENvbnRlbnQgPSB2YWx1ZS5uYW1lO1xyXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGgyKTtcclxuXHJcbiAgICAgICAgY29uc3QgZmlndXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmlndXJlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1nLnNyYyA9IHZhbHVlLnNyYztcclxuICAgICAgICBpbWcuYWx0ID0gdmFsdWUubmFtZTtcclxuICAgICAgICBmaWd1cmUuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbiAgICAgICAgY29uc3QgZmlnY2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ2NhcHRpb24nKTtcclxuICAgICAgICBmaWdjYXB0aW9uLnRleHRDb250ZW50ID0gdmFsdWUuY2FwdGlvbjtcclxuICAgICAgICBmaWd1cmUuYXBwZW5kQ2hpbGQoZmlnY2FwdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZmlndXJlKTtcclxuXHJcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbXMgb2YgW1tcIk5vcm1hbFwiLCBcIiQ1LjAwXCJdLCBbXCJEZWx1eGVcIiwgXCIkMTAuMDBcIl0sIFtcIkFzc29ydGVkXCIsIFwiJDE1LjAwXCJdXSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChtZW51SXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1haW47XHJcbiAgICBcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcihsaW5rID0gXCJIb21lXCIpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICBjb25zdCBsaW5rcyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgaDEuaWQgPSBcImxvZ29cIjtcclxuICAgIGgxLnRleHRDb250ZW50ID0gXCJOYXBweSdzXCI7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xyXG5cclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdKSB7XHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGEuaWQgPSBpdGVtLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgYS50ZXh0Q29udGVudCA9IGl0ZW07XHJcbiAgICAgICAgaWYgKGl0ZW0gPT0gbGluaykge1xyXG4gICAgICAgICAgICBhLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpbmtzLnB1c2goYSk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcclxuXHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgcmV0dXJuIFtoZWFkZXIsIC4uLltsaW5rc11dO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgTmF2YmFyIGZyb20gXCIuL25hdmJhclwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQgXCIuLy4uL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgXCIuLy4uL2Fzc2V0cy9pbWcvY29udGFjdC1pbWcuanBnXCI7XHJcbmltcG9ydCBcIi4vLi4vYXNzZXRzL2ltZy9mcmllZC1yaWNlLmpwZ1wiO1xyXG5pbXBvcnQgXCIuLy4uL2Fzc2V0cy9pbWcvZnJpZWQteWFtLmpwZ1wiO1xyXG5pbXBvcnQgXCIuLy4uL2Fzc2V0cy9pbWcvbGFuZGluZy1pbWcuanBnXCI7XHJcbmltcG9ydCBcIi4vLi4vYXNzZXRzL2ltZy9ub29kbGVzLmpwZ1wiO1xyXG5cclxuY29uc3QgZG9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG5jb25zdCBbbmF2YmFyLCBsaW5rc10gPSBOYXZiYXIoKTtcclxuY29uc3QgW2hvbWUsIGJ1dHRvbnNdID0gSG9tZSgpO1xyXG5jb25zdCBtZW51ID0gTWVudSgpO1xyXG5jb25zdCBjb250YWN0ID0gQ29udGFjdCgpO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcclxuY29uc29sZS5sb2cobGlua3MpO1xyXG5jb250ZW50LmFwcGVuZENoaWxkKGhvbWUpO1xyXG5kb2MuYXBwZW5kQ2hpbGQobmF2YmFyKTtcclxuXHJcbmRvYy5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHJcblxyXG5jb25zdCBnb3RvSG9tZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZm9yIChjb25zdCBsaW5rIG9mIGxpbmtzKSB7XHJcbiAgICAgICAgaWYgKGxpbmsuaWQgPT0gXCJob21lXCIpIHtcclxuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbiAgICBkb2MucmVtb3ZlQ2hpbGQoZG9jLmxhc3RDaGlsZCk7XHJcbiAgICBkb2MuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbn1cclxuXHJcbmNvbnN0IGdvdG9NZW51ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBmb3IgKGNvbnN0IGxpbmsgb2YgbGlua3MpIHtcclxuICAgICAgICBpZiAobGluay5pZCA9PSBcIm1lbnVcIikge1xyXG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcclxuICAgIGRvYy5yZW1vdmVDaGlsZChkb2MubGFzdENoaWxkKTtcclxuICAgIGRvYy5hcHBlbmRDaGlsZChjb250ZW50KTtcclxufVxyXG5cclxuY29uc3QgZ290b0NvbnRhY3QgPSBmdW5jdGlvbigpIHtcclxuICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xyXG4gICAgICAgIGlmIChsaW5rLmlkID09IFwiY29udGFjdFwiKSB7XHJcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG4gICAgZG9jLnJlbW92ZUNoaWxkKGRvYy5sYXN0Q2hpbGQpO1xyXG4gICAgZG9jLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG59XHJcblxyXG5jb25zdCBbSG9tZXBhZ2UsIE1lbnVwYWdlLCBDb250YWN0cGFnZV0gPSBsaW5rcztcclxuSG9tZXBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvdG9Ib21lKTtcclxuTWVudXBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvdG9NZW51KTtcclxuQ29udGFjdHBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvdG9Db250YWN0KTtcclxuXHJcbmNvbnN0IFtNZW51YnRuLCBDb250YWN0YnRuXSA9IGJ1dHRvbnM7XHJcbk1lbnVidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvdG9NZW51KTtcclxuQ29udGFjdGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ290b0NvbnRhY3QpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==