/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: #f8f4f4;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 500px;\\r\\n  font-family: 'Source Sans Pro', sans-serif;\\r\\n  font-weight: 400;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background: #eeecec;\\r\\n  border: 1px solid #928e8e;\\r\\n  box-shadow: #999797 5px 5px 5px;\\r\\n  border-radius: 4px;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.task-group {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  border: 1px solid #f8f4f4;\\r\\n}\\r\\n\\r\\n.header-list {\\r\\n  border-top: 2px solid #f8f4f4;\\r\\n}\\r\\n\\r\\n.arrow-left {\\r\\n  font-size: 10px;\\r\\n}\\r\\n\\r\\n.optionBtn {\\r\\n  width: 10%;\\r\\n  text-align: end;\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n#input-task {\\r\\n  font-size: 17px;\\r\\n  border: 0;\\r\\n  outline: 0;\\r\\n  width: 100%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.task-lister {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.task-lister li {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.task-list {\\r\\n  border-bottom: 2px solid #f8f4f4;\\r\\n}\\r\\n\\r\\n.selected {\\r\\n  background: rgb(214, 214, 150);\\r\\n}\\r\\n\\r\\n.task-div {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.label {\\r\\n  width: 90%;\\r\\n  float: right;\\r\\n  padding: 10px;\\r\\n  outline: 0;\\r\\n}\\r\\n\\r\\n.task-list-item {\\r\\n  padding: 2px 15px 0 15px;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.line-through {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.clear {\\r\\n  padding: 20px;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n#clear-btn {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n#clear-btn:hover {\\r\\n  color: blue;\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_TaskClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/TaskClass.js */ \"./src/modules/TaskClass.js\");\n/* harmony import */ var _modules_displaytask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displaytask.js */ \"./src/modules/displaytask.js\");\n/* harmony import */ var _modules_addtask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/addtask.js */ \"./src/modules/addtask.js\");\n/* harmony import */ var _modules_updatecomplete_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/updatecomplete.js */ \"./src/modules/updatecomplete.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst inputTask = document.querySelector('#input-task');\r\nconst taskListPlaceholder = document.querySelector('.task-lister');\r\n\r\n(0,_modules_displaytask_js__WEBPACK_IMPORTED_MODULE_2__.displayList)();\r\n(0,_modules_updatecomplete_js__WEBPACK_IMPORTED_MODULE_4__.updateCompletedDisplay)();\r\n\r\n// Execute a function when the user presses a key on the keyboard\r\ninputTask.addEventListener('keypress', (event) => {\r\n  // If the user presses the \"Enter\" key on the keyboard\r\n  if (event.key === 'Enter') {\r\n    const toDoListData = JSON.parse(window.localStorage.getItem('taskData') || '[]');\r\n    // Cancel the default action, if needed\r\n    event.preventDefault();\r\n    const index = toDoListData.length + 1;\r\n    const toDoClass = new _modules_TaskClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](inputTask.value.trim(), false, index);\r\n    (0,_modules_addtask_js__WEBPACK_IMPORTED_MODULE_3__.addTask)(toDoClass);\r\n    taskListPlaceholder.innerHTML = '';\r\n    (0,_modules_displaytask_js__WEBPACK_IMPORTED_MODULE_2__.displayList)();\r\n    inputTask.value = '';\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/TaskClass.js":
/*!**********************************!*\
  !*** ./src/modules/TaskClass.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskClass)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\nclass TaskClass {\r\n  constructor(description, completed, index) {\r\n    this.description = description;\r\n    this.completed = completed;\r\n    this.index = index;\r\n  }\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/TaskClass.js?");

/***/ }),

/***/ "./src/modules/addtask.js":
/*!********************************!*\
  !*** ./src/modules/addtask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nconst addTask = (taskObject) => {\n  const listOfTask = JSON.parse(window.localStorage.getItem('taskData') || '[]');\n  listOfTask.push(taskObject);\n  window.localStorage.setItem('taskData', JSON.stringify(listOfTask));\n};\n\n//# sourceURL=webpack://to-do-list/./src/modules/addtask.js?");

/***/ }),

