webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scrollable-anchor */ "./node_modules/react-scrollable-anchor/lib/index.js");
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
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Menu_ToggleButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Menu_MainMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), this.state.showSplashScreen && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SplashScreen_SplashScreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
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
          lineNumber: 53
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HashtagIntro_HashtagIntro__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Letter_Letter__WEBPACK_IMPORTED_MODULE_10__["default"], {
        showProgress: !this.state.showCountdown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })))), !this.state.showCountdown && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "sign",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Form__WEBPACK_IMPORTED_MODULE_3__["SignFormContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Index_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a["page-wrap page-wrap--grey"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Contact_Contact__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      })))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);
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
//# sourceMappingURL=index.js.2f2adc792066b711de92.hot-update.js.map