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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
	"countdown": "countdown___1o1He",
	"unit-box": "unit-box___1Sh3G",
	"number": "number___1oGs8",
	"unit": "unit___3eGm5"
};

/***/ }),
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
/* 5 */
/***/ (function(module, exports) {

module.exports = {
	"contact": "contact___3E87t",
	"sub-heading": "sub-heading___9EZIM"
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
	"thanks": "thanks___LvYg5",
	"title": "title___-POiB",
	"desc": "desc___21W9Y",
	"actions": "actions___3fK_8",
	"btn": "btn___HlvNC"
};

/***/ }),
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-scrollable-anchor");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("classnames/bind");

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports = {
	"hashtag-intro": "hashtag-intro___38730",
	"title": "title___2Ky7v",
	"desc": "desc___2XJCi",
	"scroll-down": "scroll-down___11e0G",
	"chevron": "chevron___3VDka"
};

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "wrapper___3MtVa",
	"form-helper": "form-helper___3TbOM",
	"form-helper--has-error": "form-helper--has-error___3irBB"
};

/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports) {

module.exports = {
	"btn": "btn___2z1Ed",
	"secondary": "secondary___3Hgrp",
	"btn--block": "btn--block___ZphY1"
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {
	"menu-toggler": "menu-toggler___3glql",
	"bar1": "bar1___8XMHD",
	"bar2": "bar2___2bJZC",
	"bar3": "bar3___2oZB_",
	"opened": "opened___3dNsC"
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {
  formatInteger: function formatInteger(strInt) {
    var number = new Number(strInt);
    return number.toLocaleString();
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {
	"layout": "layout___2DSVW",
	"page-wrap--grey": "page-wrap--grey___2VkYb"
};

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

module.exports = {
	"header": "header___2kCyu",
	"logo": "logo___1yxf8"
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {
	"splash-screen": "splash-screen___1V1ws",
	"fadeout": "fadeout___36xxr",
	"logo": "logo___3Eq9n"
};

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {
	"alert": "alert___fupJP"
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = {
	"form-wrapper": "form-wrapper___34WXN"
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = {
	"logo": "logo___3LF--"
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = {
	"header": "header___10WHU"
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = {
	"page": "page___2lJdm"
};

/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(49);


/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var creators_namespaceObject = {};
__webpack_require__.r(creators_namespaceObject);
__webpack_require__.d(creators_namespaceObject, "toggleMainMenu", function() { return creators_toggleMainMenu; });
__webpack_require__.d(creators_namespaceObject, "getProgress", function() { return creators_getProgress; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-scrollable-anchor"
var external_react_scrollable_anchor_ = __webpack_require__(12);
var external_react_scrollable_anchor_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollable_anchor_);

// EXTERNAL MODULE: ./pages/Index.module.sass
var Index_module = __webpack_require__(23);
var Index_module_default = /*#__PURE__*/__webpack_require__.n(Index_module);

// EXTERNAL MODULE: external "redux-form"
var external_redux_form_ = __webpack_require__(3);

// CONCATENATED MODULE: ./components/SignForm/validate.js
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

/* harmony default export */ var SignForm_validate = (validate);
// EXTERNAL MODULE: ./components/Checkbox/Checkbox.module.sass
var Checkbox_module = __webpack_require__(17);
var Checkbox_module_default = /*#__PURE__*/__webpack_require__.n(Checkbox_module);

// CONCATENATED MODULE: ./components/Checkbox/Checkbox.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var Checkbox_Checkbox = function Checkbox(_ref) {
  var input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      id = _ref.id,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      warning = _ref$meta.warning;
  return external_react_default.a.createElement("div", {
    className: Checkbox_module_default.a['wrapper']
  }, external_react_default.a.createElement("input", _extends({}, input, {
    placeholder: label,
    type: type,
    id: id
  })), external_react_default.a.createElement("label", {
    htmlFor: id
  }, " ", label), touched && (error && external_react_default.a.createElement("div", {
    className: "".concat(Checkbox_module_default.a['form-helper'], " ").concat(Checkbox_module_default.a['form-helper--has-error'])
  }, error) || warning && external_react_default.a.createElement("div", {
    className: Checkbox_module_default.a['form-helper']
  }, warning)));
};

/* harmony default export */ var components_Checkbox_Checkbox = (Checkbox_Checkbox);
// EXTERNAL MODULE: ./components/SignForm/Form.module.sass
var Form_module = __webpack_require__(18);
var Form_module_default = /*#__PURE__*/__webpack_require__.n(Form_module);

// EXTERNAL MODULE: ./components/Button/Button.module.sass
var Button_module = __webpack_require__(19);
var Button_module_default = /*#__PURE__*/__webpack_require__.n(Button_module);

// EXTERNAL MODULE: external "classnames/bind"
var bind_ = __webpack_require__(13);
var bind_default = /*#__PURE__*/__webpack_require__.n(bind_);

// CONCATENATED MODULE: ./components/Button/index.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var cx = bind_default.a.bind(Button_module_default.a);

var Button_Button = function Button(_ref) {
  var _cx;

  var type = _ref.type,
      children = _ref.children,
      block = _ref.block,
      className = _ref.className,
      secondary = _ref.secondary,
      onClick = _ref.onClick,
      href = _ref.href,
      target = _ref.target;
  var buttonClassNames = cx((_cx = {}, _defineProperty(_cx, "".concat(Button_module_default.a.btn), true), _defineProperty(_cx, "".concat(Button_module_default.a['btn--block']), block), _defineProperty(_cx, "".concat(Button_module_default.a['secondary']), secondary), _defineProperty(_cx, className, true), _cx));

  if (href) {
    return external_react_default.a.createElement("a", {
      href: href,
      target: target,
      className: buttonClassNames,
      onClick: onClick
    }, children);
  }

  return external_react_default.a.createElement("button", {
    type: type,
    className: buttonClassNames,
    onClick: onClick
  }, children);
};

/* harmony default export */ var components_Button = (Button_Button);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(10);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__(35);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(6);

// CONCATENATED MODULE: ./components/Input/Input.js
function Input_extends() { Input_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Input_extends.apply(this, arguments); }

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

  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(TextField_default.a, Input_extends({
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
  }, input, custom)));
}

InputClass.props = {
  onChange: external_prop_types_default.a.func
};
/* harmony default export */ var Input = (Object(styles_["withStyles"])(styles)(InputClass));
// CONCATENATED MODULE: ./components/SignForm/Form.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Form_Form =
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
      return external_react_default.a.createElement("div", {
        className: Form_module_default.a['signup-form']
      }, external_react_default.a.createElement("form", {
        onSubmit: this.props.handleSubmit(this.props.onSubmit)
      }, external_react_default.a.createElement(external_redux_form_["Field"], {
        name: "firstname",
        component: Input,
        placeholder: "First name",
        required: true
      }), external_react_default.a.createElement(external_redux_form_["Field"], {
        name: "lastname",
        component: Input,
        placeholder: "Last name"
      }), external_react_default.a.createElement(external_redux_form_["Field"], {
        name: "email",
        component: Input,
        placeholder: "Email",
        type: "email",
        required: true
      }), external_react_default.a.createElement(external_redux_form_["Field"], {
        name: "location",
        component: Input,
        placeholder: "Where are you located?"
      }), external_react_default.a.createElement("p", {
        className: Form_module_default.a['desc']
      }, "When the signature is sent to the recipient, only your first and last name are visible. We use your email address at the collection of names to be sure that each signature is unique. The email address will not be saved in any other way. Read more about how we handle your ", external_react_default.a.createElement("a", {
        href: "#",
        className: Form_module_default.a['link']
      }, "personal information"), "."), external_react_default.a.createElement(external_redux_form_["Field"], {
        name: "agree",
        id: "agree",
        component: components_Checkbox_Checkbox,
        type: "checkbox",
        label: "I understand and want to sign the letter"
      }), external_react_default.a.createElement(components_Button, {
        className: Form_module_default.a['submit'],
        type: "submit",
        block: true
      }, "Sign")));
    }
  }]);

  return Form;
}(external_react_default.a.Component);

/* harmony default export */ var SignForm_Form = (Form_Form);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(2);

// EXTERNAL MODULE: ./components/SignForm/Thanks.module.sass
var Thanks_module = __webpack_require__(7);
var Thanks_module_default = /*#__PURE__*/__webpack_require__.n(Thanks_module);

// CONCATENATED MODULE: ./components/SignForm/Thanks.js
function Thanks_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Thanks_typeof = function _typeof(obj) { return typeof obj; }; } else { Thanks_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Thanks_typeof(obj); }

function Thanks_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Thanks_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Thanks_createClass(Constructor, protoProps, staticProps) { if (protoProps) Thanks_defineProperties(Constructor.prototype, protoProps); if (staticProps) Thanks_defineProperties(Constructor, staticProps); return Constructor; }

function Thanks_possibleConstructorReturn(self, call) { if (call && (Thanks_typeof(call) === "object" || typeof call === "function")) { return call; } return Thanks_assertThisInitialized(self); }

function Thanks_getPrototypeOf(o) { Thanks_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Thanks_getPrototypeOf(o); }

function Thanks_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Thanks_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Thanks_setPrototypeOf(subClass, superClass); }

function Thanks_setPrototypeOf(o, p) { Thanks_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Thanks_setPrototypeOf(o, p); }






var Thanks_Thanks =
/*#__PURE__*/
function (_Component) {
  Thanks_inherits(Thanks, _Component);

  function Thanks(props) {
    var _this;

    Thanks_classCallCheck(this, Thanks);

    _this = Thanks_possibleConstructorReturn(this, Thanks_getPrototypeOf(Thanks).call(this, props));
    _this.state = {
      copiedUrl: false
    };
    _this.copyToClipboard = _this.copyToClipboard.bind(Thanks_assertThisInitialized(_this));
    return _this;
  }

  Thanks_createClass(Thanks, [{
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
      return external_react_default.a.createElement("div", {
        className: Thanks_module_default.a['thanks']
      }, external_react_default.a.createElement("h1", {
        className: Thanks_module_default.a['title']
      }, "Thank you!"), external_react_default.a.createElement("p", {
        className: Thanks_module_default.a['desc']
      }, "In the midst of these one hundred billion galaxies, we're eternally grateful that you are one of ", numberSigns, " humans that signed this letter. By making history together, we can create the future. You can share the letter with your friends below.", lastSignLocation && external_react_default.a.createElement("span", null, "The person that signed the letter before you is located in ", external_react_default.a.createElement("b", null, lastSignLocation), ".")), external_react_default.a.createElement("div", {
        className: Thanks_module_default.a['actions']
      }, external_react_default.a.createElement(components_Button, {
        className: Thanks_module_default.a['btn'],
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
        }
      }, this.state.copiedUrl ? 'Link copied to clipboard!' : 'Share the message'), external_react_default.a.createElement(components_Button, {
        className: Thanks_module_default.a['btn'],
        block: true,
        secondary: true,
        href: "https://www.instagram.com/weareonelaw",
        target: "_blank"
      }, "Follow the project on Instagram"), external_react_default.a.createElement(components_Button, {
        className: Thanks_module_default.a['btn'],
        block: true,
        secondary: true,
        href: "#about"
      }, "Read more about the project")));
    }
  }]);

  return Thanks;
}(external_react_["Component"]);

