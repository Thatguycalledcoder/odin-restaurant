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
    animation: fadeIn 400ms ease-in-out;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;AACzB;AACA;IACI,8BAA8B;IAC9B,2BAA2B;IAC3B,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;AACA;IACI,gBAAgB;AACpB;AACA;IACI,mCAAmC;AACvC;AACA;IACI,wBAAwB;IACxB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,4BAA4B;AAChC;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,qBAAqB;IACrB,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,UAAU;IACV,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,sBAAsB;AAC1B;AACA;IACI,4BAA4B;AAChC;AACA;IACI,4BAA4B;AAChC;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,0CAA0C;AAC9C;AACA;IACI,UAAU;IACV,aAAa;IACb,eAAe;IACf,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,qBAAqB;AACzB;AACA;IACI,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,qBAAqB;IACrB,YAAY;IACZ,yCAAyC;IACzC,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,sBAAsB;IACtB,eAAe;AACnB;AACA;IACI,mCAAmC;AACvC;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,kDAAkD;IAClD,WAAW;AACf;;AAEA,SAAS;AACT;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;IACjB,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,iCAAiC;IACjC,aAAa;IACb,mBAAmB;IACnB,kCAAkC;AACtC;AACA;IACI,oBAAoB;AACxB;AACA;IACI,YAAY;IACZ,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,qBAAqB;IACrB,6BAA6B;IAC7B,kBAAkB;AACtB;AACA;IACI,8BAA8B;IAC9B,oBAAoB;AACxB;;AAEA,YAAY;AACZ;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,2BAA2B;AAC/B;AACA;;IAEI,WAAW;IACX,eAAe;AACnB;AACA;;IAEI,cAAc;AAClB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,oBAAoB;IACpB,kBAAkB;AACtB;AACA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,gEAAgE;IAChE,YAAY;IACZ,mBAAmB;IACnB,yCAAyC;AAC7C;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,IAAI,UAAU,CAAC;IACf,MAAM,UAAU;AACpB","sourcesContent":[":root {\r\n    --navbar-height: 4rem;\r\n}\r\n* {\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;    \r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nbody {\r\n    overflow: hidden;\r\n}\r\n#content {\r\n    animation: fadeIn 400ms ease-in-out;\r\n}\r\nheader {\r\n    background-color: orange;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: var(--navbar-height);\r\n}\r\nheader > h1 {\r\n    text-align: center;\r\n    margin-left: 2rem;\r\n    padding-left: 2rem;\r\n}\r\nnav > ul {\r\n    list-style-type: none;\r\n    display: flex;\r\n    margin-right: 1rem;\r\n}\r\nnav > ul > li {\r\n    margin-inline: 2rem;\r\n}\r\nnav > ul > li > a {\r\n    color: red;\r\n    font-weight: bold;\r\n    font-size: 1.2rem;\r\n    cursor: pointer;\r\n    padding-bottom: 0.2rem;\r\n}\r\nnav > ul > li > a:hover {\r\n    border-bottom: 2px solid red;\r\n}\r\n.active {\r\n    border-bottom: 2px solid red;\r\n}\r\nmain {\r\n    background-color: gold;\r\n    display: flex;\r\n    width: 100vw;\r\n    height: calc(100vh - var(--navbar-height));\r\n}\r\n#landing-content {\r\n    width: 50%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    align-content: center;\r\n}\r\n#landing-content p {\r\n    width: clamp(45ch, 70%, 70ch);\r\n    margin-bottom: 3rem;\r\n    font-size: 1rem;\r\n    letter-spacing: 1px;\r\n}\r\n#landing-content button {\r\n    width: 7rem;\r\n    height: 3rem;\r\n    font-size: 1rem;\r\n    border-radius: 0.4rem;\r\n    border: none;\r\n    box-shadow: 0rem 2px 0px 0px rgb(0, 0, 0);\r\n    margin-right: 1rem;\r\n    color: white;\r\n    font-weight: bold;\r\n    letter-spacing: 0.1rem;\r\n    cursor: pointer;\r\n}\r\n#landing-content button:first-of-type {\r\n    background-color: rgba(255, 166, 0);\r\n}\r\n#landing-content button:last-of-type {\r\n    background-color: salmon;\r\n}\r\n#landing-logo {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n#landing-logo img {\r\n    height: calc((100vh - var(--navbar-height)) - 35%);\r\n    width: auto;\r\n}\r\n\r\n/* Menu */\r\n#menu-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    flex-wrap: nowrap;\r\n    overflow: auto;\r\n}\r\n#menu-item {\r\n    margin-block: 2rem;\r\n    text-align: center;\r\n    background-color: white;\r\n    height: 60vh;\r\n    width: clamp(200px, 550px, 800px);\r\n    display: grid;\r\n    grid-auto-flow: row;\r\n    grid-template-rows: repeat(4, 1fr);\r\n}\r\n#menu-item h2 {\r\n    margin-block: 0.5rem;\r\n}\r\n#menu-item figure img {\r\n    width: 450px;\r\n    height: 300px;\r\n}\r\n#menu-item figcaption {\r\n    text-align: center;\r\n    padding-inline: 4rem;\r\n}\r\n#menu-item ul {\r\n    display: flex;\r\n    list-style-type: none;\r\n    justify-content: space-evenly;\r\n    margin-block: 1rem;\r\n}\r\n#menu-item ul li:nth-child(2) {\r\n    border-inline: 1px solid black;\r\n    padding-inline: 4rem;\r\n}\r\n\r\n/* Contact */\r\n#contact-content {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n#contact-content img {\r\n    width: 450px;\r\n    height: auto;\r\n}\r\n#contact-content form fieldset {\r\n    border: none;\r\n    border-top: 2px solid black;\r\n}\r\n#contact-content form input,\r\n#contact-content form select {\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n}\r\n#contact-content form label,\r\n#contact-content form textarea{\r\n    display: block;\r\n}\r\n#contact-content form fieldset{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 1rem;\r\n    padding: 0.5rem 2rem;\r\n    margin-block: 1rem;\r\n}\r\n#contact-content form textarea {\r\n    margin-inline: 2rem;\r\n    resize: vertical;\r\n    padding: 0.5rem;\r\n}\r\n#contact-content form button {\r\n    height: 3rem;\r\n    margin: 2rem;\r\n    width: 12rem;\r\n    font-size: 1rem;\r\n    letter-spacing: 2px;\r\n    color: white;\r\n    background: linear-gradient(to right, orange 55%, gold , yellow);\r\n    border: none;\r\n    border-radius: 1rem;\r\n    box-shadow: 0rem 2px 0px 0px rgb(0, 0, 0);\r\n}\r\n#submit-btn {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    0% {opacity: 0;}\r\n    100% {opacity: 1}\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _assets_img_contact_img_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/img/contact-img.jpg */ "./src/assets/img/contact-img.jpg");


function Contact() {
    const main = document.createElement('main');
    main.id = 'contact-content';

    const img = document.createElement('img');
    img.src = _assets_img_contact_img_jpg__WEBPACK_IMPORTED_MODULE_0__;
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
/* harmony import */ var _assets_img_landing_img_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/img/landing-img.jpg */ "./src/assets/img/landing-img.jpg");


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
    img.src = _assets_img_landing_img_jpg__WEBPACK_IMPORTED_MODULE_0__;
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
/* harmony import */ var _assets_img_fried_rice_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/img/fried-rice.jpg */ "./src/assets/img/fried-rice.jpg");
/* harmony import */ var _assets_img_fried_yam_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assets/img/fried-yam.jpg */ "./src/assets/img/fried-yam.jpg");
/* harmony import */ var _assets_img_noodles_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../assets/img/noodles.jpg */ "./src/assets/img/noodles.jpg");




