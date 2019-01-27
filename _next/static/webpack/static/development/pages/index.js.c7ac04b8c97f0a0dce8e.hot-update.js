webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Letter/Letter.js":
/*!*************************************!*\
  !*** ./components/Letter/Letter.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProgressBar_ProgressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProgressBar/ProgressBar */ "./components/ProgressBar/ProgressBar.js");
var _jsxFileName = "/Users/antonkjorcklinden/Development/letterfromhumanity/components/Letter/Letter.js";



var Letter = function Letter() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "A long letter here..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProgressBar_ProgressBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Letter);

/***/ }),

/***/ "./components/ProgressBar/ProgressBar.js":
/*!***********************************************!*\
  !*** ./components/ProgressBar/ProgressBar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/antonkjorcklinden/Development/letterfromhumanity/components/ProgressBar/ProgressBar.js";


var ProgressBar = function ProgressBar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "||||||||||||||||--- (progress 72%)"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ }),

/***/ "./components/SplashScreen/SplashScreen.js":
/*!*************************************************!*\
  !*** ./components/SplashScreen/SplashScreen.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/antonkjorcklinden/Development/letterfromhumanity/components/SplashScreen/SplashScreen.js";


var SplashScreen = function SplashScreen() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "WE ARE ONELAW LOGO HERE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "#letterfromhumanity"));
};

/* harmony default export */ __webpack_exports__["default"] = (SplashScreen);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _sass_application_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/application.scss */ "./sass/application.scss");
/* harmony import */ var _sass_application_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_application_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Form_SignFormContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Form/SignFormContainer */ "./components/Form/SignFormContainer.js");
/* harmony import */ var _store_configurateStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configurateStore */ "./store/configurateStore.js");
/* harmony import */ var _components_Menu_ToggleButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Menu/ToggleButton */ "./components/Menu/ToggleButton.js");
/* harmony import */ var _components_Menu_MainMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Menu/MainMenu */ "./components/Menu/MainMenu.js");
/* harmony import */ var _components_SplashScreen_SplashScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SplashScreen/SplashScreen */ "./components/SplashScreen/SplashScreen.js");
/* harmony import */ var _components_Letter_Letter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Letter/Letter */ "./components/Letter/Letter.js");
var _jsxFileName = "/Users/antonkjorcklinden/Development/letterfromhumanity/pages/index.js";









var store = Object(_store_configurateStore__WEBPACK_IMPORTED_MODULE_4__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Menu_MainMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Menu_ToggleButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SplashScreen_SplashScreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Letter_Letter__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Form_SignFormContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.c7ac04b8c97f0a0dce8e.hot-update.js.map