;
/* harmony default export */ var SignForm_Thanks = (Thanks_Thanks);
// EXTERNAL MODULE: ./store/actions/types.js
var types = __webpack_require__(4);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(21);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./store/actions/creators.js


var creators_toggleMainMenu = function toggleMainMenu() {
  return {
    type: types["e" /* TOGGLE_MAIN_MENU */]
  };
};
var creators_getProgress = function getProgress() {
  return function (dispatch) {
    var url = "".concat("https://letter-from-humanity-api-stage.herokuapp.com", "/stats");
    dispatch({
      type: types["a" /* GET_PROGRESS */],
      payload: {
        promise: external_axios_default.a.get(url)
      }
    });
  };
};
// EXTERNAL MODULE: ./utils/numbers.js
var numbers = __webpack_require__(22);

// CONCATENATED MODULE: ./components/SignForm/ThanksContainer.js
function ThanksContainer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ThanksContainer_typeof = function _typeof(obj) { return typeof obj; }; } else { ThanksContainer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ThanksContainer_typeof(obj); }

function ThanksContainer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ThanksContainer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ThanksContainer_createClass(Constructor, protoProps, staticProps) { if (protoProps) ThanksContainer_defineProperties(Constructor.prototype, protoProps); if (staticProps) ThanksContainer_defineProperties(Constructor, staticProps); return Constructor; }

