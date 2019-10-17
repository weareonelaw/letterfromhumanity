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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Alert/Alert.module.sass":
/*!********************************************!*\
  !*** ./components/Alert/Alert.module.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"alert": "alert___fupJP"
};

/***/ }),

/***/ "./components/Alert/index.js":
/*!***********************************!*\
  !*** ./components/Alert/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Alert_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert.module.sass */ "./components/Alert/Alert.module.sass");
/* harmony import */ var _Alert_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Alert_module_sass__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/components/Alert/index.js";



var Alert = function Alert(_ref) {
  var show = _ref.show,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? 'error' : _ref$message;
  if (show) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _Alert_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a["alert"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, message);else return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ }),

/***/ "./components/Button/Button.module.sass":
/*!**********************************************!*\
  !*** ./components/Button/Button.module.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"btn": "btn___2z1Ed",
	"secondary": "secondary___3Hgrp",
	"btn--block": "btn--block___ZphY1"
};

/***/ }),

/***/ "./components/Button/index.js":
/*!************************************!*\
  !*** ./components/Button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.module.sass */ "./components/Button/Button.module.sass");
/* harmony import */ var _Button_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_module_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "classnames/bind");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/components/Button/index.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_Button_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a);

var Button = function Button(_ref) {
  var _cx;

  var type = _ref.type,
      children = _ref.children,
      block = _ref.block,
      className = _ref.className,
      secondary = _ref.secondary,
      onClick = _ref.onClick,
      href = _ref.href,
      target = _ref.target;
  var buttonClassNames = cx((_cx = {}, _defineProperty(_cx, "".concat(_Button_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.btn), true), _defineProperty(_cx, "".concat(_Button_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['btn--block']), block), _defineProperty(_cx, "".concat(_Button_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['secondary']), secondary), _defineProperty(_cx, className, true), _cx));

  if (href) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: href,
      target: target,
      className: buttonClassNames,
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, children);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: type,
    className: buttonClassNames,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Checkbox/Checkbox.js":
/*!*****************************************!*\
  !*** ./components/Checkbox/Checkbox.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Checkbox_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox.module.sass */ "./components/Checkbox/Checkbox.module.sass");
/* harmony import */ var _Checkbox_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Checkbox_module_sass__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/components/Checkbox/Checkbox.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var Checkbox = function Checkbox(_ref) {
  var input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      id = _ref.id,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      warning = _ref$meta.warning;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Checkbox_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['wrapper'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, input, {
    placeholder: label,
    type: type,
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, " ", label), touched && (error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_Checkbox_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['form-helper'], " ").concat(_Checkbox_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['form-helper--has-error']),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, error) || warning && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Checkbox_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['form-helper'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, warning)));
};

/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./components/Checkbox/Checkbox.module.sass":
/*!**************************************************!*\
  !*** ./components/Checkbox/Checkbox.module.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "wrapper___3MtVa",
	"form-helper": "form-helper___3TbOM",
	"form-helper--has-error": "form-helper--has-error___3irBB"
};

/***/ }),

/***/ "./components/Contact/Contact.js":
/*!***************************************!*\
  !*** ./components/Contact/Contact.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Contact_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.module.sass */ "./components/Contact/Contact.module.sass");
/* harmony import */ var _Contact_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Contact_module_sass__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/components/Contact/Contact.js";



var Contact = function Contact() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Contact_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['contact'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: _Contact_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['title'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Contact"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: _Contact_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['sub-heading'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "For Press"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _Contact_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['desc'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:press@letterfromhumanity.org",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "press@letterfromhumanity.org")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: _Contact_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['sub-heading'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "General Questions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _Contact_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['desc'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:info@letterfromhumanity.org",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "info@letterfromhumanity.org")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: _Contact_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['sub-heading'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Instagram"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _Contact_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['desc'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.instagram.com/weareonelaw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "@weareonelaw"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.instagram.com/letterfromhumanity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "@letterfromhumanity")));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/Contact/Contact.module.sass":
/*!************************************************!*\
  !*** ./components/Contact/Contact.module.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"contact": "contact___3E87t",
	"sub-heading": "sub-heading___9EZIM"
};

/***/ }),

/***/ "./components/Countdown/Countdown.js":
/*!*******************************************!*\
  !*** ./components/Countdown/Countdown.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Countdown_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Countdown.module.sass */ "./components/Countdown/Countdown.module.sass");
/* harmony import */ var _Countdown_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Countdown_module_sass__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/components/Countdown/Countdown.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * Note :
 * If you're using react v 15.4 or less
 * You can directly import PropTypes from react instead.
 * Refer to this : https://reactjs.org/warnings/dont-call-proptypes.html
 */

