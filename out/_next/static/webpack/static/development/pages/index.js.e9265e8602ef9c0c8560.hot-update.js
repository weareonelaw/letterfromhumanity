webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Checkbox/Checkbox.js":
/*!*****************************************!*\
  !*** ./components/Checkbox/Checkbox.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
  var checkboxClass = cx({
    'form-helper': true,
    'form-helper--has-error': touched && error
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, input, {
    placeholder: label,
    type: type,
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, " ", label), touched && (error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Checkbox_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['form-helper'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, error) || warning && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Checkbox_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a['form-helper'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, warning)));
};

/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ })

})
//# sourceMappingURL=index.js.e9265e8602ef9c0c8560.hot-update.js.map