function ThanksContainer_possibleConstructorReturn(self, call) { if (call && (ThanksContainer_typeof(call) === "object" || typeof call === "function")) { return call; } return ThanksContainer_assertThisInitialized(self); }

function ThanksContainer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ThanksContainer_getPrototypeOf(o) { ThanksContainer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ThanksContainer_getPrototypeOf(o); }

function ThanksContainer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ThanksContainer_setPrototypeOf(subClass, superClass); }

function ThanksContainer_setPrototypeOf(o, p) { ThanksContainer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ThanksContainer_setPrototypeOf(o, p); }







var ThanksContainer_ThanksContainer =
/*#__PURE__*/
function (_Component) {
  ThanksContainer_inherits(ThanksContainer, _Component);

  function ThanksContainer() {
    ThanksContainer_classCallCheck(this, ThanksContainer);

    return ThanksContainer_possibleConstructorReturn(this, ThanksContainer_getPrototypeOf(ThanksContainer).apply(this, arguments));
  }

  ThanksContainer_createClass(ThanksContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getProgress();
    }
  }, {
    key: "render",
    value: function render() {
      var progressData = this.props.progressData;
      return external_react_default.a.createElement(SignForm_Thanks, {
        numberSigns: Object(numbers["formatInteger"])(progressData.value)
      });
    }
  }]);

  return ThanksContainer;
}(external_react_["Component"]);