function Menu() {
    const main = document.createElement('main');
    main.id = 'menu-content';

    const menuItems = {
        "Fried rice": {
            "name": "Fried rice",
            "src": _assets_img_fried_rice_jpg__WEBPACK_IMPORTED_MODULE_0__,
            "caption": "Fried rice with green pepper, salad, ketchup and one choice of protein(egg, sausage, chicken).",
        }, 
        "Fried yam": {
            "name": "Fried yam",
            "src": _assets_img_fried_yam_jpg__WEBPACK_IMPORTED_MODULE_1__,
            "caption": "Fried yam with green pepper, ketchup and one choice of protein(egg, sausage, chicken).",
        },
        "Noodles": {
            "name": "Noodles",
            "src": _assets_img_noodles_jpg__WEBPACK_IMPORTED_MODULE_2__,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLFVBQVU7QUFDVixDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sVUFB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QyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQThCO0FBQ0o7QUFDQTtBQUNNO0FBQ1I7QUFDeEI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1EQUFNO0FBQzlCLHdCQUF3QixpREFBSTtBQUM1QixhQUFhLGlEQUFJO0FBQ2pCLGdCQUFnQixvREFBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdC9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zY3JpcHQvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc2NyaXB0L21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdC9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zY3JpcHQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAgIC0tbmF2YmFyLWhlaWdodDogNHJlbTtcclxufVxyXG4qIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5ib2R5IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuI2NvbnRlbnQge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gNDAwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1uYXZiYXItaGVpZ2h0KTtcclxufVxyXG5oZWFkZXIgPiBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxufVxyXG5uYXYgPiB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbm5hdiA+IHVsID4gbGkge1xyXG4gICAgbWFyZ2luLWlubGluZTogMnJlbTtcclxufVxyXG5uYXYgPiB1bCA+IGxpID4gYSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XHJcbn1cclxubmF2ID4gdWwgPiBsaSA+IGE6aG92ZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcclxufVxyXG4uYWN0aXZlIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQ7XHJcbn1cclxubWFpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLW5hdmJhci1oZWlnaHQpKTtcclxufVxyXG4jbGFuZGluZy1jb250ZW50IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuI2xhbmRpbmctY29udGVudCBwIHtcclxuICAgIHdpZHRoOiBjbGFtcCg0NWNoLCA3MCUsIDcwY2gpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuI2xhbmRpbmctY29udGVudCBidXR0b24ge1xyXG4gICAgd2lkdGg6IDdyZW07XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwcmVtIDJweCAwcHggMHB4IHJnYigwLCAwLCAwKTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jbGFuZGluZy1jb250ZW50IGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDApO1xyXG59XHJcbiNsYW5kaW5nLWNvbnRlbnQgYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzYWxtb247XHJcbn1cclxuI2xhbmRpbmctbG9nbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiNsYW5kaW5nLWxvZ28gaW1nIHtcclxuICAgIGhlaWdodDogY2FsYygoMTAwdmggLSB2YXIoLS1uYXZiYXItaGVpZ2h0KSkgLSAzNSUpO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi8qIE1lbnUgKi9cclxuI21lbnUtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbiNtZW51LWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJsb2NrOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICB3aWR0aDogY2xhbXAoMjAwcHgsIDU1MHB4LCA4MDBweCk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XHJcbn1cclxuI21lbnUtaXRlbSBoMiB7XHJcbiAgICBtYXJnaW4tYmxvY2s6IDAuNXJlbTtcclxufVxyXG4jbWVudS1pdGVtIGZpZ3VyZSBpbWcge1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG4jbWVudS1pdGVtIGZpZ2NhcHRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDRyZW07XHJcbn1cclxuI21lbnUtaXRlbSB1bCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBtYXJnaW4tYmxvY2s6IDFyZW07XHJcbn1cclxuI21lbnUtaXRlbSB1bCBsaTpudGgtY2hpbGQoMikge1xyXG4gICAgYm9yZGVyLWlubGluZTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDRyZW07XHJcbn1cclxuXHJcbi8qIENvbnRhY3QgKi9cclxuI2NvbnRhY3QtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiNjb250YWN0LWNvbnRlbnQgaW1nIHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4jY29udGFjdC1jb250ZW50IGZvcm0gZmllbGRzZXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbiNjb250YWN0LWNvbnRlbnQgZm9ybSBpbnB1dCxcclxuI2NvbnRhY3QtY29udGVudCBmb3JtIHNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG4jY29udGFjdC1jb250ZW50IGZvcm0gbGFiZWwsXHJcbiNjb250YWN0LWNvbnRlbnQgZm9ybSB0ZXh0YXJlYXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiNjb250YWN0LWNvbnRlbnQgZm9ybSBmaWVsZHNldHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcclxuICAgIG1hcmdpbi1ibG9jazogMXJlbTtcclxufVxyXG4jY29udGFjdC1jb250ZW50IGZvcm0gdGV4dGFyZWEge1xyXG4gICAgbWFyZ2luLWlubGluZTogMnJlbTtcclxuICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuI2NvbnRhY3QtY29udGVudCBmb3JtIGJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbiAgICB3aWR0aDogMTJyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBvcmFuZ2UgNTUlLCBnb2xkICwgeWVsbG93KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBib3gtc2hhZG93OiAwcmVtIDJweCAwcHggMHB4IHJnYigwLCAwLCAwKTtcclxufVxyXG4jc3VibWl0LWJ0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIDAlIHtvcGFjaXR5OiAwO31cclxuICAgIDEwMCUge29wYWNpdHk6IDF9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3Nc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QVU7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLW5hdmJhci1oZWlnaHQ6IDRyZW07XFxyXFxufVxcclxcbioge1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgXFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gNDAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLW5hdmJhci1oZWlnaHQpO1xcclxcbn1cXHJcXG5oZWFkZXIgPiBoMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG59XFxyXFxubmF2ID4gdWwge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxubmF2ID4gdWwgPiBsaSB7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IDJyZW07XFxyXFxufVxcclxcbm5hdiA+IHVsID4gbGkgPiBhIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XFxyXFxufVxcclxcbm5hdiA+IHVsID4gbGkgPiBhOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuLmFjdGl2ZSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcbm1haW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLW5hdmJhci1oZWlnaHQpKTtcXHJcXG59XFxyXFxuI2xhbmRpbmctY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbiNsYW5kaW5nLWNvbnRlbnQgcCB7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCg0NWNoLCA3MCUsIDcwY2gpO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcbiNsYW5kaW5nLWNvbnRlbnQgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDdyZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHJlbSAycHggMHB4IDBweCByZ2IoMCwgMCwgMCk7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4jbGFuZGluZy1jb250ZW50IGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCk7XFxyXFxufVxcclxcbiNsYW5kaW5nLWNvbnRlbnQgYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjtcXHJcXG59XFxyXFxuI2xhbmRpbmctbG9nbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4jbGFuZGluZy1sb2dvIGltZyB7XFxyXFxuICAgIGhlaWdodDogY2FsYygoMTAwdmggLSB2YXIoLS1uYXZiYXItaGVpZ2h0KSkgLSAzNSUpO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVudSAqL1xcclxcbiNtZW51LWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcbiNtZW51LWl0ZW0ge1xcclxcbiAgICBtYXJnaW4tYmxvY2s6IDJyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNjB2aDtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDIwMHB4LCA1NTBweCwgODAwcHgpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xcclxcbn1cXHJcXG4jbWVudS1pdGVtIGgyIHtcXHJcXG4gICAgbWFyZ2luLWJsb2NrOiAwLjVyZW07XFxyXFxufVxcclxcbiNtZW51LWl0ZW0gZmlndXJlIGltZyB7XFxyXFxuICAgIHdpZHRoOiA0NTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuI21lbnUtaXRlbSBmaWdjYXB0aW9uIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogNHJlbTtcXHJcXG59XFxyXFxuI21lbnUtaXRlbSB1bCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIG1hcmdpbi1ibG9jazogMXJlbTtcXHJcXG59XFxyXFxuI21lbnUtaXRlbSB1bCBsaTpudGgtY2hpbGQoMikge1xcclxcbiAgICBib3JkZXItaW5saW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250YWN0ICovXFxyXFxuI2NvbnRhY3QtY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4jY29udGFjdC1jb250ZW50IGltZyB7XFxyXFxuICAgIHdpZHRoOiA0NTBweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG4jY29udGFjdC1jb250ZW50IGZvcm0gZmllbGRzZXQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuI2NvbnRhY3QtY29udGVudCBmb3JtIGlucHV0LFxcclxcbiNjb250YWN0LWNvbnRlbnQgZm9ybSBzZWxlY3Qge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG4jY29udGFjdC1jb250ZW50IGZvcm0gbGFiZWwsXFxyXFxuI2NvbnRhY3QtY29udGVudCBmb3JtIHRleHRhcmVhe1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuI2NvbnRhY3QtY29udGVudCBmb3JtIGZpZWxkc2V0e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XFxyXFxuICAgIG1hcmdpbi1ibG9jazogMXJlbTtcXHJcXG59XFxyXFxuI2NvbnRhY3QtY29udGVudCBmb3JtIHRleHRhcmVhIHtcXHJcXG4gICAgbWFyZ2luLWlubGluZTogMnJlbTtcXHJcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG4jY29udGFjdC1jb250ZW50IGZvcm0gYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBtYXJnaW46IDJyZW07XFxyXFxuICAgIHdpZHRoOiAxMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgb3JhbmdlIDU1JSwgZ29sZCAsIHllbGxvdyk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHJlbSAycHggMHB4IDBweCByZ2IoMCwgMCwgMCk7XFxyXFxufVxcclxcbiNzdWJtaXQtYnRuIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXHJcXG4gICAgMCUge29wYWNpdHk6IDA7fVxcclxcbiAgICAxMDAlIHtvcGFjaXR5OiAxfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNvbnRhY3RJbWcgZnJvbSBcIi4vLi4vYXNzZXRzL2ltZy9jb250YWN0LWltZy5qcGdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgbWFpbi5pZCA9ICdjb250YWN0LWNvbnRlbnQnO1xyXG5cclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nLnNyYyA9IGNvbnRhY3RJbWc7XHJcbiAgICBpbWcuYWx0ID0gXCJGb29kIERlbGl2ZXJ5IHNlcnZpY2VzIGltYWdlOiBBIGJveCB3aXRoIHRoZSB3b3JkcyBjb250YWN0bGVzcyBkZWxpdmVyeSB3cml0dGVuIG9uIGl0LlwiO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChpbWcpO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBjb25zdCBmaWVsZHNldDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xyXG4gICAgXHJcbiAgICBjb25zdCBsZWdlbmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XHJcbiAgICBsZWdlbmQxLnRleHRDb250ZW50ID0gXCJQZXJzb25hbCBEZXRhaWxzXCI7XHJcbiAgICBmaWVsZHNldDEuYXBwZW5kQ2hpbGQobGVnZW5kMSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGZpcnN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgXHJcbiAgICBjb25zdCBsYWJlbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWwxLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2ZpcnN0LW5hbWUnKTtcclxuICAgIGxhYmVsMS50ZXh0Q29udGVudCA9IFwiRmlyc3QgbmFtZTpcIlxyXG4gICAgZmlyc3ROYW1lLmFwcGVuZENoaWxkKGxhYmVsMSk7XHJcbiAgICBjb25zdCBmbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGZuYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICBmbmFtZS5pZCA9ICdmaXJzdC1uYW1lJztcclxuICAgIGZpcnN0TmFtZS5hcHBlbmRDaGlsZChmbmFtZSk7XHJcblxyXG4gICAgZmllbGRzZXQxLmFwcGVuZENoaWxkKGZpcnN0TmFtZSk7XHJcblxyXG4gICAgY29uc3QgbGFzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgbGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWwyLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2xhc3QtbmFtZScpO1xyXG4gICAgbGFiZWwyLnRleHRDb250ZW50ID0gXCJMYXN0IG5hbWU6XCJcclxuICAgIGxhc3ROYW1lLmFwcGVuZENoaWxkKGxhYmVsMik7XHJcbiAgICBjb25zdCBsbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGxuYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICBsbmFtZS5pZCA9ICdsYXN0LW5hbWUnO1xyXG4gICAgbGFzdE5hbWUuYXBwZW5kQ2hpbGQobG5hbWUpO1xyXG5cclxuICAgIGZpZWxkc2V0MS5hcHBlbmRDaGlsZChsYXN0TmFtZSk7XHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldDEpO1xyXG5cclxuICAgIGNvbnN0IGZpZWxkc2V0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcclxuICAgIGNvbnN0IGxlZ2VuZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcclxuICAgIGxlZ2VuZDIudGV4dENvbnRlbnQgPSBcIk1lbnUgb3JkZXJcIjtcclxuICAgIGZpZWxkc2V0Mi5hcHBlbmRDaGlsZChsZWdlbmQyKTtcclxuXHJcbiAgICBjb25zdCBvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBsYWJlbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbDMudGV4dENvbnRlbnQgPSBcIk9yZGVyXCI7XHJcbiAgICBsYWJlbDMuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwib3JkZXItaXRlbVwiKTtcclxuICAgIG9yZGVyLmFwcGVuZENoaWxkKGxhYmVsMyk7XHJcblxyXG4gICAgY29uc3Qgb3JkZXJJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICBvcmRlckl0ZW1zLm5hbWUgPSBcIm9yZGVyLWl0ZW1cIjtcclxuICAgIG9yZGVySXRlbXMuaWQgPSBcIm9yZGVyLWl0ZW1cIjtcclxuICAgIGZvciAoY29uc3Qgb3B0aW9ucyBvZiBbXCJGcmllZCByaWNlXCIsIFwiRnJpZWQgeWFtXCIsIFwiTm9vZGxlc1wiXSkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9ucztcclxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25zO1xyXG4gICAgICAgIG9yZGVySXRlbXMuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH1cclxuICAgIG9yZGVyLmFwcGVuZENoaWxkKG9yZGVySXRlbXMpO1xyXG4gICAgZmllbGRzZXQyLmFwcGVuZENoaWxkKG9yZGVyKTtcclxuXHJcbiAgICBjb25zdCBvcmRlclR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgbGFiZWw0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWw0LnRleHRDb250ZW50ID0gXCJPcmRlciBUeXBlXCI7XHJcbiAgICBsYWJlbDQuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwib3JkZXItdHlwZVwiKTtcclxuICAgIG9yZGVyLmFwcGVuZENoaWxkKGxhYmVsNCk7XHJcblxyXG4gICAgY29uc3QgaXRlbVR5cGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgIGl0ZW1UeXBlcy5uYW1lID0gXCJvcmRlci10eXBlXCI7XHJcbiAgICBpdGVtVHlwZXMuaWQgPSBcIm9yZGVyLXR5cGVcIjtcclxuICAgIGZvciAoY29uc3Qgb3B0aW9ucyBvZiBbXCJOb3JtYWxcIiwgXCJEZWx1eGVcIiwgXCJBc3NvcnRlZFwiXSkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9ucztcclxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25zO1xyXG4gICAgICAgIGl0ZW1UeXBlcy5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfVxyXG4gICAgb3JkZXJUeXBlLmFwcGVuZENoaWxkKGl0ZW1UeXBlcyk7XHJcblxyXG4gICAgZmllbGRzZXQyLmFwcGVuZENoaWxkKG9yZGVyVHlwZSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0Mik7XHJcblxyXG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICB0ZXh0YXJlYS5uYW1lID0gXCJub3RlXCI7XHJcbiAgICB0ZXh0YXJlYS5pZCA9IFwibm90ZVwiO1xyXG4gICAgdGV4dGFyZWEuY29scyA9IDUwO1xyXG4gICAgdGV4dGFyZWEucm93cyA9IDEwO1xyXG4gICAgdGV4dGFyZWEucGxhY2Vob2xkZXIgPSBcIkFueSBhbGxlcmdpZXMgb3IgdGhpbmdzIHRvIG5vdGUuLi5cIjtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzdWJtaXREaXYuaWQgPSBcInN1Ym1pdC1idG5cIjtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJQbGFjZSBvcmRlclwiO1xyXG4gICAgYnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgc3VibWl0RGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICBcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0RGl2KTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gICAgcmV0dXJuIG1haW47XHJcbn0iLCJpbXBvcnQgbGFuZGluZ0ltZyBmcm9tIFwiLi8uLi9hc3NldHMvaW1nL2xhbmRpbmctaW1nLmpwZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBjb25zdCBidXR0b25zID0gW107XHJcbiAgICBcclxuICAgIGNvbnN0IGxhbmRpbmdDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsYW5kaW5nQ29udGVudC5pZCA9IFwibGFuZGluZy1jb250ZW50XCI7XHJcblxyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSBgQXJlIHlvdSBjcmF2aW5nIHRhc3R5IGFuZCBhZmZvcmRhYmxlIGZvb2Q/IFxyXG4gICAgRG8geW91IGxvdmUgZnJpZWQgcmljZT8gQXJlIHlvdSBsb29raW5nIGZvciBzb21ldGhpbmcgY3Jpc3B5P1xyXG4gICAgTG9vayBubyBmdXJ0aGVyIHRoYW4gTmFwcHkncyBIb21lIEZvb2QhXHJcbiAgICBcXG5cXG5cclxuICAgIERvbid0IG1pc3Mgb3V0IG9uIHRoZSBjaGFuY2UgdG8gZW5qb3kgZGVsaWNpb3VzIGZvb2QgYXQgYSBcclxuICAgIGdyZWF0IHByaWNlLiBIZWFkIHRvIE5hcHB5J3MgSG9tZSBGb29kIHRvZGF5IWBcclxuXHJcbiAgICBsYW5kaW5nQ29udGVudC5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5cclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBbXCJNZW51XCIsIFwiQ29udGFjdCB1c1wiXSkge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gaXRlbTtcclxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgYnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgbGFuZGluZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcblxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChsYW5kaW5nQ29udGVudCk7XHJcblxyXG4gICAgY29uc3QgbGFuZGluZ0xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxhbmRpbmdMb2dvLmlkID0gJ2xhbmRpbmctbG9nbyc7XHJcblxyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuc3JjID0gbGFuZGluZ0ltZztcclxuICAgIGltZy5hbHQgPSBcIkEgZGVsaWNpb3VzIHBsYXRlIG9mIGZyaWVkIHJpY2UuXCI7XHJcblxyXG4gICAgbGFuZGluZ0xvZ28uYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQobGFuZGluZ0xvZ28pO1xyXG5cclxuICAgIHJldHVybiBbIG1haW4sIC4uLltidXR0b25zXV07XHJcbn0iLCJpbXBvcnQgZnJpZWRSaWNlIGZyb20gXCIuLy4uL2Fzc2V0cy9pbWcvZnJpZWQtcmljZS5qcGdcIjtcclxuaW1wb3J0IGZyaWVkWWFtIGZyb20gXCIuLy4uL2Fzc2V0cy9pbWcvZnJpZWQteWFtLmpwZ1wiO1xyXG5pbXBvcnQgbm9vZGxlcyBmcm9tIFwiLi8uLi9hc3NldHMvaW1nL25vb2RsZXMuanBnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgIG1haW4uaWQgPSAnbWVudS1jb250ZW50JztcclxuXHJcbiAgICBjb25zdCBtZW51SXRlbXMgPSB7XHJcbiAgICAgICAgXCJGcmllZCByaWNlXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRnJpZWQgcmljZVwiLFxyXG4gICAgICAgICAgICBcInNyY1wiOiBmcmllZFJpY2UsXHJcbiAgICAgICAgICAgIFwiY2FwdGlvblwiOiBcIkZyaWVkIHJpY2Ugd2l0aCBncmVlbiBwZXBwZXIsIHNhbGFkLCBrZXRjaHVwIGFuZCBvbmUgY2hvaWNlIG9mIHByb3RlaW4oZWdnLCBzYXVzYWdlLCBjaGlja2VuKS5cIixcclxuICAgICAgICB9LCBcclxuICAgICAgICBcIkZyaWVkIHlhbVwiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkZyaWVkIHlhbVwiLFxyXG4gICAgICAgICAgICBcInNyY1wiOiBmcmllZFlhbSxcclxuICAgICAgICAgICAgXCJjYXB0aW9uXCI6IFwiRnJpZWQgeWFtIHdpdGggZ3JlZW4gcGVwcGVyLCBrZXRjaHVwIGFuZCBvbmUgY2hvaWNlIG9mIHByb3RlaW4oZWdnLCBzYXVzYWdlLCBjaGlja2VuKS5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiTm9vZGxlc1wiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk5vb2RsZXNcIixcclxuICAgICAgICAgICAgXCJzcmNcIjogbm9vZGxlcyxcclxuICAgICAgICAgICAgXCJjYXB0aW9uXCI6IFwiTm9vZGxlcyB3aXRoIHNhdXNhZ2VzIGFuZCBlaXRoZXIgZWdnIG9yIGNoaWNrZW4uXCIsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZW51SXRlbXMpKSB7XHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtZW51SXRlbS5pZCA9ICdtZW51LWl0ZW0nO1xyXG5cclxuICAgICAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgaDIudGV4dENvbnRlbnQgPSB2YWx1ZS5uYW1lO1xyXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGgyKTtcclxuXHJcbiAgICAgICAgY29uc3QgZmlndXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmlndXJlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1nLnNyYyA9IHZhbHVlLnNyYztcclxuICAgICAgICBpbWcuYWx0ID0gdmFsdWUubmFtZTtcclxuICAgICAgICBmaWd1cmUuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbiAgICAgICAgY29uc3QgZmlnY2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ2NhcHRpb24nKTtcclxuICAgICAgICBmaWdjYXB0aW9uLnRleHRDb250ZW50ID0gdmFsdWUuY2FwdGlvbjtcclxuICAgICAgICBmaWd1cmUuYXBwZW5kQ2hpbGQoZmlnY2FwdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZmlndXJlKTtcclxuXHJcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbXMgb2YgW1tcIk5vcm1hbFwiLCBcIiQ1LjAwXCJdLCBbXCJEZWx1eGVcIiwgXCIkMTAuMDBcIl0sIFtcIkFzc29ydGVkXCIsIFwiJDE1LjAwXCJdXSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChtZW51SXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1haW47XHJcbiAgICBcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcihsaW5rID0gXCJIb21lXCIpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICBjb25zdCBsaW5rcyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgaDEuaWQgPSBcImxvZ29cIjtcclxuICAgIGgxLnRleHRDb250ZW50ID0gXCJOYXBweSdzXCI7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xyXG5cclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdKSB7XHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGEuaWQgPSBpdGVtLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgYS50ZXh0Q29udGVudCA9IGl0ZW07XHJcbiAgICAgICAgaWYgKGl0ZW0gPT0gbGluaykge1xyXG4gICAgICAgICAgICBhLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpbmtzLnB1c2goYSk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcclxuXHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgcmV0dXJuIFtoZWFkZXIsIC4uLltsaW5rc11dO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgTmF2YmFyIGZyb20gXCIuL25hdmJhclwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQgXCIuLy4uL3N0eWxlLmNzc1wiO1xyXG5cclxuY29uc3QgZG9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG5jb25zdCBbbmF2YmFyLCBsaW5rc10gPSBOYXZiYXIoKTtcclxuY29uc3QgW2hvbWUsIGJ1dHRvbnNdID0gSG9tZSgpO1xyXG5jb25zdCBtZW51ID0gTWVudSgpO1xyXG5jb25zdCBjb250YWN0ID0gQ29udGFjdCgpO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcclxuY29uc29sZS5sb2cobGlua3MpO1xyXG5jb250ZW50LmFwcGVuZENoaWxkKGhvbWUpO1xyXG5kb2MuYXBwZW5kQ2hpbGQobmF2YmFyKTtcclxuXHJcbmRvYy5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHJcblxyXG5jb25zdCBnb3RvSG9tZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZm9yIChjb25zdCBsaW5rIG9mIGxpbmtzKSB7XHJcbiAgICAgICAgaWYgKGxpbmsuaWQgPT0gXCJob21lXCIpIHtcclxuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbiAgICBkb2MucmVtb3ZlQ2hpbGQoZG9jLmxhc3RDaGlsZCk7XHJcbiAgICBkb2MuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbn1cclxuXHJcbmNvbnN0IGdvdG9NZW51ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBmb3IgKGNvbnN0IGxpbmsgb2YgbGlua3MpIHtcclxuICAgICAgICBpZiAobGluay5pZCA9PSBcIm1lbnVcIikge1xyXG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcclxuICAgIGRvYy5yZW1vdmVDaGlsZChkb2MubGFzdENoaWxkKTtcclxuICAgIGRvYy5hcHBlbmRDaGlsZChjb250ZW50KTtcclxufVxyXG5cclxuY29uc3QgZ290b0NvbnRhY3QgPSBmdW5jdGlvbigpIHtcclxuICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xyXG4gICAgICAgIGlmIChsaW5rLmlkID09IFwiY29udGFjdFwiKSB7XHJcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG4gICAgZG9jLnJlbW92ZUNoaWxkKGRvYy5sYXN0Q2hpbGQpO1xyXG4gICAgZG9jLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG59XHJcblxyXG5jb25zdCBbSG9tZXBhZ2UsIE1lbnVwYWdlLCBDb250YWN0cGFnZV0gPSBsaW5rcztcclxuSG9tZXBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvdG9Ib21lKTtcclxuTWVudXBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvdG9NZW51KTtcclxuQ29udGFjdHBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvdG9Db250YWN0KTtcclxuXHJcbmNvbnN0IFtNZW51YnRuLCBDb250YWN0YnRuXSA9IGJ1dHRvbnM7XHJcbk1lbnVidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvdG9NZW51KTtcclxuQ29udGFjdGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ290b0NvbnRhY3QpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==