/***/ "./src/modules/displaytask.js":
/*!************************************!*\
  !*** ./src/modules/displaytask.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayList\": () => (/* binding */ displayList)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/modules/todo.js\");\n/* harmony import */ var _updatecomplete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updatecomplete.js */ \"./src/modules/updatecomplete.js\");\n/* eslint-disable import/prefer-default-export */\n/* eslint-disable no-restricted-syntax */\n\n\n\nconst displayList = () => {\n  const listItemObject = JSON.parse(window.localStorage.getItem('taskData') || '[]');\n  for (let list = 0; list < listItemObject.length; list += 1) {\n    const listPlaceholder = document.querySelector('.task-lister');\n    const element = document.createElement('li');\n    element.classList.add('task-list');\n    element.innerHTML = `\n                    <div class=\"task-inner-box\"  id=\"${listItemObject[list].index}\">\n                      <div class=\"task-list-item\">\n                        <div class=\"task-div line-through ${listItemObject[list].index}\">\n                            <input class=\"checkbox ${listItemObject[list].index}\" type=\"checkbox\"/>\n                            <div id=\"${listItemObject[list].index}\" class=\"label\">${listItemObject[list].description}</div>\n                          </div>\n                          <div class=\"optionBtn editBtn ${listItemObject[list].index}\" id=\"${listItemObject[list].index}\">\n                          <i class=\"opt bi bi-three-dots-vertical\"></i>\n                          </div>\n                          <div class=\"optionBtn deleteBtn removeBtn ${listItemObject[list].index} hidden\" id=\"${listItemObject[list].index}\">\n                          <i class=\"bi bi-trash-fill\"></i>\n                          </div>\n                      </div>\n                      </div>\n                  `;\n    listPlaceholder.appendChild(element);\n  }\n  const editBtn = document.querySelectorAll('.editBtn');\n  const removeBtn = document.querySelectorAll('.removeBtn');\n  const taskInnerBox = document.querySelectorAll('.task-inner-box');\n  const label = document.querySelectorAll('.label');\n  const taskListPlaceholder = document.querySelector('.task-lister');\n\n  const clearSelection = () => {\n    for (const boxClassList of [...Object(taskInnerBox)]) {\n      if (boxClassList.classList.contains('selected')) {\n        boxClassList.classList.remove('selected');\n      }\n    }\n    for (const btn of [...Object(removeBtn)]) {\n      btn.classList.add('hidden');\n    }\n    for (const btn of [...Object(editBtn)]) {\n      btn.classList.remove('hidden');\n    }\n  };\n\n  editBtn.forEach((btn) => {\n    btn.addEventListener('click', () => {\n      const indexEdit = parseInt(btn.id, 10) - 1;\n      // if (indexEdit < 0) { indexEdit = 1; }\n      btn.classList.add('hidden');\n      removeBtn[indexEdit].classList.remove('hidden');\n    });\n  });\n\n  function resetIndex(objectListIndex) {\n    let sum = 0;\n    for (const indexData of [...objectListIndex]) {\n      sum += 1;\n      indexData.index = sum;\n    }\n    window.localStorage.setItem('taskData', JSON.stringify(objectListIndex));\n  }\n\n  const list = JSON.parse(window.localStorage.getItem('taskData'));\n  removeBtn.forEach((btn) => {\n    btn.addEventListener('click', () => {\n      const id = parseInt(btn.id, 10) - 1;\n      list.splice(id, 1);\n      resetIndex(list);\n      taskListPlaceholder.innerHTML = '';\n      displayList();\n    });\n  });\n\n  taskInnerBox.forEach((box) => {\n    box.addEventListener('click', () => {\n      clearSelection(taskInnerBox);\n      box.classList.add('selected');\n      const id = parseInt(box.id, 10) - 1;\n      removeBtn[id].classList.remove('hidden');\n      editBtn[id].classList.add('hidden');\n    });\n  });\n\n  label.forEach((lbl) => {\n    lbl.addEventListener('dblclick', () => {\n      lbl.contentEditable = 'true';\n    });\n    lbl.addEventListener('keypress', (event) => {\n      if (event.key === 'Enter') {\n        lbl.contentEditable = 'false';\n        const str = lbl.textContent;\n        let id = lbl.id - 1;\n        if (id < 0) { id = 0; }\n        _todo_js__WEBPACK_IMPORTED_MODULE_0__.toDoListData[id].description = str;\n        window.localStorage.setItem('taskData', JSON.stringify(_todo_js__WEBPACK_IMPORTED_MODULE_0__.toDoListData));\n        taskListPlaceholder.innerHTML = '';\n        displayList();\n      }\n    });\n  });\n\n  // remove selection color styling upon clicking anywhere\n\n  function updateCompletedData(numberIndex, completedMark) {\n    listItemObject[numberIndex].completed = completedMark;\n    window.localStorage.setItem('taskData', JSON.stringify(listItemObject));\n    (0,_updatecomplete_js__WEBPACK_IMPORTED_MODULE_1__.updateCompletedDisplay)();\n  }\n\n  const checkbox = document.querySelectorAll('.checkbox');\n  let indexCheckBox = 0;\n  while (indexCheckBox < checkbox.length) {\n    checkbox[indexCheckBox].addEventListener('change', (e) => {\n      if (e.target.checked) {\n        // get the index class of the clicked checkbox and convert to integer\n        let number = parseInt(e.target.classList[1], 10) - 1;\n        if (number < 0) { number = 0; }\n        updateCompletedData(number, true);\n      } else {\n        let number = parseInt(e.target.classList[1], 10) - 1;\n        if (number < 0) { number = 0; }\n        updateCompletedData(number, false);\n      }\n    });\n    indexCheckBox += 1;\n  }\n};\n\n//# sourceURL=webpack://to-do-list/./src/modules/displaytask.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toDoListData\": () => (/* binding */ toDoListData)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nconst toDoListData = JSON.parse(window.localStorage.getItem('taskData') || '[]');\n\n//# sourceURL=webpack://to-do-list/./src/modules/todo.js?");

/***/ }),

/***/ "./src/modules/updatecomplete.js":
/*!***************************************!*\
  !*** ./src/modules/updatecomplete.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateCompletedDisplay\": () => (/* binding */ updateCompletedDisplay)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\n/* eslint-disable import/prefer-default-export */\r\nfunction updateCompletedDisplay() {\r\n  const checkbox = document.querySelectorAll('.checkbox');\r\n  const label = document.querySelectorAll('.label');\r\n  const listItemObject = JSON.parse(window.localStorage.getItem('taskData') || '[]');\r\n  // eslint-disable-next-line no-restricted-syntax\r\n  for (const element of [...listItemObject]) {\r\n    if (element.completed === true) {\r\n      const id = parseInt(element.index, 10) - 1;\r\n      label[id].classList.add('line-through');\r\n      checkbox[id].setAttribute('checked', 'checked');\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/updatecomplete.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;