var Countdown =
/*#__PURE__*/
function (_Component) {
  _inherits(Countdown, _Component);

  function Countdown(props) {
    var _this;

    _classCallCheck(this, Countdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Countdown).call(this, props));
    _this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };
    return _this;
  }

  _createClass(Countdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.tick();
      this.interval = setInterval(function () {
        return _this2.tick();
      }, 1000);
    }
  }, {
    key: "tick",
    value: function tick() {
      var date = this.calculateCountdown(this.props.date);

      if (!date) {
        date = {
          days: 0,
          hours: 0,
          min: 0,
          sec: 0
        };

        if (this.props.onComplete) {
          this.props.onComplete();
        }

        this.stop();
      }

      this.setState(_objectSpread({}, date));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: "calculateCountdown",
    value: function calculateCountdown(endDate) {
      var diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000; // clear countdown when date is reached

      if (diff <= 0) return false;
      var timeLeft = {
        days: 0,
        hours: 0,
        min: 0,
        sec: 0
      }; // calculate time difference between now and expected date
      // if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      //   timeLeft.years = Math.floor(diff / (365.25 * 86400));
      //   diff -= timeLeft.years * 365.25 * 86400;
      // }

      if (diff >= 86400) {
        // 24 * 60 * 60
        timeLeft.days = Math.floor(diff / 86400);
        diff -= timeLeft.days * 86400;
      }

      if (diff >= 3600) {
        // 60 * 60
        timeLeft.hours = Math.floor(diff / 3600);
        diff -= timeLeft.hours * 3600;
      }

      if (diff >= 60) {
        timeLeft.min = Math.floor(diff / 60);
        diff -= timeLeft.min * 60;
      }

      timeLeft.sec = diff;
      return timeLeft;
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.interval);
    }
  }, {
    key: "addLeadingZeros",
    value: function addLeadingZeros(value) {
      value = String(value);

      while (value.length < 2) {
        value = '0' + value;
      }

      return value;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          days = _this$state.days,
          hours = _this$state.hours,
          min = _this$state.min,
          sec = _this$state.sec;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Countdown_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['countdown'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, days !== 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _Countdown_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['unit-box'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _Countdown_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['number'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, this.addLeadingZeros(days)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _Countdown_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['unit'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, days === 1 ? 'Day' : 'Days')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _Countdown_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['unit-box'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _Countdown_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['number'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, this.addLeadingZeros(hours)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _Countdown_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['unit'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Hours")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _Countdown_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['unit-box'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _Countdown_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['number'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, this.addLeadingZeros(min)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _Countdown_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['unit'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Min")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _Countdown_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['unit-box'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _Countdown_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['number'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, this.addLeadingZeros(sec)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _Countdown_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['unit'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Sec")));
    }
  }]);

  return Countdown;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Countdown.defaultProps = {
  date: new Date()
};
Countdown.propTypes = {
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onComplete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Countdown);

/***/ }),

/***/ "./components/Countdown/Countdown.module.sass":
/*!****************************************************!*\
  !*** ./components/Countdown/Countdown.module.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"countdown": "countdown___1o1He",
	"unit-box": "unit-box___1Sh3G",
	"number": "number___1oGs8",
	"unit": "unit___3eGm5"
};

/***/ }),

/***/ "./components/HashtagIntro/HashtagIntro.js":
/*!*************************************************!*\
  !*** ./components/HashtagIntro/HashtagIntro.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HashtagIntro_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HashtagIntro.module.sass */ "./components/HashtagIntro/HashtagIntro.module.sass");
/* harmony import */ var _HashtagIntro_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HashtagIntro_module_sass__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/components/HashtagIntro/HashtagIntro.js";



var HashtagIntro = function HashtagIntro() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _HashtagIntro_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['hashtag-intro'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: _HashtagIntro_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['title'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "#letterfromhumanity"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _HashtagIntro_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['desc'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Be part of a World Record, and sign the letter that binds humanity together as one"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#about",
    className: _HashtagIntro_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['scroll-down'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Scroll down to explore", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _HashtagIntro_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['chevron'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HashtagIntro);

/***/ }),

/***/ "./components/HashtagIntro/HashtagIntro.module.sass":
/*!**********************************************************!*\
  !*** ./components/HashtagIntro/HashtagIntro.module.sass ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"hashtag-intro": "hashtag-intro___38730",
	"title": "title___2Ky7v",
	"desc": "desc___2XJCi",
	"scroll-down": "scroll-down___11e0G",
	"chevron": "chevron___3VDka"
};

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Logo/Logo */ "./components/Logo/Logo.js");
/* harmony import */ var _store_actions_creators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/creators */ "./store/actions/creators.js");
/* harmony import */ var _Header_module_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header.module.sass */ "./components/Header/Header.module.sass");
/* harmony import */ var _Header_module_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Header_module_sass__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/components/Header/Header.js";






var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Header_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a['header'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Header_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a['logo'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    menuOpen: state.ui.menuOpen
  };
}, _store_actions_creators__WEBPACK_IMPORTED_MODULE_3__)(Header));

/***/ }),

/***/ "./components/Header/Header.module.sass":
/*!**********************************************!*\
  !*** ./components/Header/Header.module.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"header": "header___2kCyu",
	"logo": "logo___1yxf8"
};

/***/ }),

/***/ "./components/Input/Input.js":
/*!***********************************!*\
  !*** ./components/Input/Input.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/components/Input/Input.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: 20
    },
    notchedOutline: {
      borderWidth: '2px',
      borderColor: 'white !important',
      borderRadius: 0
    }
  };
};

function InputClass(_ref) {
  var classes = _ref.classes,
      placeholder = _ref.placeholder,
      name = _ref.name,
      required = _ref.required,
      onChange = _ref.onChange,
      input = _ref.input,
      type = _ref.type,
      label = _ref.label,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      invalid = _ref$meta.invalid,
      error = _ref$meta.error,
      warning = _ref$meta.warning,
      custom = _objectWithoutProperties(_ref, ["classes", "placeholder", "name", "required", "onChange", "input", "type", "label", "meta"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    fullWidth: true,
    label: placeholder,
    error: touched && invalid,
    helperText: touched && error,
    className: classes.root,
    InputProps: {
      classes: {
        notchedOutline: classes.notchedOutline
      }
    },
    variant: "outlined"
  }, input, custom, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })));
}

InputClass.props = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(InputClass));

/***/ }),

