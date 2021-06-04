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

/***/ "./api/swagger.json":
/*!**************************!*\
  !*** ./api/swagger.json ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"openapi\":\"3.0.0\",\"info\":{\"version\":\"1.0.0\",\"title\":\"Prueba Front\",\"description\":\"Prueba Front\",\"license\":{\"name\":\"MIT\",\"url\":\"http://localhost:3000/\"}},\"servers\":[{\"url\":\"/api/\",\"description\":\"Api\"}],\"tags\":[{\"name\":\"LAE\",\"description\":\"API para prueba FrontEnd\"}],\"consumes\":[\"application/json\"],\"produces\":[\"application/json\"],\"paths\":{\"/users\":{\"get\":{\"tags\":[\"Users\"],\"summary\":\"Obtener todos los usuarios\",\"responses\":{\"200\":{\"description\":\"OK\"}}},\"post\":{\"tags\":[\"Users\"],\"summary\":\"Crear un nuevo usuario\",\"requestBody\":{\"description\":\"Object\",\"required\":true},\"produces\":[\"application/json\"],\"responses\":{\"200\":{\"description\":\"OK\"},\"400\":{\"description\":\"Failed. Datos incorrectos.\"}}}},\"/users/{id}\":{\"parameters\":[{\"name\":\"id\",\"in\":\"path\",\"required\":true,\"description\":\"ID del usuario\",\"type\":\"string\"}],\"get\":{\"tags\":[\"Users\"],\"summary\":\"Obtener un usuario\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"description\":\"Obtener un usuario por ID\"}],\"responses\":{\"200\":{\"description\":\"OK\"},\"404\":{\"description\":\"Failed. Usuario no encontrado.\"}}},\"put\":{\"summary\":\"Actualizar usuario\",\"tags\":[\"Users\"],\"requestBody\":{\"description\":\"Object\",\"required\":true},\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"description\":\"Actualizar usuario\"}],\"responses\":{\"200\":{\"description\":\"OK\"},\"400\":{\"description\":\"Failed. Usuario no encontrado.\"},\"404\":{\"description\":\"Failed. Usuario no existe.\"}}},\"delete\":{\"summary\":\"Eliminar usuario con id\",\"tags\":[\"Users\"],\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"description\":\"Eliminar un usuario\"}],\"responses\":{\"200\":{\"description\":\"OK\"},\"404\":{\"description\":\"Failed. El usuario no existe.\"}}}}}}');\n\n//# sourceURL=webpack://lae-Backend/./api/swagger.json?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("var _api_swagger_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swagger-ui-express */ \"swagger-ui-express\");\n/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swagger_ui_express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _router_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router/api */ \"./src/router/api.ts\");\n/* harmony import */ var _api_swagger_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/swagger.json */ \"./api/swagger.json\");\n\r\n\r\n\r\n\r\n\r\nvar App = /** @class */ (function () {\r\n    function App() {\r\n        var _this = this;\r\n        this.Start = function (port) {\r\n            return new Promise(function (resolve, reject) {\r\n                _this.httpServer.listen(port, function () {\r\n                    resolve(port);\r\n                })\r\n                    .on('error', function (err) { return reject(err); });\r\n            });\r\n        };\r\n        this.httpServer = express__WEBPACK_IMPORTED_MODULE_0__();\r\n        this.httpServer.use(body_parser__WEBPACK_IMPORTED_MODULE_1__.urlencoded({ extended: true }));\r\n        this.httpServer.use(body_parser__WEBPACK_IMPORTED_MODULE_1__.json());\r\n        new _router_api__WEBPACK_IMPORTED_MODULE_3__.default(this.httpServer);\r\n        this.httpServer.use('/swagger', (swagger_ui_express__WEBPACK_IMPORTED_MODULE_2___default().serve), swagger_ui_express__WEBPACK_IMPORTED_MODULE_2___default().setup(/*#__PURE__*/ (_api_swagger_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache || (_api_swagger_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache = __webpack_require__.t(_api_swagger_json__WEBPACK_IMPORTED_MODULE_4__, 2)))));\r\n    }\r\n    return App;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\r\n\n\n//# sourceURL=webpack://lae-Backend/./src/app.ts?");

/***/ }),

/***/ "./src/router/api.ts":
/*!***************************!*\
  !*** ./src/router/api.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nvar Router = /** @class */ (function () {\r\n    function Router(server) {\r\n        var router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\r\n        router.get('/', function (req, res) {\r\n            res.json({ message: 'Hello worl' });\r\n        });\r\n        router.get('/users', function (req, res) {\r\n            res.json({ message: 'Users' });\r\n        });\r\n        router.post('/users', function (req, res) {\r\n            res.json({ message: 'Users' });\r\n        });\r\n        router.get('/users/:id', function (req, res) {\r\n            res.json({ message: 'Users' + req.params.id });\r\n        });\r\n        router.put('/users/:id', function (req, res) {\r\n            res.json({ message: 'Users' + req.params.id });\r\n        });\r\n        router.options('*', cors__WEBPACK_IMPORTED_MODULE_1___default()());\r\n        server.use('/api/', router);\r\n    }\r\n    return Router;\r\n}());\r\n;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);\r\n\n\n//# sourceURL=webpack://lae-Backend/./src/router/api.ts?");

/***/ }),

/***/ "./src/server/www.ts":
/*!***************************!*\
  !*** ./src/server/www.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ \"./src/app.ts\");\n/* provided dependency */ var console = __webpack_require__(/*! console-browserify */ \"console-browserify\");\n/* provided dependency */ var process = __webpack_require__(/*! process/browser */ \"process/browser\");\n\r\nvar port = parseInt(\"MISSING_ENV_VAR\".PORT || '3000');\r\nvar server = new _app__WEBPACK_IMPORTED_MODULE_0__.default().Start(port)\r\n    .then(function (port) { return console.log(\"Server running on port \" + port); })\r\n    .catch(function (error) {\r\n    console.log(error);\r\n    process.exit(1);\r\n});\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (server);\r\n\n\n//# sourceURL=webpack://lae-Backend/./src/server/www.ts?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@babel/polyfill");;

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");;

/***/ }),

/***/ "console-browserify":
/*!*************************************!*\
  !*** external "console-browserify" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("console-browserify");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "process/browser":
/*!**********************************!*\
  !*** external "process/browser" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("process/browser");;

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("swagger-ui-express");;

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("@babel/polyfill");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/www.ts");
/******/ 	
/******/ })()
;