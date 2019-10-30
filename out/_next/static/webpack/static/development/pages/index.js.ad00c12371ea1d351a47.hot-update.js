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
/* harmony import */ var _Config2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Config2 */ "./components/ParticleStars/Config2.js");
/* harmony import */ var _particlesjs_config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./particlesjs-config.json */ "./components/ParticleStars/particlesjs-config.json");
var _particlesjs_config_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./particlesjs-config.json */ "./components/ParticleStars/particlesjs-config.json", 1);
/* harmony import */ var _ParticleStars_module_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ParticleStars.module.sass */ "./components/ParticleStars/ParticleStars.module.sass");
/* harmony import */ var _ParticleStars_module_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ParticleStars_module_sass__WEBPACK_IMPORTED_MODULE_5__);
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





 // import data from '../db/layout.json';


console.log(_particlesjs_config_json__WEBPACK_IMPORTED_MODULE_4__);

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
          className: _ParticleStars_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a['particles'],
          width: "100%",
          height: "100%",
          params: _Config2__WEBPACK_IMPORTED_MODULE_3__["default"],
          style: {},
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
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

/***/ "./components/ParticleStars/particlesjs-config.json":
/*!**********************************************************!*\
  !*** ./components/ParticleStars/particlesjs-config.json ***!
  \**********************************************************/
/*! exports provided: particles, interactivity, retina_detect, default */
/***/ (function(module) {

module.exports = {"particles":{"number":{"value":91,"density":{"enable":true,"value_area":481.0236182596568}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":4},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.7856719098241062,"random":true,"anim":{"enable":true,"speed":2.0301930307533627,"opacity_min":0,"sync":false}},"size":{"value":1,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":19.24094473038627,"direction":"none","random":true,"straight":true,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"bubble"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":170.53621458328246,"size":4.060386061506726,"duration":1.136908097221883,"opacity":8,"speed":3},"repulse":{"distance":48.72463273808071,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true};

/***/ })

})
//# sourceMappingURL=index.js.ad00c12371ea1d351a47.hot-update.js.map