/***/ "./components/Letter/Letter.js":
/*!*************************************!*\
  !*** ./components/Letter/Letter.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProgressBar_ProgressContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ProgressBar/ProgressContainer */ "./components/ProgressBar/ProgressContainer.js");
/* harmony import */ var _Letter_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Letter.module.sass */ "./components/Letter/Letter.module.sass");
/* harmony import */ var _Letter_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Letter_module_sass__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/components/Letter/Letter.js";





var Letter = function Letter(_ref) {
  var showProgress = _ref.showProgress;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: _Letter_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a['header'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Dear leaders of the world,"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "This is a letter signed by a significant part of humanity \u2013 all of us connected to you."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "We would like to share something that can be both overwhelming, and easy to forget. In the midst of these one hundred billion galaxies, each and every one swirling with billions of stars with orbiting planets, somehow we\u2019re all having a human experience on one of these planets. We are connected not only by sharing this experience with every other human on earth, but also by the deep chemical bond that exists between us and everything else in this universe. The compounds in our bodies are the same ones found in the cosmos, and we have traced their origin back to exploding stars in which all the fundamental ingredients of life once were cooked. In other words, we are all naturally connected \u2013 just by being alive."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Therefore, we are writing to you with one purpose; let this letter echo through your next major decision. Make that decision for everyone you love, have ever loved and will ever love. Make it for earth, our blue little home that nourishes our hearts and makes them beat. Make it for humanity. Because from the cosmic perspective, we all share the same origin, the same ability to love, the same home. All of us."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "From the cosmic perspective, we are one. As one, we can change the world."), showProgress && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProgressBar_ProgressContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
};

Letter.defaultProps = {
  showProgress: true
};
Letter.props = {
  showProgress: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Letter);

/***/ }),

/***/ "./components/Letter/Letter.module.sass":
/*!**********************************************!*\
  !*** ./components/Letter/Letter.module.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"header": "header___10WHU"
};

/***/ }),

/***/ "./components/Logo/Logo.js":
/*!*********************************!*\
  !*** ./components/Logo/Logo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logo_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo.module.sass */ "./components/Logo/Logo.module.sass");
/* harmony import */ var _Logo_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Logo_module_sass__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/components/Logo/Logo.js";



var Logo = function Logo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Logo_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['logo'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    version: "1.1",
    id: "Layer_1",
    x: "0px",
    y: "0px",
    width: "857.5px",
    height: "221.25px",
    viewBox: "0 0 857.5 221.25",
    enableBackground: "new 0 0 857.5 221.25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "gfx world",
    fill: "#FFFFFF",
    d: "M278.584,54.031c-4.777-13.127-20.048-19.783-45.391-19.783c-5.188,0-10.751,0.293-16.596,0.841 c-18.331-17.048-42.882-27.492-69.83-27.492C94.46,7.597,51.171,46.93,44.913,97.57c-1.464,1.012-2.901,2.026-4.292,3.043 c-26.014,18.994-36.432,36.245-30.963,51.274c4.777,13.127,20.049,19.783,45.392,19.783c2.997,0,6.121-0.099,9.345-0.282 c18.724,25.153,48.677,41.478,82.373,41.478c56.593,0,102.635-46.042,102.635-102.635c0-2.051-0.067-4.087-0.187-6.108 C274.052,85.596,283.939,68.747,278.584,54.031z M146.767,191.866c-22.221,0-42.386-8.935-57.121-23.388 c21.843-3.62,46.45-10.216,71.308-19.261c24.857-9.045,47.929-19.785,67.061-31.104 C224.034,159.442,189.121,191.866,146.767,191.866z M146.767,28.597c39.143,0,71.926,27.697,79.815,64.52 c-19.456,12.786-45.018,25.19-73.151,35.428c-28.248,10.279-55.881,17.196-78.785,19.878c-6.063-11.404-9.514-24.399-9.514-38.19 C65.132,65.218,101.753,28.597,146.767,28.597z M30.331,144.364c-0.361-0.993,1.274-7.8,14.865-19.385 c1.244,8.605,3.557,16.869,6.804,24.65C35.706,149.198,30.693,145.357,30.331,144.364z M244.701,79.503 c-2.593-8.245-6.203-16.042-10.678-23.249c18.061,0.125,23.51,4.263,23.888,5.3C258.257,62.506,256.775,68.791,244.701,79.503z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    className: "gfx cross",
    fill: "#FFFFFF",
    points: "528.398,98.75 461.989,98.75 461.989,10.25 439.989,10.25 439.989,98.75 373.466,98.75 373.466,120.75 439.989,120.75 439.989,209.344 461.989,209.344 461.989,120.75 528.398,120.75 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "gfx heart",
    fill: "#FFFFFF",
    d: "M839.958,41.482c-11.84-21.438-34.4-35.291-57.477-35.291c-12.064,0-30.063,3.732-47.507,21.452 c-17.439-17.714-35.437-21.444-47.5-21.444c-23.094,0-45.665,13.865-57.501,35.325c-10.932,19.817-10.556,42.591,1.005,60.921 c31.01,49.167,94.523,103.335,97.212,105.616l6.798,5.771l6.795-5.773c2.698-2.293,66.443-56.719,97.213-105.623 C850.543,84.086,850.902,61.299,839.958,41.482z M687.475,27.199c14.214,0,27.752,7.9,39.151,22.846l8.349,10.948l8.349-10.948 c11.403-14.95,24.943-22.854,39.158-22.854c15.548,0,30.893,9.595,39.094,24.443c7.3,13.219,7.171,27.658-0.353,39.617 c-23.161,36.811-67.765,78.367-86.241,94.843c-18.415-16.41-62.896-57.839-86.241-94.852c-7.529-11.938-7.667-26.363-0.379-39.575 C656.561,36.803,671.913,27.199,687.475,27.199z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/Logo/Logo.module.sass":
/*!******************************************!*\
  !*** ./components/Logo/Logo.module.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"logo": "logo___3LF--"
};

/***/ }),