;
/* harmony default export */ var SignForm_ThanksContainer = (Object(external_react_redux_["connect"])(function (state) {
  return {
    progressData: state.progress
  };
}, creators_namespaceObject)(ThanksContainer_ThanksContainer));
// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(11);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// CONCATENATED MODULE: ./helpers/errorCodes.js
var errorCodes = [{
  serverErrorField: 'email',
  errorMessage: 'You have already signed the letter. Thank you :)',
  errorField: 'email'
}, {
  errorCode: 'SequelizeValidationError',
  errorMessage: 'Validation error. Please check all fields.'
}];
// CONCATENATED MODULE: ./helpers/handleError.js
function handleError_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var handleError_handleError = function handleError(err) {
  var errors = handleError_defineProperty({}, '_error', 'Oh no! Something went wrong. Please check all fields and try again!');

  try {
    if (typeof err.response.data.fields !== "undefined") {
      var _loop = function _loop(key) {
        var selectedObject = errorCodes.find(function (obj) {
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

  throw new external_redux_form_["SubmissionError"](errors);
};

/* harmony default export */ var helpers_handleError = (handleError_handleError);
// CONCATENATED MODULE: ./components/SignForm/submitForm.js


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { submitForm_defineProperty(target, key, source[key]); }); } return target; }

function submitForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


 // TODO: Handle when no connection to internet is present.

var submitForm =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(values) {
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", external_axios_default.a.post("https://letter-from-humanity-api-stage.herokuapp.com" + '/signatures/', _objectSpread({}, values)).catch(function (err) {
              return helpers_handleError(err);
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

/* harmony default export */ var SignForm_submitForm = (submitForm);
// EXTERNAL MODULE: ./components/Alert/Alert.module.sass
var Alert_module = __webpack_require__(36);
var Alert_module_default = /*#__PURE__*/__webpack_require__.n(Alert_module);

// CONCATENATED MODULE: ./components/Alert/index.js



var Alert_Alert = function Alert(_ref) {
  var show = _ref.show,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? 'error' : _ref$message;
  if (show) return external_react_default.a.createElement("span", {
    className: Alert_module_default.a["alert"]
  }, message);else return null;
};

/* harmony default export */ var components_Alert = (Alert_Alert);
// EXTERNAL MODULE: ./components/SignForm/SignForm.module.sass
var SignForm_module = __webpack_require__(37);
var SignForm_module_default = /*#__PURE__*/__webpack_require__.n(SignForm_module);

// CONCATENATED MODULE: ./components/SignForm/SignForm.js






var SignForm_SignForm = function SignForm(_ref) {
  var submitSucceeded = _ref.submitSucceeded,
      submitFailed = _ref.submitFailed,
      handleSubmit = _ref.handleSubmit,
      _ref$error = _ref.error,
      error = _ref$error === void 0 ? 'Oh no! Something went wrong. Please check all fields and try again.' : _ref$error;
  if (submitSucceeded) return external_react_default.a.createElement(SignForm_ThanksContainer, null);else return external_react_default.a.createElement("div", {
    className: SignForm_module_default.a["form-wrapper"]
  }, external_react_default.a.createElement("h1", null, "Sign the letter"), external_react_default.a.createElement(SignForm_Form, {
    onSubmit: SignForm_submitForm,
    handleSubmit: handleSubmit
  }), external_react_default.a.createElement(components_Alert, {
    show: submitFailed,
    message: error
  }));
};
/* harmony default export */ var components_SignForm_SignForm = (SignForm_SignForm);
// CONCATENATED MODULE: ./containers/Form/SignFormContainer.js




var SignFormContainer_SignFormContainer = function SignFormContainer(props) {
  return external_react_default.a.createElement(components_SignForm_SignForm, props);
};
/* harmony default export */ var Form_SignFormContainer = (Object(external_redux_form_["reduxForm"])({
  form: 'signs',
  validate: SignForm_validate
})(SignFormContainer_SignFormContainer));
// CONCATENATED MODULE: ./containers/Form/index.js


// EXTERNAL MODULE: ./components/Logo/Logo.module.sass
var Logo_module = __webpack_require__(38);
var Logo_module_default = /*#__PURE__*/__webpack_require__.n(Logo_module);

// CONCATENATED MODULE: ./components/Logo/Logo.js



var Logo_Logo = function Logo() {
  return external_react_default.a.createElement("div", {
    className: Logo_module_default.a['logo']
  }, external_react_default.a.createElement("svg", {
    version: "1.1",
    id: "Layer_1",
    x: "0px",
    y: "0px",
    width: "857.5px",
    height: "221.25px",
    viewBox: "0 0 857.5 221.25",
    enableBackground: "new 0 0 857.5 221.25"
  }, external_react_default.a.createElement("path", {
    className: "gfx world",
    fill: "#FFFFFF",
    d: "M278.584,54.031c-4.777-13.127-20.048-19.783-45.391-19.783c-5.188,0-10.751,0.293-16.596,0.841 c-18.331-17.048-42.882-27.492-69.83-27.492C94.46,7.597,51.171,46.93,44.913,97.57c-1.464,1.012-2.901,2.026-4.292,3.043 c-26.014,18.994-36.432,36.245-30.963,51.274c4.777,13.127,20.049,19.783,45.392,19.783c2.997,0,6.121-0.099,9.345-0.282 c18.724,25.153,48.677,41.478,82.373,41.478c56.593,0,102.635-46.042,102.635-102.635c0-2.051-0.067-4.087-0.187-6.108 C274.052,85.596,283.939,68.747,278.584,54.031z M146.767,191.866c-22.221,0-42.386-8.935-57.121-23.388 c21.843-3.62,46.45-10.216,71.308-19.261c24.857-9.045,47.929-19.785,67.061-31.104 C224.034,159.442,189.121,191.866,146.767,191.866z M146.767,28.597c39.143,0,71.926,27.697,79.815,64.52 c-19.456,12.786-45.018,25.19-73.151,35.428c-28.248,10.279-55.881,17.196-78.785,19.878c-6.063-11.404-9.514-24.399-9.514-38.19 C65.132,65.218,101.753,28.597,146.767,28.597z M30.331,144.364c-0.361-0.993,1.274-7.8,14.865-19.385 c1.244,8.605,3.557,16.869,6.804,24.65C35.706,149.198,30.693,145.357,30.331,144.364z M244.701,79.503 c-2.593-8.245-6.203-16.042-10.678-23.249c18.061,0.125,23.51,4.263,23.888,5.3C258.257,62.506,256.775,68.791,244.701,79.503z"
  }), external_react_default.a.createElement("polygon", {
    className: "gfx cross",
    fill: "#FFFFFF",
    points: "528.398,98.75 461.989,98.75 461.989,10.25 439.989,10.25 439.989,98.75 373.466,98.75 373.466,120.75 439.989,120.75 439.989,209.344 461.989,209.344 461.989,120.75 528.398,120.75 "
  }), external_react_default.a.createElement("path", {
    className: "gfx heart",
    fill: "#FFFFFF",
    d: "M839.958,41.482c-11.84-21.438-34.4-35.291-57.477-35.291c-12.064,0-30.063,3.732-47.507,21.452 c-17.439-17.714-35.437-21.444-47.5-21.444c-23.094,0-45.665,13.865-57.501,35.325c-10.932,19.817-10.556,42.591,1.005,60.921 c31.01,49.167,94.523,103.335,97.212,105.616l6.798,5.771l6.795-5.773c2.698-2.293,66.443-56.719,97.213-105.623 C850.543,84.086,850.902,61.299,839.958,41.482z M687.475,27.199c14.214,0,27.752,7.9,39.151,22.846l8.349,10.948l8.349-10.948 c11.403-14.95,24.943-22.854,39.158-22.854c15.548,0,30.893,9.595,39.094,24.443c7.3,13.219,7.171,27.658-0.353,39.617 c-23.161,36.811-67.765,78.367-86.241,94.843c-18.415-16.41-62.896-57.839-86.241-94.852c-7.529-11.938-7.667-26.363-0.379-39.575 C656.561,36.803,671.913,27.199,687.475,27.199z"
  })));
};

/* harmony default export */ var components_Logo_Logo = (Logo_Logo);
// EXTERNAL MODULE: ./components/Header/Header.module.sass
var Header_module = __webpack_require__(25);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);

// CONCATENATED MODULE: ./components/Header/Header.js






var Header_Header = function Header() {
  return external_react_default.a.createElement("div", {
    className: Header_module_default.a['header']
  }, external_react_default.a.createElement("div", {
    className: Header_module_default.a['logo']
  }, external_react_default.a.createElement(components_Logo_Logo, null)));
};

/* harmony default export */ var components_Header_Header = (Object(external_react_redux_["connect"])(function (state) {
  return {
    menuOpen: state.ui.menuOpen
  };
}, creators_namespaceObject)(Header_Header));
// EXTERNAL MODULE: ./components/Menu/ToggleButton.module.sass
var ToggleButton_module = __webpack_require__(20);
var ToggleButton_module_default = /*#__PURE__*/__webpack_require__.n(ToggleButton_module);

// CONCATENATED MODULE: ./components/Menu/ToggleButton.js
function ToggleButton_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var ToggleButton_cx = bind_default.a.bind(ToggleButton_module_default.a);

var ToggleButton_ToggleButton = function ToggleButton(_ref) {
  var _cx;

  var toggleMainMenu = _ref.toggleMainMenu,
      menuOpen = _ref.menuOpen;
  var className = ToggleButton_cx((_cx = {}, ToggleButton_defineProperty(_cx, 'menu-toggler', true), ToggleButton_defineProperty(_cx, "opened", menuOpen), _cx));
  return external_react_default.a.createElement("div", {
    className: className,
    onClick: toggleMainMenu
  }, external_react_default.a.createElement("div", {
    className: ToggleButton_module_default.a['bar1']
  }), external_react_default.a.createElement("div", {
    className: ToggleButton_module_default.a['bar2']
  }), external_react_default.a.createElement("div", {
    className: ToggleButton_module_default.a['bar3']
  }));
};

/* harmony default export */ var Menu_ToggleButton = (Object(external_react_redux_["connect"])(function (state) {
  return {
    menuOpen: state.ui.menuOpen
  };
}, creators_namespaceObject)(ToggleButton_ToggleButton));
// EXTERNAL MODULE: ./components/Menu/MainMenu.module.sass
var MainMenu_module = __webpack_require__(8);
var MainMenu_module_default = /*#__PURE__*/__webpack_require__.n(MainMenu_module);

// CONCATENATED MODULE: ./utils/constants.js
var EVENT_DATE = "Jun 10 2019 21:00:00 GMT+0200";
// CONCATENATED MODULE: ./components/Menu/MainMenu.js
function MainMenu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var MainMenu_cx = bind_default.a.bind(MainMenu_module_default.a);

var MainMenu_MainMenu = function MainMenu(_ref) {
  var _cx;

  var toggleMainMenu = _ref.toggleMainMenu,
      menuOpen = _ref.menuOpen;
  var released = new Date(EVENT_DATE) <= new Date();
  var className = MainMenu_cx((_cx = {}, MainMenu_defineProperty(_cx, 'main-menu', true), MainMenu_defineProperty(_cx, "open", menuOpen), _cx));
  return external_react_default.a.createElement("div", {
    className: className
  }, external_react_default.a.createElement("div", {
    className: MainMenu_module_default.a['overlay'],
    onClick: toggleMainMenu
  }), external_react_default.a.createElement("div", {
    className: MainMenu_module_default.a['menu-container']
  }, external_react_default.a.createElement("ul", {
    className: MainMenu_module_default.a['links']
  }, external_react_default.a.createElement("li", {
    className: MainMenu_module_default.a['link']
  }, external_react_default.a.createElement("a", {
    href: "#about"
  }, "The letter")), released && external_react_default.a.createElement("li", {
    className: MainMenu_module_default.a['link']
  }, external_react_default.a.createElement("a", {
    href: "#sign"
  }, "Sign")), external_react_default.a.createElement("li", {
    className: MainMenu_module_default.a['link']
  }, external_react_default.a.createElement("a", {
    href: "#contact"
  }, "Contact")))));
};

/* harmony default export */ var Menu_MainMenu = (Object(external_react_redux_["connect"])(function (state) {
  return {
    menuOpen: state.ui.menuOpen
  };
}, creators_namespaceObject)(MainMenu_MainMenu));
// EXTERNAL MODULE: ./components/SplashScreen/SplashScreen.module.sass
var SplashScreen_module = __webpack_require__(26);
var SplashScreen_module_default = /*#__PURE__*/__webpack_require__.n(SplashScreen_module);

// CONCATENATED MODULE: ./components/SplashScreen/SplashScreen.js




var SplashScreen_SplashScreen = function SplashScreen() {
  return external_react_default.a.createElement("div", {
    className: SplashScreen_module_default.a['splash-screen']
  }, external_react_default.a.createElement("div", {
    className: SplashScreen_module_default.a['logo']
  }, external_react_default.a.createElement(components_Logo_Logo, null)));
};

/* harmony default export */ var components_SplashScreen_SplashScreen = (SplashScreen_SplashScreen);
// EXTERNAL MODULE: ./components/HashtagIntro/HashtagIntro.module.sass
var HashtagIntro_module = __webpack_require__(15);
var HashtagIntro_module_default = /*#__PURE__*/__webpack_require__.n(HashtagIntro_module);

// CONCATENATED MODULE: ./components/HashtagIntro/HashtagIntro.js



var HashtagIntro_HashtagIntro = function HashtagIntro() {
  return external_react_default.a.createElement("div", {
    className: HashtagIntro_module_default.a['hashtag-intro']
  }, external_react_default.a.createElement("h1", {
    className: HashtagIntro_module_default.a['title']
  }, "#letterfromhumanity"), external_react_default.a.createElement("p", {
    className: HashtagIntro_module_default.a['desc']
  }, "Be part of a World Record, and sign the letter that binds humanity together as one"), external_react_default.a.createElement("a", {
    href: "#about",
    className: HashtagIntro_module_default.a['scroll-down']
  }, "Scroll down to explore", external_react_default.a.createElement("div", {
    className: HashtagIntro_module_default.a['chevron']
  })));
};

/* harmony default export */ var components_HashtagIntro_HashtagIntro = (HashtagIntro_HashtagIntro);
// EXTERNAL MODULE: ./components/Contact/Contact.module.sass
var Contact_module = __webpack_require__(5);
var Contact_module_default = /*#__PURE__*/__webpack_require__.n(Contact_module);

// CONCATENATED MODULE: ./components/Contact/Contact.js



var Contact_Contact = function Contact() {
  return external_react_default.a.createElement("div", {
    className: Contact_module_default.a['contact']
  }, external_react_default.a.createElement("h1", {
    className: Contact_module_default.a['title']
  }, "Contact"), external_react_default.a.createElement("h3", {
    className: Contact_module_default.a['sub-heading']
  }, "For Press"), external_react_default.a.createElement("p", {
    className: Contact_module_default.a['desc']
  }, external_react_default.a.createElement("a", {
    href: "mailto:press@letterfromhumanity.org"
  }, "press@letterfromhumanity.org")), external_react_default.a.createElement("h3", {
    className: Contact_module_default.a['sub-heading']
  }, "General Questions"), external_react_default.a.createElement("p", {
    className: Contact_module_default.a['desc']
  }, external_react_default.a.createElement("a", {
    href: "mailto:info@letterfromhumanity.org"
  }, "info@letterfromhumanity.org")), external_react_default.a.createElement("h3", {
    className: Contact_module_default.a['sub-heading']
  }, "Instagram"), external_react_default.a.createElement("p", {
    className: Contact_module_default.a['desc']
  }, external_react_default.a.createElement("a", {
    href: "https://www.instagram.com/weareonelaw"
  }, "@weareonelaw"), external_react_default.a.createElement("br", null), external_react_default.a.createElement("a", {
    href: "https://www.instagram.com/letterfromhumanity"
  }, "@letterfromhumanity")));
};

/* harmony default export */ var components_Contact_Contact = (Contact_Contact);
// EXTERNAL MODULE: ./components/ProgressBar/ProgressBar.module.sass
var ProgressBar_module = __webpack_require__(9);
var ProgressBar_module_default = /*#__PURE__*/__webpack_require__.n(ProgressBar_module);

// CONCATENATED MODULE: ./components/ProgressBar/ProgressBar.js



var STROKE_WIDTH = 4;
var RADIUS = 100;
var NORMALIZED_RADIUS = RADIUS - STROKE_WIDTH * 2;
var CIRCUMFERENCE = NORMALIZED_RADIUS * (2 * Math.PI);

var ProgressBar_ProgressBar = function ProgressBar(_ref) {
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
  return external_react_default.a.createElement("div", {
    className: ProgressBar_module_default.a['progress-bar']
  }, external_react_default.a.createElement("div", {
    className: ProgressBar_module_default.a['mid-text']
  }, external_react_default.a.createElement("p", {
    className: ProgressBar_module_default.a['signs']
  }, external_react_default.a.createElement("span", {
    className: ProgressBar_module_default.a['signs-number']
  }, Object(numbers["formatInteger"])(value)), external_react_default.a.createElement("br", null), "signatures")), external_react_default.a.createElement("svg", {
    className: ProgressBar_module_default.a['svg'],
    viewBox: "0 0 ".concat(RADIUS * 2, " ").concat(RADIUS * 2)
  }, external_react_default.a.createElement("circle", {
    className: ProgressBar_module_default.a['unfilled'],
    r: NORMALIZED_RADIUS,
    cx: RADIUS,
    cy: RADIUS,
    strokeWidth: Math.max(2, STROKE_WIDTH / 4)
  }), external_react_default.a.createElement("circle", {
    className: ProgressBar_module_default.a['filled'],
    r: NORMALIZED_RADIUS,
    cx: RADIUS,
    cy: RADIUS,
    strokeWidth: STROKE_WIDTH,
    strokeDasharray: CIRCUMFERENCE + ' ' + CIRCUMFERENCE,
    style: {
      strokeDashoffset: strokeDashoffset
    }
  })));
};

/* harmony default export */ var components_ProgressBar_ProgressBar = (ProgressBar_ProgressBar);
// CONCATENATED MODULE: ./components/ProgressBar/ProgressContainer.js
function ProgressContainer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProgressContainer_typeof = function _typeof(obj) { return typeof obj; }; } else { ProgressContainer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProgressContainer_typeof(obj); }

function ProgressContainer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProgressContainer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProgressContainer_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProgressContainer_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProgressContainer_defineProperties(Constructor, staticProps); return Constructor; }

