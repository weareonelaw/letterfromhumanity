webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ParticleStars/ParticleStars.js":
/*!***************************************************!*\
  !*** ./components/ParticleStars/ParticleStars.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/lib/particles.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _particlesjs_config_floating_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./particlesjs-config-floating.json */ "./components/ParticleStars/particlesjs-config-floating.json");
var _particlesjs_config_floating_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./particlesjs-config-floating.json */ "./components/ParticleStars/particlesjs-config-floating.json", 1);
/* harmony import */ var _ParticleStars_module_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ParticleStars.module.sass */ "./components/ParticleStars/ParticleStars.module.sass");
/* harmony import */ var _ParticleStars_module_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ParticleStars_module_sass__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/ahedstrom/Development/projects/weareonelaw/letterfromhumanity-ui/components/ParticleStars/ParticleStars.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ParticleStars =
/*#__PURE__*/
function (_Component) {
  _inherits(ParticleStars, _Component);

  function ParticleStars(props) {
    var _this;

    _classCallCheck(this, ParticleStars);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ParticleStars).call(this, props));
    _this.state = {
      width: "100%",
      height: "100%"
    };
    return _this;
  }

  _createClass(ParticleStars, [{
    key: "componentDidMount",
    value: function componentDidMount() {// TODO: Measure height
    }
  }, {
    key: "render",
    value: function render() {
      return (// <div className="particles-container">
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_particles_js__WEBPACK_IMPORTED_MODULE_2___default.a, {
          className: _ParticleStars_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a['particles'],
          width: "100%",
          height: "100%",
          params: _particlesjs_config_floating_json__WEBPACK_IMPORTED_MODULE_3__,
          style: {},
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }) // </div>

      );
    }
  }]);

  return ParticleStars;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

;
ParticleStars.defaultProps = {};
ParticleStars.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (ParticleStars);

/***/ }),

/***/ "./components/ParticleStars/particlesjs-config-floating.json":
/*!*******************************************************************!*\
  !*** ./components/ParticleStars/particlesjs-config-floating.json ***!
  \*******************************************************************/
/*! exports provided: particles, interactivity, retina_detect, default */
/***/ (function(module) {

module.exports = {"particles":{"number":{"value":82,"density":{"enable":false,"value_area":881.8766334760375}},"color":{"value":"#ffffff"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#c2ff00"},"polygon":{"nb_sides":7},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":1.5,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":144.30708547789706,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"top-right","random":true,"straight":true,"out_mode":"out","bounce":false,"attract":{"enable":true,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true};

/***/ }),

/***/ "./components/ParticleStars/particlesjs-config.json":
false

})
//# sourceMappingURL=index.js.4f9650bcff85758d35f2.hot-update.js.map