/***/ "./components/Menu/MainMenu.js":
/*!*************************************!*\
  !*** ./components/Menu/MainMenu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "classnames/bind");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_creators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/creators */ "./store/actions/creators.js");
/* harmony import */ var _MainMenu_module_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MainMenu.module.sass */ "./components/Menu/MainMenu.module.sass");
/* harmony import */ var _MainMenu_module_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MainMenu_module_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/components/Menu/MainMenu.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_MainMenu_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a);

var MainMenu = function MainMenu(_ref) {
  var _cx;

  var toggleMainMenu = _ref.toggleMainMenu,
      menuOpen = _ref.menuOpen;
  var released = new Date(_utils_constants__WEBPACK_IMPORTED_MODULE_5__["EVENT_DATE"]) <= new Date();
  var className = cx((_cx = {}, _defineProperty(_cx, 'main-menu', true), _defineProperty(_cx, "open", menuOpen), _cx));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MainMenu_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a['overlay'],
    onClick: toggleMainMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MainMenu_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a['menu-container'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _MainMenu_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a['links'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: _MainMenu_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a['link'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "The letter")), released && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: _MainMenu_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a['link'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#sign",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Sign")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: _MainMenu_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a['link'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Contact")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    menuOpen: state.ui.menuOpen
  };
}, _store_actions_creators__WEBPACK_IMPORTED_MODULE_3__)(MainMenu));

/***/ }),

/***/ "./components/Menu/MainMenu.module.sass":
/*!**********************************************!*\
  !*** ./components/Menu/MainMenu.module.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main-menu": "main-menu___1yTvs",
	"overlay": "overlay___2Cgeh",
	"menu-container": "menu-container___3fYRu",
	"open": "open___K3W4g",
	"close-menu": "close-menu___20vBp",
	"links": "links___2ainP",
	"link": "link___1Rav_"
};

/***/ }),

/***/ "./components/Menu/ToggleButton.js":
/*!*****************************************!*\
  !*** ./components/Menu/ToggleButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_actions_creators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions/creators */ "./store/actions/creators.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ToggleButton_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToggleButton.module.sass */ "./components/Menu/ToggleButton.module.sass");
/* harmony import */ var _ToggleButton_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ToggleButton_module_sass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames/bind */ "classnames/bind");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/components/Menu/ToggleButton.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_4___default.a.bind(_ToggleButton_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a);

var ToggleButton = function ToggleButton(_ref) {
  var _cx;

  var toggleMainMenu = _ref.toggleMainMenu,
      menuOpen = _ref.menuOpen;
  var className = cx((_cx = {}, _defineProperty(_cx, 'menu-toggler', true), _defineProperty(_cx, "opened", menuOpen), _cx));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    onClick: toggleMainMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _ToggleButton_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a['bar1'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _ToggleButton_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a['bar2'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _ToggleButton_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a['bar3'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return {
    menuOpen: state.ui.menuOpen
  };
}, _store_actions_creators__WEBPACK_IMPORTED_MODULE_1__)(ToggleButton));

/***/ }),

/***/ "./components/Menu/ToggleButton.module.sass":
/*!**************************************************!*\
  !*** ./components/Menu/ToggleButton.module.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"menu-toggler": "menu-toggler___3glql",
	"bar1": "bar1___8XMHD",
	"bar2": "bar2___2bJZC",
	"bar3": "bar3___2oZB_",
	"opened": "opened___3dNsC"
};

/***/ }),

/***/ "./components/Page/Page.js":
/*!*********************************!*\
  !*** ./components/Page/Page.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Page_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page.module.sass */ "./components/Page/Page.module.sass");
/* harmony import */ var _Page_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Page_module_sass__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/components/Page/Page.js";



var Page = function Page(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Page_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['page'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./components/Page/Page.module.sass":
/*!******************************************!*\
  !*** ./components/Page/Page.module.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"page": "page___2lJdm"
};

/***/ }),