function ProgressContainer_possibleConstructorReturn(self, call) { if (call && (ProgressContainer_typeof(call) === "object" || typeof call === "function")) { return call; } return ProgressContainer_assertThisInitialized(self); }

function ProgressContainer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ProgressContainer_getPrototypeOf(o) { ProgressContainer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ProgressContainer_getPrototypeOf(o); }

function ProgressContainer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ProgressContainer_setPrototypeOf(subClass, superClass); }

function ProgressContainer_setPrototypeOf(o, p) { ProgressContainer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ProgressContainer_setPrototypeOf(o, p); }






var ProgressContainer_ProgressContainer =
/*#__PURE__*/
function (_Component) {
  ProgressContainer_inherits(ProgressContainer, _Component);

  function ProgressContainer() {
    ProgressContainer_classCallCheck(this, ProgressContainer);

    return ProgressContainer_possibleConstructorReturn(this, ProgressContainer_getPrototypeOf(ProgressContainer).apply(this, arguments));
  }

  ProgressContainer_createClass(ProgressContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getProgress();
    }
  }, {
    key: "render",
    value: function render() {
      var progressData = this.props.progressData;
      return external_react_default.a.createElement(components_ProgressBar_ProgressBar, {
        progressData: progressData
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
}(external_react_["Component"]);

;
/* harmony default export */ var ProgressBar_ProgressContainer = (Object(external_react_redux_["connect"])(function (state) {
  return {
    progressData: state.progress
  };
}, creators_namespaceObject)(ProgressContainer_ProgressContainer));
// EXTERNAL MODULE: ./components/Letter/Letter.module.sass
var Letter_module = __webpack_require__(39);
var Letter_module_default = /*#__PURE__*/__webpack_require__.n(Letter_module);

// CONCATENATED MODULE: ./components/Letter/Letter.js





var Letter_Letter = function Letter(_ref) {
  var showProgress = _ref.showProgress;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h2", {
    className: Letter_module_default.a['header']
  }, "Dear leaders of the world,"), external_react_default.a.createElement("p", null, "This is a letter signed by a significant part of humanity \u2013 all of us connected to you."), external_react_default.a.createElement("p", null, "We would like to share something that can be both overwhelming, and easy to forget. In the midst of these one hundred billion galaxies, each and every one swirling with billions of stars with orbiting planets, somehow we\u2019re all having a human experience on one of these planets. We are connected not only by sharing this experience with every other human on earth, but also by the deep chemical bond that exists between us and everything else in this universe. The compounds in our bodies are the same ones found in the cosmos, and we have traced their origin back to exploding stars in which all the fundamental ingredients of life once were cooked. In other words, we are all naturally connected \u2013 just by being alive."), external_react_default.a.createElement("p", null, "Therefore, we are writing to you with one purpose; let this letter echo through your next major decision. Make that decision for everyone you love, have ever loved and will ever love. Make it for earth, our blue little home that nourishes our hearts and makes them beat. Make it for humanity. Because from the cosmic perspective, we all share the same origin, the same ability to love, the same home. All of us."), external_react_default.a.createElement("p", null, "From the cosmic perspective, we are one. As one, we can change the world."), showProgress && external_react_default.a.createElement(ProgressBar_ProgressContainer, null));
};

