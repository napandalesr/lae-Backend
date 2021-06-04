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

/***/ "./src/class/userImpDao.ts":
/*!*********************************!*\
  !*** ./src/class/userImpDao.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _databases_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../databases/collection */ \"./src/databases/collection.ts\");\n\r\nvar userImpDao = /** @class */ (function () {\r\n    function userImpDao() {\r\n        this.objColletion = new _databases_collection__WEBPACK_IMPORTED_MODULE_0__.default();\r\n    }\r\n    userImpDao.prototype.create = function (user) {\r\n        this.objColletion.create('Users', user);\r\n    };\r\n    return userImpDao;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userImpDao);\r\n\n\n//# sourceURL=webpack://lae-Backend/./src/class/userImpDao.ts?");

/***/ }),

/***/ "./src/databases/collection.ts":
/*!*************************************!*\
  !*** ./src/databases/collection.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _databases_conexion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../databases/conexion */ \"./src/databases/conexion.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\nvar collection = /** @class */ (function () {\r\n    function collection() {\r\n        var _this = this;\r\n        this.create = function (nameCollection, user) { return __awaiter(_this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/];\r\n            });\r\n        }); };\r\n        this.delete = function (nameCollection, id) { return __awaiter(_this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/];\r\n            });\r\n        }); };\r\n        this.update = function (nameCollection, data, id) { return __awaiter(_this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/];\r\n            });\r\n        }); };\r\n        this.get = function (nameCollection, id) { return __awaiter(_this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/];\r\n            });\r\n        }); };\r\n        this.getAll = function (nameCollection) { return __awaiter(_this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/];\r\n            });\r\n        }); };\r\n        this.firestore = new _databases_conexion__WEBPACK_IMPORTED_MODULE_0__.conexion();\r\n    }\r\n    return collection;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (collection);\r\n\n\n//# sourceURL=webpack://lae-Backend/./src/databases/collection.ts?");

/***/ }),

/***/ "./src/databases/conexion.ts":
/*!***********************************!*\
  !*** ./src/databases/conexion.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conexion\": () => (/* binding */ conexion)\n/* harmony export */ });\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n\r\nvar conexion = /** @class */ (function () {\r\n    function conexion() {\r\n        var _this = this;\r\n        this.firebaseConfig = {\r\n            apiKey: \"AIzaSyDXmmC_DYfFVEHsY4foIS52k9GkanoEpkE\",\r\n            authDomain: \"lae-pruebafrontend.firebaseapp.com\",\r\n            databaseURL: \"https://lae-pruebafrontend-default-rtdb.firebaseio.com/\",\r\n            projectId: \"lae-pruebafrontend\",\r\n            storageBucket: \"lae-pruebafrontend.appspot.com\",\r\n            messagingSenderId: \"425262631385\",\r\n            appId: \"1:425262631385:web:b4fd5bf4c5b2443fc131c8\",\r\n        };\r\n        this.initial = function () {\r\n            return firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(_this.firebaseConfig);\r\n        };\r\n    }\r\n    return conexion;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://lae-Backend/./src/databases/conexion.ts?");

/***/ }),

/***/ "./src/router/api.ts":
/*!***************************!*\
  !*** ./src/router/api.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _class_userImpDao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../class/userImpDao */ \"./src/class/userImpDao.ts\");\n\r\n\r\n\r\nvar Router = /** @class */ (function () {\r\n    function Router(server) {\r\n        var _this = this;\r\n        var router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\r\n        router.get('/', function (req, res) {\r\n            res.json({ message: 'Hello worl' });\r\n        });\r\n        router.get('/users', function (req, res) {\r\n            _this.name = \"Neider\";\r\n            _this.lastName = 'Renteria';\r\n            _this.email = 'no';\r\n            var data = {\r\n                name: \"Neider\",\r\n                lastName: 'Renteria',\r\n                email: 'no'\r\n            };\r\n            var s = new _class_userImpDao__WEBPACK_IMPORTED_MODULE_2__.default();\r\n            s.create(data);\r\n            res.json({ message: 0 });\r\n        });\r\n        router.post('/users', function (req, res) {\r\n            res.json({ message: 'Users' });\r\n        });\r\n        router.get('/users/:id', function (req, res) {\r\n            res.json({ message: 'Users' + req.params.id });\r\n        });\r\n        router.put('/users/:id', function (req, res) {\r\n            res.json({ message: 'Users' + req.params.id });\r\n        });\r\n        router.options('*', cors__WEBPACK_IMPORTED_MODULE_1___default()());\r\n        server.use('/api/', router);\r\n    }\r\n    return Router;\r\n}());\r\n;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);\r\n\n\n//# sourceURL=webpack://lae-Backend/./src/router/api.ts?");

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

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("firebase");;

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