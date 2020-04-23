/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/database.json":
/*!******************************!*\
  !*** ./config/database.json ***!
  \******************************/
/*! exports provided: development, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"development\\\":{\\\"client\\\":\\\"mysql\\\",\\\"connection\\\":{\\\"host\\\":\\\"first-crud-db\\\",\\\"user\\\":\\\"root\\\",\\\"password\\\":\\\"toor\\\",\\\"database\\\":\\\"database\\\"},\\\"migrations\\\":{\\\"tableName\\\":\\\"migrations\\\",\\\"directory\\\":\\\"../migrations\\\"},\\\"seeds\\\":{\\\"directory\\\":\\\"../seeds\\\"}}}\");\n\n//# sourceURL=webpack:///./config/database.json?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar database_1 = __webpack_require__(/*! ./lib/database */ \"./src/lib/database.ts\");\nvar app = express();\napp.use(express.json());\nvar _a = process.env.PORT, PORT = _a === void 0 ? 3000 : _a;\n;\napp.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        res.json({\n            message: 'hello world',\n        });\n        return [2 /*return*/];\n    });\n}); });\n// Group Index\napp.get('/groups', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var groups;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, database_1.database('groups').select()];\n            case 1:\n                groups = _a.sent();\n                res.json(groups);\n                return [2 /*return*/];\n        }\n    });\n}); });\n// Group Show\napp.get('/groups/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var group, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, database_1.database('groups').select().where({ id: req.params.id }).first()];\n            case 1:\n                group = _a.sent();\n                if (group) {\n                    res.json(group);\n                }\n                else {\n                    res.sendStatus(404);\n                }\n                return [3 /*break*/, 3];\n            case 2:\n                error_1 = _a.sent();\n                console.log(error_1);\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\n// Group Create\napp.post('/groups', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var group, error_2;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                group = {\n                    id: req.body.id,\n                    name: req.body.name,\n                    description: req.body.description,\n                    location: req.body.location,\n                    maximalSize: req.body.maximalSize\n                };\n                return [4 /*yield*/, database_1.database('groups').insert(group)];\n            case 1:\n                _a.sent();\n                res.sendStatus(200);\n                return [3 /*break*/, 3];\n            case 2:\n                error_2 = _a.sent();\n                console.log(error_2);\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\n// Group Delete\napp[\"delete\"]('/groups/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var group, error_3;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 5, , 6]);\n                return [4 /*yield*/, database_1.database('groups').select().where({ id: req.params.id }).first()];\n            case 1:\n                group = _a.sent();\n                if (!group) return [3 /*break*/, 3];\n                return [4 /*yield*/, database_1.database('groups')[\"delete\"]().where({ id: req.params.id })];\n            case 2:\n                _a.sent();\n                res.sendStatus(204);\n                return [3 /*break*/, 4];\n            case 3:\n                res.sendStatus(404);\n                _a.label = 4;\n            case 4: return [3 /*break*/, 6];\n            case 5:\n                error_3 = _a.sent();\n                console.log(error_3);\n                res.sendStatus(500);\n                return [3 /*break*/, 6];\n            case 6: return [2 /*return*/];\n        }\n    });\n}); });\n// Group Update\napp.put('/groups/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var group, newGroup, error_4;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, database_1.database('groups').select().where({ id: req.params.id }).first()];\n            case 1:\n                group = _a.sent();\n                _a.label = 2;\n            case 2:\n                _a.trys.push([2, 6, , 7]);\n                if (!group) return [3 /*break*/, 4];\n                newGroup = {\n                    id: req.body.id,\n                    name: req.body.name,\n                    description: req.body.description,\n                    location: req.body.location,\n                    maximalSize: req.body.maximalSize\n                };\n                return [4 /*yield*/, database_1.database('groups').update(newGroup).where({ id: req.params.id })];\n            case 3:\n                _a.sent();\n                res.sendStatus(201);\n                return [3 /*break*/, 5];\n            case 4:\n                res.sendStatus(404);\n                _a.label = 5;\n            case 5: return [3 /*break*/, 7];\n            case 6:\n                error_4 = _a.sent();\n                console.log(error_4);\n                res.sendStatus(500);\n                return [3 /*break*/, 7];\n            case 7: return [2 /*return*/];\n        }\n    });\n}); });\n// Index\napp.get('/user', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var users;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, database_1.database('users').select()];\n            case 1:\n                users = _a.sent();\n                res.json(users);\n                return [2 /*return*/];\n        }\n    });\n}); });\n// Show\napp.get('/user/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var user, error_5;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, database_1.database('users').select().where({ id: req.params.id }).first()];\n            case 1:\n                user = _a.sent();\n                if (user) {\n                    res.json(user);\n                }\n                else {\n                    res.sendStatus(404);\n                }\n                return [3 /*break*/, 3];\n            case 2:\n                error_5 = _a.sent();\n                console.log(error_5);\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\n// Create\napp.post('/user', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var user, error_6;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                user = {\n                    firstName: req.body.firstName,\n                    lastName: req.body.lastName,\n                    email: req.body.email,\n                    age: req.body.age\n                };\n                return [4 /*yield*/, database_1.database('users').insert(user)];\n            case 1:\n                _a.sent();\n                res.sendStatus(200);\n                return [3 /*break*/, 3];\n            case 2:\n                error_6 = _a.sent();\n                console.log(error_6);\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\n// Delete\napp[\"delete\"]('/user/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var user, error_7;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 5, , 6]);\n                return [4 /*yield*/, database_1.database('users').select().where({ id: req.params.id }).first()];\n            case 1:\n                user = _a.sent();\n                if (!user) return [3 /*break*/, 3];\n                return [4 /*yield*/, database_1.database('users')[\"delete\"]().where({ id: req.params.id })];\n            case 2:\n                _a.sent();\n                res.sendStatus(204);\n                return [3 /*break*/, 4];\n            case 3:\n                res.sendStatus(404);\n                _a.label = 4;\n            case 4: return [3 /*break*/, 6];\n            case 5:\n                error_7 = _a.sent();\n                console.log(error_7);\n                res.sendStatus(500);\n                return [3 /*break*/, 6];\n            case 6: return [2 /*return*/];\n        }\n    });\n}); });\n// Update\napp.put('/user/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var user, newUser, error_8;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, database_1.database('users').select().where({ id: req.params.id }).first()];\n            case 1:\n                user = _a.sent();\n                _a.label = 2;\n            case 2:\n                _a.trys.push([2, 6, , 7]);\n                if (!user) return [3 /*break*/, 4];\n                newUser = {\n                    firstName: req.body.firstName,\n                    lastName: req.body.lastName,\n                    email: req.body.email,\n                    age: req.body.age\n                };\n                return [4 /*yield*/, database_1.database('users').update(newUser).where({ id: req.params.id })];\n            case 3:\n                _a.sent();\n                res.sendStatus(201);\n                return [3 /*break*/, 5];\n            case 4:\n                res.sendStatus(404);\n                _a.label = 5;\n            case 5: return [3 /*break*/, 7];\n            case 6:\n                error_8 = _a.sent();\n                console.log(error_8);\n                res.sendStatus(500);\n                return [3 /*break*/, 7];\n            case 7: return [2 /*return*/];\n        }\n    });\n}); });\napp.listen(PORT, function () {\n    console.log(\"server started at http://localhost:\" + PORT);\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/lib/database.ts":
/*!*****************************!*\
  !*** ./src/lib/database.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar Knex = __webpack_require__(/*! knex */ \"knex\");\nvar configs = __webpack_require__(/*! ../../config/database.json */ \"./config/database.json\");\nvar config = configs[\"development\" || false];\nexports.database = Knex(config);\n\n\n//# sourceURL=webpack:///./src/lib/database.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"knex\");\n\n//# sourceURL=webpack:///external_%22knex%22?");

/***/ })

/******/ });