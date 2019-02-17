webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Alert/index.js":
/*!***********************************!*\
  !*** ./components/Alert/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/antonkjorcklinden/Development/letterfromhumanity/components/Alert/index.js";


var Alert = function Alert(_ref) {
  var show = _ref.show,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? 'error' : _ref$message;
  if (show) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, message);else return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Alert);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./components/SignForm/Form.js");
/* harmony import */ var _Thanks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Thanks */ "./components/SignForm/Thanks.js");
/* harmony import */ var _submitForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submitForm */ "./components/SignForm/submitForm.js");
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Alert */ "./components/Alert/index.js");
var _jsxFileName = "/Users/antonkjorcklinden/Development/letterfromhumanity/components/SignForm/SignForm.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var SignForm = function SignForm(_ref) {
  var submitSucceeded = _ref.submitSucceeded,
      submitFailed = _ref.submitFailed,
      rest = _ref.rest;
  if (submitSucceeded) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Thanks__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  });else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    onSubmit: _submitForm__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Alert__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: submitFailed,
    message: "fail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (SignForm);

/***/ })

})
//# sourceMappingURL=index.js.7082099f715af5a63ee9.hot-update.js.map