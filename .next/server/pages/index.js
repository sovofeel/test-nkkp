module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api */ \"./services/api.tsx\");\n\nvar _jsxFileName = \"/Users/ars/Desktop/sandbox/nakukop-test/pages/index.tsx\";\n\nconst api = new _services_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nfunction Home() {\n  console.log(api.products());\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: \"123\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJhcGkiLCJBcGkiLCJIb21lIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxHQUFHLEdBQUcsSUFBSUMscURBQUosRUFBWjtBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFDN0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixHQUFHLENBQUNLLFFBQUosRUFBWjtBQUdBLHNCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFHRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcGkgZnJvbSAnLi4vc2VydmljZXMvYXBpJ1xuXG5jb25zdCBhcGkgPSBuZXcgQXBpKClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc29sZS5sb2coYXBpLnByb2R1Y3RzKCkpO1xuICBcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdj4xMjM8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./services/api.tsx":
/*!**************************!*\
  !*** ./services/api.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Api; });\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar endpoint;\n\n(function (endpoint) {\n  endpoint[\"products\"] = \"/data/products.json\";\n  endpoint[\"names\"] = \"/data/names.json\";\n})(endpoint || (endpoint = {}));\n\nclass Api {\n  constructor() {\n    _defineProperty(this, \"_baseUrl\", 'http://localhost:3000');\n\n    _defineProperty(this, \"products\", async () => {\n      const setting = {\n        method: 'GET',\n        headers: {\n          'Content-Type': 'application/json'\n        }\n      };\n      return await fetch(`${this._baseUrl}${endpoint.products}`, setting);\n    });\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hcGkudHN4PzdiNTUiXSwibmFtZXMiOlsiZW5kcG9pbnQiLCJBcGkiLCJzZXR0aW5nIiwibWV0aG9kIiwiaGVhZGVycyIsImZldGNoIiwiX2Jhc2VVcmwiLCJwcm9kdWN0cyJdLCJtYXBwaW5ncyI6Ijs7OztJQUNLQSxROztXQUFBQSxRO0FBQUFBLFU7QUFBQUEsVTtHQUFBQSxRLEtBQUFBLFE7O0FBS1UsTUFBTUMsR0FBTixDQUFVO0FBQUE7QUFBQSxzQ0FDSyx1QkFETDs7QUFBQSxzQ0FHWixZQUErQjtBQUN4QyxZQUFNQyxPQUFPLEdBQUc7QUFDWkMsY0FBTSxFQUFFLEtBREk7QUFFWkMsZUFBTyxFQUFFO0FBQ0wsMEJBQWdCO0FBRFg7QUFGRyxPQUFoQjtBQU1BLGFBQU8sTUFBTUMsS0FBSyxDQUFFLEdBQUUsS0FBS0MsUUFBUyxHQUFFTixRQUFRLENBQUNPLFFBQVMsRUFBdEMsRUFBeUNMLE9BQXpDLENBQWxCO0FBQ0QsS0FYc0I7QUFBQTs7QUFBQSIsImZpbGUiOiIuL3NlcnZpY2VzL2FwaS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmVudW0gZW5kcG9pbnQge1xuICBwcm9kdWN0cyA9ICcvZGF0YS9wcm9kdWN0cy5qc29uJyxcbiAgbmFtZXMgPSAnL2RhdGEvbmFtZXMuanNvbicsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaSB7XG4gIHJlYWRvbmx5IF9iYXNlVXJsOiBzdHJpbmcgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwJ1xuXG4gIHByb2R1Y3RzID0gYXN5bmMgKCk6IFByb21pc2U8UmVzcG9uc2U+ID0+IHtcbiAgICBjb25zdCBzZXR0aW5nID0ge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgfVxuICAgIHJldHVybiBhd2FpdCBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfSR7ZW5kcG9pbnQucHJvZHVjdHN9YCwgc2V0dGluZylcbiAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/api.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });