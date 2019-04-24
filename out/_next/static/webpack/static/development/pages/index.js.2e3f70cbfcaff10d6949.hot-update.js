webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProgressBar/ProgressContainer.js":
/*!*****************************************************!*\
  !*** ./components/ProgressBar/ProgressContainer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressBar */ "./components/ProgressBar/ProgressBar.js");
/* harmony import */ var _store_actions_creators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/creators */ "./store/actions/creators.js");
var _jsxFileName = "/Users/antonkjorcklinden/Development/letterfromhumanity/components/ProgressBar/ProgressContainer.js";

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
    value: function componentDidMount() {// this.props.getProgress();
    }
  }, {
    key: "render",
    value: function render() {
      var progressData = this.props.progressData;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProgressBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        progressData: progressData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
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

/***/ })

})
//# sourceMappingURL=index.js.2e3f70cbfcaff10d6949.hot-update.js.map