/***/ "./components/ProgressBar/ProgressBar.js":
/*!***********************************************!*\
  !*** ./components/ProgressBar/ProgressBar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProgressBar_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressBar.module.sass */ "./components/ProgressBar/ProgressBar.module.sass");
/* harmony import */ var _ProgressBar_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ProgressBar_module_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_numbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/numbers */ "./utils/numbers.js");
/* harmony import */ var _utils_numbers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_numbers__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/components/ProgressBar/ProgressBar.js";



var STROKE_WIDTH = 4;
var RADIUS = 100;
var NORMALIZED_RADIUS = RADIUS - STROKE_WIDTH * 2;
var CIRCUMFERENCE = NORMALIZED_RADIUS * (2 * Math.PI);

var ProgressBar = function ProgressBar(_ref) {
  var progressData = _ref.progressData;
  var hasError = progressData.hasError,
      hasData = progressData.hasData;
  var value = progressData.value,
      progressGoal = progressData.progressGoal;

  if (!hasData || !value) {
    value = 0;
  }

  var percentage = Math.min(Math.round(value / (progressGoal || 1) * 100), 100);
  var strokeDashoffset = CIRCUMFERENCE - percentage / 100 * CIRCUMFERENCE;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _ProgressBar_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['progress-bar'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _ProgressBar_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['mid-text'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _ProgressBar_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['signs'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _ProgressBar_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['signs-number'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, Object(_utils_numbers__WEBPACK_IMPORTED_MODULE_2__["formatInteger"])(value)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), "signatures")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: _ProgressBar_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['svg'],
    viewBox: "0 0 ".concat(RADIUS * 2, " ").concat(RADIUS * 2),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    className: _ProgressBar_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['unfilled'],
    r: NORMALIZED_RADIUS,
    cx: RADIUS,
    cy: RADIUS,
    strokeWidth: Math.max(2, STROKE_WIDTH / 4),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    className: _ProgressBar_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['filled'],
    r: NORMALIZED_RADIUS,
    cx: RADIUS,
    cy: RADIUS,
    strokeWidth: STROKE_WIDTH,
    strokeDasharray: CIRCUMFERENCE + ' ' + CIRCUMFERENCE,
    style: {
      strokeDashoffset: strokeDashoffset
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ }),

/***/ "./components/ProgressBar/ProgressBar.module.sass":
/*!********************************************************!*\
  !*** ./components/ProgressBar/ProgressBar.module.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"progress-bar": "progress-bar____8Lgk",
	"svg": "svg___1t8lg",
	"mid-text": "mid-text___3bG0v",
	"signs": "signs___1T5Le",
	"signs-number": "signs-number___xWoHR",
	"goal-desc": "goal-desc___3_4YI",
	"unfilled": "unfilled___AHi_e",
	"filled": "filled___3Up1y"
};

/***/ }),

/***/ "./components/ProgressBar/ProgressContainer.js":
/*!*****************************************************!*\
  !*** ./components/ProgressBar/ProgressContainer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressBar */ "./components/ProgressBar/ProgressBar.js");
/* harmony import */ var _store_actions_creators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/creators */ "./store/actions/creators.js");
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/components/ProgressBar/ProgressContainer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var ProgressContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(ProgressContainer, _Component);

  function ProgressContainer() {
    _classCallCheck(this, ProgressContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProgressContainer).apply(this, arguments));
  }

  _createClass(ProgressContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getProgress();
    }
  }, {
    key: "render",
    value: function render() {
      var progressData = this.props.progressData;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProgressBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        progressData: progressData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      });
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer,
          pathname = _ref.pathname,
          query = _ref.query;
    }
  }]);

  return ProgressContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    progressData: state.progress
  };
}, _store_actions_creators__WEBPACK_IMPORTED_MODULE_3__)(ProgressContainer));

/***/ }),

/***/ "./components/SignForm/Form.js":
/*!*************************************!*\
  !*** ./components/SignForm/Form.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Checkbox/Checkbox */ "./components/Checkbox/Checkbox.js");
/* harmony import */ var _Form_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form.module.sass */ "./components/SignForm/Form.module.sass");
/* harmony import */ var _Form_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Form_module_sass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");
/* harmony import */ var _Input_Input_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Input/Input.js */ "./components/Input/Input.js");
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/components/SignForm/Form.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Form =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, _getPrototypeOf(Form).apply(this, arguments));
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Form_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a['signup-form'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.props.handleSubmit(this.props.onSubmit),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        name: "firstname",
        component: _Input_Input_js__WEBPACK_IMPORTED_MODULE_5__["default"],
        placeholder: "First name",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        name: "lastname",
        component: _Input_Input_js__WEBPACK_IMPORTED_MODULE_5__["default"],
        placeholder: "Last name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        name: "email",
        component: _Input_Input_js__WEBPACK_IMPORTED_MODULE_5__["default"],
        placeholder: "Email",
        type: "email",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        name: "location",
        component: _Input_Input_js__WEBPACK_IMPORTED_MODULE_5__["default"],
        placeholder: "Where are you located?",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _Form_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a['desc'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "When the signature is sent to the recipient, only your first and last name are visible. We use your email address at the collection of names to be sure that each signature is unique. The email address will not be saved in any other way. Read more about how we handle your ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: _Form_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a['link'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "personal information"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        name: "agree",
        id: "agree",
        component: _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__["default"],
        type: "checkbox",
        label: "I understand and want to sign the letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: _Form_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a['submit'],
        type: "submit",
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Sign")));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/SignForm/Form.module.sass":
/*!**********************************************!*\
  !*** ./components/SignForm/Form.module.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"signup-form": "signup-form___1ixX3",
	"input-row": "input-row___38Iiw",
	"input": "input___23BFz",
	"help-text": "help-text___3AIMK",
	"help-text--has-error": "help-text--has-error___2v7QC",
	"desc": "desc___QMqzw",
	"submit": "submit___3q1me",
	"link": "link___1Auu0"
};

/***/ }),