Letter_Letter.defaultProps = {
  showProgress: true
};
Letter_Letter.props = {
  showProgress: external_prop_types_default.a.bool
};
/* harmony default export */ var components_Letter_Letter = (Letter_Letter);
// EXTERNAL MODULE: ./components/Countdown/Countdown.module.sass
var Countdown_module = __webpack_require__(1);
var Countdown_module_default = /*#__PURE__*/__webpack_require__.n(Countdown_module);

// CONCATENATED MODULE: ./components/Countdown/Countdown.js
function Countdown_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Countdown_typeof = function _typeof(obj) { return typeof obj; }; } else { Countdown_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Countdown_typeof(obj); }

function Countdown_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Countdown_defineProperty(target, key, source[key]); }); } return target; }

function Countdown_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Countdown_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Countdown_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Countdown_createClass(Constructor, protoProps, staticProps) { if (protoProps) Countdown_defineProperties(Constructor.prototype, protoProps); if (staticProps) Countdown_defineProperties(Constructor, staticProps); return Constructor; }

function Countdown_possibleConstructorReturn(self, call) { if (call && (Countdown_typeof(call) === "object" || typeof call === "function")) { return call; } return Countdown_assertThisInitialized(self); }

function Countdown_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Countdown_getPrototypeOf(o) { Countdown_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Countdown_getPrototypeOf(o); }

