webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Menu/MainMenu.js":
/*!*************************************!*\
  !*** ./components/Menu/MainMenu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
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
  }, released && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: _MainMenu_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a['link'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#sign",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Sign")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: _MainMenu_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a['link'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "About")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    menuOpen: state.ui.menuOpen
  };
}, _store_actions_creators__WEBPACK_IMPORTED_MODULE_3__)(MainMenu));

/***/ })

})
//# sourceMappingURL=index.js.67b3cb04ab3d18b011b4.hot-update.js.map