/***/ "./components/SignForm/SignForm.js":
/*!*****************************************!*\
  !*** ./components/SignForm/SignForm.js ***!
  \*****************************************/
/*! exports provided: SignForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignForm", function() { return SignForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./components/SignForm/Form.js");
/* harmony import */ var _ThanksContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThanksContainer */ "./components/SignForm/ThanksContainer.js");
/* harmony import */ var _submitForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submitForm */ "./components/SignForm/submitForm.js");
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Alert */ "./components/Alert/index.js");
/* harmony import */ var _SignForm_module_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SignForm.module.sass */ "./components/SignForm/SignForm.module.sass");
/* harmony import */ var _SignForm_module_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SignForm_module_sass__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/components/SignForm/SignForm.js";






var SignForm = function SignForm(_ref) {
  var submitSucceeded = _ref.submitSucceeded,
      submitFailed = _ref.submitFailed,
      handleSubmit = _ref.handleSubmit,
      _ref$error = _ref.error,
      error = _ref$error === void 0 ? 'Oh no! Something went wrong. Please check all fields and try again.' : _ref$error;
  if (submitSucceeded) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ThanksContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  });else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _SignForm_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a["form-wrapper"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Sign the letter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onSubmit: _submitForm__WEBPACK_IMPORTED_MODULE_3__["default"],
    handleSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Alert__WEBPACK_IMPORTED_MODULE_4__["default"], {
    show: submitFailed,
    message: error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (SignForm);

/***/ }),

/***/ "./components/SignForm/SignForm.module.sass":
/*!**************************************************!*\
  !*** ./components/SignForm/SignForm.module.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"form-wrapper": "form-wrapper___34WXN"
};

/***/ }),

/***/ "./components/SignForm/Thanks.js":
/*!***************************************!*\
  !*** ./components/SignForm/Thanks.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scrollable-anchor */ "react-scrollable-anchor");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Thanks_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Thanks.module.sass */ "./components/SignForm/Thanks.module.sass");
/* harmony import */ var _Thanks_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Thanks_module_sass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/components/SignForm/Thanks.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Thanks =
/*#__PURE__*/
function (_Component) {
  _inherits(Thanks, _Component);

  function Thanks(props) {
    var _this;

    _classCallCheck(this, Thanks);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Thanks).call(this, props));
    _this.state = {
      copiedUrl: false
    };
    _this.copyToClipboard = _this.copyToClipboard.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Thanks, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
    }
  }, {
    key: "copyToClipboard",
    value: function copyToClipboard(str) {
      var el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      this.setState({
        copiedUrl: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          numberSigns = _this$props.numberSigns,
          lastSignLocation = _this$props.lastSignLocation;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Thanks_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['thanks'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: _Thanks_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['title'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Thank you!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _Thanks_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['desc'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "In the midst of these one hundred billion galaxies, we're eternally grateful that you are one of ", numberSigns, " humans that signed this letter. By making history together, we can create the future. You can share the letter with your friends below.", lastSignLocation && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "The person that signed the letter before you is located in ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, lastSignLocation), ".")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Thanks_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['actions'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: _Thanks_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['btn'],
        block: true,
        secondary: true,
        onClick: function onClick() {
          var url = window.location.origin;

          _this2.copyToClipboard(url);

          _this2.timeoutId = setTimeout(function () {
            _this2.setState({
              copiedUrl: false
            });
          }, 5000);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, this.state.copiedUrl ? 'Link copied to clipboard!' : 'Share the message'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: _Thanks_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['btn'],
        block: true,
        secondary: true,
        href: "https://www.instagram.com/weareonelaw",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Follow the project on Instagram"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: _Thanks_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['btn'],
        block: true,
        secondary: true,
        href: "#about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Read more about the project")));
    }
  }]);

  return Thanks;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Thanks);

/***/ }),

/***/ "./components/SignForm/Thanks.module.sass":
/*!************************************************!*\
  !*** ./components/SignForm/Thanks.module.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"thanks": "thanks___LvYg5",
	"title": "title___-POiB",
	"desc": "desc___21W9Y",
	"actions": "actions___3fK_8",
	"btn": "btn___HlvNC"
};

/***/ }),

/***/ "./components/SignForm/ThanksContainer.js":
/*!************************************************!*\
  !*** ./components/SignForm/ThanksContainer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Thanks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Thanks */ "./components/SignForm/Thanks.js");