function Countdown_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Countdown_setPrototypeOf(subClass, superClass); }

function Countdown_setPrototypeOf(o, p) { Countdown_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Countdown_setPrototypeOf(o, p); }




/**
 * Note :
 * If you're using react v 15.4 or less
 * You can directly import PropTypes from react instead.
 * Refer to this : https://reactjs.org/warnings/dont-call-proptypes.html
 */

var Countdown_Countdown =
/*#__PURE__*/
function (_Component) {
  Countdown_inherits(Countdown, _Component);

  function Countdown(props) {
    var _this;

    Countdown_classCallCheck(this, Countdown);

    _this = Countdown_possibleConstructorReturn(this, Countdown_getPrototypeOf(Countdown).call(this, props));
    _this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };
    return _this;
  }

  Countdown_createClass(Countdown, [{
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

      this.setState(Countdown_objectSpread({}, date));
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
      return external_react_default.a.createElement("div", {
        className: Countdown_module_default.a['countdown']
      }, days !== 0 && external_react_default.a.createElement("span", {
        className: Countdown_module_default.a['unit-box']
      }, external_react_default.a.createElement("span", {
        className: Countdown_module_default.a['number']
      }, this.addLeadingZeros(days)), external_react_default.a.createElement("span", {
        className: Countdown_module_default.a['unit']
      }, days === 1 ? 'Day' : 'Days')), external_react_default.a.createElement("span", {
        className: Countdown_module_default.a['unit-box']
      }, external_react_default.a.createElement("span", {
        className: Countdown_module_default.a['number']
      }, this.addLeadingZeros(hours)), external_react_default.a.createElement("span", {
        className: Countdown_module_default.a['unit']
      }, "Hours")), external_react_default.a.createElement("span", {
        className: Countdown_module_default.a['unit-box']
      }, external_react_default.a.createElement("span", {
        className: Countdown_module_default.a['number']
      }, this.addLeadingZeros(min)), external_react_default.a.createElement("span", {
        className: Countdown_module_default.a['unit']
      }, "Min")), external_react_default.a.createElement("span", {
        className: Countdown_module_default.a['unit-box']
      }, external_react_default.a.createElement("span", {
        className: Countdown_module_default.a['number']
      }, this.addLeadingZeros(sec)), external_react_default.a.createElement("span", {
        className: Countdown_module_default.a['unit']
      }, "Sec")));
    }
  }]);

  return Countdown;
}(external_react_["Component"]);

