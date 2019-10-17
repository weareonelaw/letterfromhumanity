module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TOGGLE_MAIN_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_PROGRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_PROGRESS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_PROGRESS_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_PROGRESS_REJECTED; });
var TOGGLE_MAIN_MENU = 'TOGGLE_MAIN_MENU';
var GET_PROGRESS = 'GET_PROGRESS';
var GET_PROGRESS_PENDING = 'GET_PROGRESS_PENDING';
var GET_PROGRESS_FULFILLED = 'GET_PROGRESS_FULFILLED';
var GET_PROGRESS_REJECTED = 'GET_PROGRESS_REJECTED';

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

module.exports = require("redux-promise-middleware");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(50);


/***/ }),
/* 42 */
/***/ (function(module, exports) {



/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(11);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: ./sass/application.scss
var application = __webpack_require__(42);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(2);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(14);

// EXTERNAL MODULE: external "redux-form"
var external_redux_form_ = __webpack_require__(3);

// EXTERNAL MODULE: ./store/actions/types.js
var types = __webpack_require__(4);

// CONCATENATED MODULE: ./store/reducers/uiReducer.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var uiReducer_uiReducer = function uiReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types["e" /* TOGGLE_MAIN_MENU */]:
      return _objectSpread({}, state, {
        menuOpen: !state.menuOpen
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_uiReducer = (uiReducer_uiReducer);
// CONCATENATED MODULE: ./store/reducers/progressReducer.js
function progressReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { progressReducer_defineProperty(target, key, source[key]); }); } return target; }

function progressReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var progressGoal = 200000;

var progressReducer_uiReducer = function uiReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    progressGoal: progressGoal,
    value: 0,
    isLoading: false,
    hasData: false,
    hasError: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types["c" /* GET_PROGRESS_PENDING */]:
      return progressReducer_objectSpread({}, state, {
        isLoading: true
      });

    case types["b" /* GET_PROGRESS_FULFILLED */]:
      return progressReducer_objectSpread({}, state, {
        value: action.payload.data.signatures,
        isLoading: false,
        hasData: true
      });

    case types["d" /* GET_PROGRESS_REJECTED */]:
      return progressReducer_objectSpread({}, state, {
        isLoading: false,
        hasError: true
      });

    default:
      return state;
  }
};

/* harmony default export */ var progressReducer = (progressReducer_uiReducer);
// CONCATENATED MODULE: ./store/reducers.js
function reducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { reducers_defineProperty(target, key, source[key]); }); } return target; }

function reducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function createReducer() {
  var extraReducerObjects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(external_redux_["combineReducers"])(reducers_objectSpread({
    form: external_redux_form_["reducer"],
    ui: reducers_uiReducer,
    progress: progressReducer
  }, extraReducerObjects));
}
// EXTERNAL MODULE: external "redux-promise-middleware"
var external_redux_promise_middleware_ = __webpack_require__(27);
var external_redux_promise_middleware_default = /*#__PURE__*/__webpack_require__.n(external_redux_promise_middleware_);

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(28);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./store/configurateStore.js



 // In development, use the browser's Redux dev tools extension if installed

var enhancers = [];
var isDevelopment = "production" === 'development';

if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
  enhancers.push(window.devToolsExtension());
}

function configureStore(initialState, options) {
  var middlewares = [external_redux_thunk_default.a, external_redux_promise_middleware_default.a];
  var store = Object(external_redux_["createStore"])(createReducer(), initialState, external_redux_["compose"].apply(void 0, [external_redux_["applyMiddleware"].apply(void 0, middlewares)].concat(enhancers)));
  return store;
}
// EXTERNAL MODULE: external "react-jss/lib/JssProvider"
var JssProvider_ = __webpack_require__(29);
var JssProvider_default = /*#__PURE__*/__webpack_require__.n(JssProvider_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(6);

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__(30);
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: external "jss"
var external_jss_ = __webpack_require__(31);

// CONCATENATED MODULE: ./getPageContext.js

 // import purple from '@material-ui/core/colors/purple';
// A theme with custom primary and secondary color.
// It's optional.

var theme = Object(styles_["createMuiTheme"])({
  palette: {
    type: 'dark',
    background: {
      paper: '#000',
      default: "#000"
    },
    primary: {
      light: '#FFF',
      main: '#FFF',
      dark: '#CCC'
    },
    secondary: {
      light: '#FFF',
      main: '#FFF',
      dark: '#CCC'
    }
  },
  typography: {
    useNextVariants: true
  }
});

function createPageContext() {
  return {
    theme: theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new external_jss_["SheetsRegistry"](),
    // The standard class name generator.
    generateClassName: Object(styles_["createGenerateClassName"])()
  };
}

var pageContext;
function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (true) {
    return createPageContext();
  } // Reuse context on the client-side.


  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
}
// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(24);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(32);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(33);
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// CONCATENATED MODULE: ./pages/_app.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var _app_MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    var _this;

    _classCallCheck(this, MyApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyApp).call(this));
    _this.pageContext = getPageContext();
    return _this;
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Remove the server-side injected CSS.
      var jssStyles = document.querySelector('#jss-server-side');

      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return external_react_default.a.createElement(app_["Container"], null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Onelaw"), external_react_default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), external_react_default.a.createElement("meta", {
        name: "theme-color",
        content: this.pageContext ? this.pageContext.theme.palette.primary.main : null
      }), external_react_default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,400i,600,700",
        rel: "stylesheet"
      })), external_react_default.a.createElement(JssProvider_default.a, {
        registry: this.pageContext.sheetsRegistry,
        generateClassName: this.pageContext.generateClassName
      }, external_react_default.a.createElement(styles_["MuiThemeProvider"], {
        theme: this.pageContext.theme,
        sheetsManager: this.pageContext.sheetsManager
      }, external_react_default.a.createElement(CssBaseline_default.a, null), external_react_default.a.createElement(external_react_redux_["Provider"], {
        store: store
      }, external_react_default.a.createElement(Component, _extends({
        pageContext: this.pageContext
      }, pageProps))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return Component.getInitialProps(ctx);

              case 4:
                _context.t0 = _context.sent;
                _context.next = 8;
                break;

              case 7:
                _context.t0 = {};

              case 8:
                pageProps = _context.t0;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(app_default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(configureStore)(_app_MyApp));

/***/ })
/******/ ]);