/* harmony import */ var _store_actions_creators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/creators */ "./store/actions/creators.js");
/* harmony import */ var _utils_numbers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/numbers */ "./utils/numbers.js");
/* harmony import */ var _utils_numbers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_numbers__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/components/SignForm/ThanksContainer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ThanksContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(ThanksContainer, _Component);

  function ThanksContainer() {
    _classCallCheck(this, ThanksContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ThanksContainer).apply(this, arguments));
  }

  _createClass(ThanksContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getProgress();
    }
  }, {
    key: "render",
    value: function render() {
      var progressData = this.props.progressData;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Thanks__WEBPACK_IMPORTED_MODULE_2__["default"], {
        numberSigns: Object(_utils_numbers__WEBPACK_IMPORTED_MODULE_4__["formatInteger"])(progressData.value),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      });
    }
  }]);

  return ThanksContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    progressData: state.progress
  };
}, _store_actions_creators__WEBPACK_IMPORTED_MODULE_3__)(ThanksContainer));

/***/ }),

/***/ "./components/SignForm/submitForm.js":
/*!*******************************************!*\
  !*** ./components/SignForm/submitForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_handleError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/handleError */ "./helpers/handleError.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


 // TODO: Handle when no connection to internet is present.

var submitForm =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://letter-from-humanity-api-stage.herokuapp.com" + '/signatures/', _objectSpread({}, values)).catch(function (err) {
              return Object(_helpers_handleError__WEBPACK_IMPORTED_MODULE_2__["default"])(err);
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function submitForm(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (submitForm);

/***/ }),

/***/ "./components/SignForm/validate.js":
/*!*****************************************!*\
  !*** ./components/SignForm/validate.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var validate = function validate(values) {
  var errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required field';
  }

  if (!values.lastName) {
    errors.lastName = 'Required field';
  }

  if (!values.email) {
    errors.email = 'Required field';
  }

  if (!values.agree) {
    errors.agree = 'You need to check the box to sign the letter :-)';
  }

  return errors;
};

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./components/SplashScreen/SplashScreen.js":
/*!*************************************************!*\
  !*** ./components/SplashScreen/SplashScreen.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logo/Logo */ "./components/Logo/Logo.js");
/* harmony import */ var _SplashScreen_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SplashScreen.module.sass */ "./components/SplashScreen/SplashScreen.module.sass");
/* harmony import */ var _SplashScreen_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SplashScreen_module_sass__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/components/SplashScreen/SplashScreen.js";




var SplashScreen = function SplashScreen() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _SplashScreen_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['splash-screen'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _SplashScreen_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['logo'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo_Logo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SplashScreen);

/***/ }),

/***/ "./components/SplashScreen/SplashScreen.module.sass":
/*!**********************************************************!*\
  !*** ./components/SplashScreen/SplashScreen.module.sass ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"splash-screen": "splash-screen___1V1ws",
	"fadeout": "fadeout___36xxr",
	"logo": "logo___3Eq9n"
};

/***/ }),

/***/ "./containers/Form/SignFormContainer.js":
/*!**********************************************!*\
  !*** ./containers/Form/SignFormContainer.js ***!
  \**********************************************/
/*! exports provided: SignFormContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignFormContainer", function() { return SignFormContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SignForm_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SignForm/validate */ "./components/SignForm/validate.js");
/* harmony import */ var _components_SignForm_SignForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SignForm/SignForm */ "./components/SignForm/SignForm.js");
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/containers/Form/SignFormContainer.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var SignFormContainer = function SignFormContainer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SignForm_SignForm__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
  form: 'signs',
  validate: _components_SignForm_validate__WEBPACK_IMPORTED_MODULE_2__["default"]
})(SignFormContainer));

/***/ }),

/***/ "./containers/Form/index.js":
/*!**********************************!*\
  !*** ./containers/Form/index.js ***!
  \**********************************/
/*! exports provided: SignFormContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignFormContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignFormContainer */ "./containers/Form/SignFormContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignFormContainer", function() { return _SignFormContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./helpers/errorCodes.js":
/*!*******************************!*\
  !*** ./helpers/errorCodes.js ***!
  \*******************************/
/*! exports provided: errorCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorCodes", function() { return errorCodes; });
var errorCodes = [{
  serverErrorField: 'email',
  errorMessage: 'You have already signed the letter. Thank you :)',
  errorField: 'email'
}, {
  errorCode: 'SequelizeValidationError',
  errorMessage: 'Validation error. Please check all fields.'
}];

/***/ }),

/***/ "./helpers/handleError.js":
/*!********************************!*\
  !*** ./helpers/handleError.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errorCodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorCodes */ "./helpers/errorCodes.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var handleError = function handleError(err) {
  var errors = _defineProperty({}, '_error', 'Oh no! Something went wrong. Please check all fields and try again!');

  try {
    if (typeof err.response.data.fields !== "undefined") {
      var _loop = function _loop(key) {
        var selectedObject = _errorCodes__WEBPACK_IMPORTED_MODULE_1__["errorCodes"].find(function (obj) {
          return obj.serverErrorField === key;
        });
        errors[selectedObject.errorField] = selectedObject.errorMessage;
      };

      for (var key in err.response.data.fields) {
        _loop(key);
      }
    }
  } catch (_unused) {
    errors['_error'] = 'Oh no! An server error occurred! Please try again!';
  }

  throw new redux_form__WEBPACK_IMPORTED_MODULE_0__["SubmissionError"](errors);
};

/* harmony default export */ __webpack_exports__["default"] = (handleError);