Countdown_Countdown.defaultProps = {
  date: new Date()
};
/* harmony default export */ var components_Countdown_Countdown = (Countdown_Countdown);
// EXTERNAL MODULE: ./components/Page/Page.module.sass
var Page_module = __webpack_require__(40);
var Page_module_default = /*#__PURE__*/__webpack_require__.n(Page_module);

// CONCATENATED MODULE: ./components/Page/Page.js



var Page_Page = function Page(_ref) {
  var children = _ref.children;
  return external_react_default.a.createElement("div", {
    className: Page_module_default.a['page']
  }, children);
};

/* harmony default export */ var components_Page_Page = (Page_Page);
// CONCATENATED MODULE: ./pages/index.js
function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }















Object(external_react_scrollable_anchor_["configureAnchors"])({
  offset: -60
});

var pages_Index =
/*#__PURE__*/
function (_Component) {
  pages_inherits(Index, _Component);

  function Index(props) {
    var _this;

    pages_classCallCheck(this, Index);

    _this = pages_possibleConstructorReturn(this, pages_getPrototypeOf(Index).call(this, props));
    _this.state = {
      showSplashScreen: true,
      showCountdown: new Date() < new Date(EVENT_DATE)
    };
    return _this;
  }

  pages_createClass(Index, [{
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

      return external_react_default.a.createElement("div", {
        className: Index_module_default.a['layout']
      }, external_react_default.a.createElement(Menu_ToggleButton, null), external_react_default.a.createElement(Menu_MainMenu, null), external_react_default.a.createElement(components_Header_Header, null), this.state.showSplashScreen && external_react_default.a.createElement(components_SplashScreen_SplashScreen, null), external_react_default.a.createElement(external_react_scrollable_anchor_default.a, {
        id: "intro"
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Page_Page, null, this.state.showCountdown ? external_react_default.a.createElement(components_Countdown_Countdown, {
        date: EVENT_DATE,
        onComplete: function onComplete() {
          return setTimeout(function () {
            _this3.setState({
              showCountdown: false
            });
          }, 1000);
        }
      }) : external_react_default.a.createElement(components_HashtagIntro_HashtagIntro, null)))), external_react_default.a.createElement(external_react_scrollable_anchor_default.a, {
        id: "about"
      }, external_react_default.a.createElement("div", {
        className: Index_module_default.a['page-wrap--grey']
      }, external_react_default.a.createElement(components_Page_Page, null, external_react_default.a.createElement(components_Letter_Letter, {
        showProgress: !this.state.showCountdown
      })))), !this.state.showCountdown && external_react_default.a.createElement(external_react_scrollable_anchor_default.a, {
        id: "sign"
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Page_Page, null, external_react_default.a.createElement(Form_SignFormContainer, null)))), external_react_default.a.createElement(external_react_scrollable_anchor_default.a, {
        id: "contact"
      }, external_react_default.a.createElement("div", {
        className: Index_module_default.a['page-wrap--grey']
      }, external_react_default.a.createElement(components_Page_Page, null, external_react_default.a.createElement(components_Contact_Contact, null)))));
    }
  }]);

  return Index;
}(external_react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ })
/******/ ]);