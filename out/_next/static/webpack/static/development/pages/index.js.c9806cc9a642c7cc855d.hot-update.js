webpackHotUpdate("static/development/pages/index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.c9806cc9a642c7cc855d.hot-update.js.map