/***/ }),

/***/ "./pages/Index.module.sass":
/*!*********************************!*\
  !*** ./pages/Index.module.sass ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"layout": "layout___2DSVW",
	"page-wrap--grey": "page-wrap--grey___2VkYb"
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scrollable-anchor */ "react-scrollable-anchor");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Index_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.module.sass */ "./pages/Index.module.sass");
/* harmony import */ var _Index_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Index_module_sass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/Form */ "./containers/Form/index.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Menu_ToggleButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Menu/ToggleButton */ "./components/Menu/ToggleButton.js");
/* harmony import */ var _components_Menu_MainMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Menu/MainMenu */ "./components/Menu/MainMenu.js");
/* harmony import */ var _components_SplashScreen_SplashScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SplashScreen/SplashScreen */ "./components/SplashScreen/SplashScreen.js");
/* harmony import */ var _components_HashtagIntro_HashtagIntro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/HashtagIntro/HashtagIntro */ "./components/HashtagIntro/HashtagIntro.js");
/* harmony import */ var _components_Contact_Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Contact/Contact */ "./components/Contact/Contact.js");
/* harmony import */ var _components_Letter_Letter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Letter/Letter */ "./components/Letter/Letter.js");
/* harmony import */ var _components_Countdown_Countdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Countdown/Countdown */ "./components/Countdown/Countdown.js");
/* harmony import */ var _components_Page_Page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Page/Page */ "./components/Page/Page.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");
var _jsxFileName = "/Users/antonkjorcklinden/Development/Onelaw/letterfromhumanity/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }















Object(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1__["configureAnchors"])({
  offset: -60
});

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.state = {
      showSplashScreen: true,
      showCountdown: new Date() < new Date(_utils_constants__WEBPACK_IMPORTED_MODULE_13__["EVENT_DATE"])
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timeoutId = setTimeout(function () {
        _this2.setState({
          showSplashScreen: false
        });
      }, 2000); // Needs to align with css animation for SplashScreen
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Index_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['layout'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Menu_ToggleButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Menu_MainMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), this.state.showSplashScreen && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SplashScreen_SplashScreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, this.state.showCountdown ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Countdown_Countdown__WEBPACK_IMPORTED_MODULE_11__["default"], {
        date: _utils_constants__WEBPACK_IMPORTED_MODULE_13__["EVENT_DATE"],
        onComplete: function onComplete() {
          return setTimeout(function () {
            _this3.setState({
              showCountdown: false
            });
          }, 1000);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HashtagIntro_HashtagIntro__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Index_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['page-wrap--grey'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Letter_Letter__WEBPACK_IMPORTED_MODULE_10__["default"], {
        showProgress: !this.state.showCountdown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })))), !this.state.showCountdown && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "sign",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Form__WEBPACK_IMPORTED_MODULE_3__["SignFormContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Index_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a['page-wrap--grey'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Contact_Contact__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./store/actions/creators.js":
/*!***********************************!*\
  !*** ./store/actions/creators.js ***!
  \***********************************/
/*! exports provided: toggleMainMenu, getProgress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMainMenu", function() { return toggleMainMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgress", function() { return getProgress; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/actions/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var toggleMainMenu = function toggleMainMenu() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_MAIN_MENU"]
  };
};
var getProgress = function getProgress() {
  return function (dispatch) {
    var url = "".concat("https://letter-from-humanity-api-stage.herokuapp.com", "/stats");
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_PROGRESS"],
      payload: {
        promise: axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url)
      }
    });
  };
};

/***/ }),

/***/ "./store/actions/types.js":
/*!********************************!*\
  !*** ./store/actions/types.js ***!
  \********************************/
/*! exports provided: TOGGLE_MAIN_MENU, GET_PROGRESS, GET_PROGRESS_PENDING, GET_PROGRESS_FULFILLED, GET_PROGRESS_REJECTED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_MAIN_MENU", function() { return TOGGLE_MAIN_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROGRESS", function() { return GET_PROGRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROGRESS_PENDING", function() { return GET_PROGRESS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROGRESS_FULFILLED", function() { return GET_PROGRESS_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROGRESS_REJECTED", function() { return GET_PROGRESS_REJECTED; });
var TOGGLE_MAIN_MENU = 'TOGGLE_MAIN_MENU';
var GET_PROGRESS = 'GET_PROGRESS';
var GET_PROGRESS_PENDING = 'GET_PROGRESS_PENDING';
var GET_PROGRESS_FULFILLED = 'GET_PROGRESS_FULFILLED';
var GET_PROGRESS_REJECTED = 'GET_PROGRESS_REJECTED';

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: EVENT_DATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_DATE", function() { return EVENT_DATE; });
var EVENT_DATE = "Jun 10 2019 21:00:00 GMT+0200";

/***/ }),

/***/ "./utils/numbers.js":
/*!**************************!*\
  !*** ./utils/numbers.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  formatInteger: function formatInteger(strInt) {
    var number = new Number(strInt);
    return number.toLocaleString();
  }
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames/bind":
/*!**********************************!*\
  !*** external "classnames/bind" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames/bind");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-scrollable-anchor":
/*!******************************************!*\
  !*** external "react-scrollable-anchor" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollable-anchor");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map