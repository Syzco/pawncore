(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./components/customer-card.js":
/*!*************************************!*\
  !*** ./components/customer-card.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CustomerCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Documents\\Classwork\\Current Coursework\\IDS4941\\PawnPOS\\pawncore\\frontend\\components\\customer-card.js";

class CustomerCard extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.customer;
  }

  render() {
    if (typeof this.props.customer.fname == 'string') {
      //No Current Customer
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "customer-card",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "customer-card-details",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "customer-input-name",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              name: "fname",
              placeholder: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 68
            }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              name: "lname",
              placeholder: "Last Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 128
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 31
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "customer-input-dob",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              name: "dob",
              placeholder: "Date of Birth"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 67
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 31
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "customer-input-phone",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              name: "phone",
              placeholder: "Phone Number"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 69
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 31
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "customer-input-button",
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: "Search Customer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 71
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 31
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 26
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }, this);
    } else {
      //Has Current Customer
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "customer-card",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "customer-card-details",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "customer-img",
            src: "/img/face2.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 31
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "customer-name",
            children: [this.props.customer.fname, " ", this.props.customer.lname]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 31
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "customer-phone",
            children: this.props.customer.phone
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 31
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "customer-address",
            children: this.props.customer.address
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 31
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "customer-citystate",
            children: [this.props.customer.city, " ", this.props.customer.state, ", ", this.props.customer.zipCode, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 31
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "edit-button",
            src: "/img/icon_pencil.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 31
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 26
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }, this);
    }
  }

}

/***/ }),

/***/ "./components/nav/button.js":
/*!**********************************!*\
  !*** ./components/nav/button.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NavButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tooltip */ "react-tooltip");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Documents\\Classwork\\Current Coursework\\IDS4941\\PawnPOS\\pawncore\\frontend\\components\\nav\\button.js";


function NavButton({
  src,
  alt,
  template,
  navFunc
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "nav-button",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      "data-tip": alt,
      onClick: () => navFunc(template),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: src,
        alt: alt,
        height: "64",
        width: "64"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 16
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 11
  }, this);
}

/***/ }),

/***/ "./components/nav/main.js":
/*!********************************!*\
  !*** ./components/nav/main.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Navigation; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Nav/button */ "./components/nav/button.js");

var _jsxFileName = "D:\\Documents\\Classwork\\Current Coursework\\IDS4941\\PawnPOS\\pawncore\\frontend\\components\\nav\\main.js";

function Navigation({
  navFunc
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "nav",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_button__WEBPACK_IMPORTED_MODULE_1__.default, {
      src: "/img/icon_home.png",
      alt: "Home",
      template: "dashboard",
      navFunc: navFunc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 16
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_button__WEBPACK_IMPORTED_MODULE_1__.default, {
      src: "/img/icon_gold.png",
      alt: "Transaction",
      template: "customer",
      navFunc: navFunc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 16
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_button__WEBPACK_IMPORTED_MODULE_1__.default, {
      src: "/img/icon_clipboard.png",
      alt: "Tickets",
      template: "customer",
      navFunc: navFunc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 16
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_button__WEBPACK_IMPORTED_MODULE_1__.default, {
      src: "/img/icon_gear.png",
      alt: "Inventory",
      template: "customer",
      navFunc: navFunc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 16
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_button__WEBPACK_IMPORTED_MODULE_1__.default, {
      src: "/img/icon_person.png",
      alt: "Customers",
      template: "customer",
      navFunc: navFunc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 16
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 11
  }, this);
}

/***/ }),

/***/ "./components/stage/main.js":
/*!**********************************!*\
  !*** ./components/stage/main.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Stage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_customer_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/customer-card */ "./components/customer-card.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Documents\\Classwork\\Current Coursework\\IDS4941\\PawnPOS\\pawncore\\frontend\\components\\stage\\main.js";


class Stage extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(props) {
    super(props);
    this.title = "";
    this.hasCustomerCard = true;
  } //Call in contstuctor to set title of pages. 


  setTitle(title) {
    this.title = title;
  }

  setCustomerCard(bool) {
    this.hasCustomerCard = bool;
  } //Abstract


  populateCenterStage() {
    return;
  } //Abstract


  populateSideStage() {
    return;
  }

  showCustomer() {
    if (this.hasCustomerCard) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_customer_card__WEBPACK_IMPORTED_MODULE_1__.default, {
        customer: this.props.session.customer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }, this);
    }

    return;
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "main-page",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "center-pane",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "page-title",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            children: this.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 31
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 26
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "center-stage",
          children: this.populateCenterStage()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 26
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "side-pane",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "side-stage",
          style: {
            marginTop: this.hasCustomerCard ? "" : "300px"
          },
          children: this.populateSideStage()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 26
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }, this), this.showCustomer()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 16
    }, this);
  }

}

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    const handleLoad = () => {
      if (!img.src.startsWith('data:')) {
        const p = 'decode' in img ? img.decode() : Promise.resolve();
        p.catch(() => {}).then(() => {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        });
      }
    };

    if (img.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Nav/main.js */ "./components/nav/main.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Templates_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Templates/dashboard */ "./templates/dashboard.js");
/* harmony import */ var _Templates_customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Templates/customer */ "./templates/customer.js");

var _jsxFileName = "D:\\Documents\\Classwork\\Current Coursework\\IDS4941\\PawnPOS\\pawncore\\frontend\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// https://icons8.com/license
// Icon License: Free aslong as given credit : 




class App extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        current: "dashboard"
      },
      session: {
        customer: {
          fname: "Harry",
          lname: "Langsten",
          phone: "(272) 300-2930",
          address: "1234 Main St.",
          city: "Lakeland",
          state: "FL",
          zipCode: "33805"
        },
        transaction: ""
      }
    };
    this.changeTemplate = this.changeTemplate.bind(this);
  }
  /*
   * Template Handling
   */


  loadTemplate(props) {
    switch (this.state.theme.current) {
      case 'dashboard':
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Templates_dashboard__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 26
        }, this);
        break;

      case 'customer':
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Templates_customer__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 26
        }, this);
        break;
    }
  }

  changeTemplate(template) {
    this.setState({
      theme: {
        current: template
      }
    });
  } //Render the content.


  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "main-container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_main_js__WEBPACK_IMPORTED_MODULE_1__.default, {
        navFunc: this.changeTemplate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }, this), this.loadTemplate({
        session: this.state.session
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 16
    }, this);
  }

}

/***/ }),

/***/ "./templates/customer.js":
/*!*******************************!*\
  !*** ./templates/customer.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Customer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_stage_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/stage/main */ "./components/stage/main.js");

var _jsxFileName = "D:\\Documents\\Classwork\\Current Coursework\\IDS4941\\PawnPOS\\pawncore\\frontend\\templates\\customer.js";

class Customer extends _components_stage_main__WEBPACK_IMPORTED_MODULE_1__.default {
  constructor(props) {
    super(props);
    this.setTitle("Customer");
    this.setCustomerCard(false);
  }

  populateCenterStage() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "I am GROOT #2!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 16
    }, this);
  }

}

/***/ }),

/***/ "./templates/dashboard.js":
/*!********************************!*\
  !*** ./templates/dashboard.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Dashboard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_stage_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/stage/main */ "./components/stage/main.js");

var _jsxFileName = "D:\\Documents\\Classwork\\Current Coursework\\IDS4941\\PawnPOS\\pawncore\\frontend\\templates\\dashboard.js";

class Dashboard extends _components_stage_main__WEBPACK_IMPORTED_MODULE_1__.default {
  constructor(props) {
    super(props);
    this.setTitle("Dashboard");
    this.setCustomerCard(true);
  }

  populateCenterStage() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "I am GROOT!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 16
    }, this);
  }

}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-tooltip":
/*!********************************!*\
  !*** external "react-tooltip" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-tooltip");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9jdXN0b21lci1jYXJkLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9uYXYvYnV0dG9uLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9uYXYvbWFpbi5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvc3RhZ2UvbWFpbi5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vdGVtcGxhdGVzL2N1c3RvbWVyLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vdGVtcGxhdGVzL2Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QtdG9vbHRpcFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ3VzdG9tZXJDYXJkIiwiUmVhY3QiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiY3VzdG9tZXIiLCJyZW5kZXIiLCJmbmFtZSIsImxuYW1lIiwicGhvbmUiLCJhZGRyZXNzIiwiY2l0eSIsInN0YXRlIiwiemlwQ29kZSIsIk5hdkJ1dHRvbiIsInNyYyIsImFsdCIsInRlbXBsYXRlIiwibmF2RnVuYyIsIk5hdmlnYXRpb24iLCJTdGFnZSIsInRpdGxlIiwiaGFzQ3VzdG9tZXJDYXJkIiwic2V0VGl0bGUiLCJzZXRDdXN0b21lckNhcmQiLCJib29sIiwicG9wdWxhdGVDZW50ZXJTdGFnZSIsInBvcHVsYXRlU2lkZVN0YWdlIiwic2hvd0N1c3RvbWVyIiwic2Vzc2lvbiIsIm1hcmdpblRvcCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIkltYWdlIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyIiwiX2V4dGVuZHMyIiwiX3JlYWN0IiwiX2hlYWQiLCJfdG9CYXNlIiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwidW5kZWZpbmVkIiwibG9hZGVycyIsIk1hcCIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImRlZmF1bHRMb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwiZGVmYXVsdCIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJiIiwiZ2V0V2lkdGhzIiwid2lkdGgiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsImxlbmd0aCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwiZmlsdGVyIiwicyIsImtpbmQiLCJTZXQiLCJtYXAiLCJ3IiwiZmluZCIsInAiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImkiLCJqb2luIiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsInJvb3QiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJyZW1vdmVQbGFjZWhvbGRlciIsImltZyIsInBsYWNlaG9sZGVyIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9yZWYiLCJwcmlvcml0eSIsImxvYWRpbmciLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwiY29uc29sZSIsIndhcm4iLCJWQUxJRF9CTFVSX0VYVCIsImlzTGF6eSIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3ciLCJpbWdBdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudCIsInJvbGUiLCJ0b0Jhc2U2NCIsIk9iamVjdCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVmIiwiZWxlbWVudCIsImtleSIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsIlVSTCIsImVyciIsImVycm9yIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidXNlUmVmIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwiZWwiLCJjdXJyZW50IiwidGFnTmFtZSIsIm9ic2VydmUiLCJ1c2VFZmZlY3QiLCJpZGxlQ2FsbGJhY2siLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJzZXQiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImluc3RhbmNlIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsInRhcmdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJBcHAiLCJ0aGVtZSIsInRyYW5zYWN0aW9uIiwiY2hhbmdlVGVtcGxhdGUiLCJiaW5kIiwibG9hZFRlbXBsYXRlIiwic2V0U3RhdGUiLCJDdXN0b21lciIsIkRhc2hib2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQjs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUVlLE1BQU1BLFlBQU4sU0FBMkJDLHdEQUEzQixDQUEyQztBQUNyREMsYUFBVyxD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QUtKOztBQWRzQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Y1QztBQUVlLE1BQU13TyxTQUFOLFNBQXdCOU8sMkRBQXhCLENBQThCO0FBQ3hDakIsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDZCxVQUFNQSxLQUFOO0FBRUEsU0FBS21CLFFBQUwsQ0FBYyxXQUFkO0FBQ0EsU0FBS0MsZUFBTCxDQUFxQixJQUFyQjtBQUNKOztBQUVERSxxQkFBbUIsR0FBRztBQUNqQix3QkFDSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURMO0FBS0o7O0FBZHVDLEM7Ozs7Ozs7Ozs7QUNGN0MsMkdBQStDOzs7Ozs7Ozs7Ozs7QUNBL0MsK0Q7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21lckNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgICB0aGlzLmN1c3RvbWVyXHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIHJlbmRlcigpIHsgICAgIFxyXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmN1c3RvbWVyLmZuYW1lID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgIC8vTm8gQ3VycmVudCBDdXN0b21lclxyXG4gICAgICAgICAgICAgICByZXR1cm4gKCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbWVyLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXItY2FyZC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXItaW5wdXQtbmFtZVwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmbmFtZVwiIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiIC8+IDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsbmFtZVwiIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21lci1pbnB1dC1kb2JcIj48aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZG9iXCIgcGxhY2Vob2xkZXI9XCJEYXRlIG9mIEJpcnRoXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21lci1pbnB1dC1waG9uZVwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwaG9uZVwiIHBsYWNlaG9sZGVyPVwiUGhvbmUgTnVtYmVyXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21lci1pbnB1dC1idXR0b25cIj4gPGEgaHJlZj1cIiNcIj5TZWFyY2ggQ3VzdG9tZXI8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgIC8vSGFzIEN1cnJlbnQgQ3VzdG9tZXJcclxuICAgICAgICAgICAgICAgcmV0dXJuICggICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXItY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21lci1jYXJkLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjdXN0b21lci1pbWdcIiBzcmM9XCIvaW1nL2ZhY2UyLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXItbmFtZVwiPnt0aGlzLnByb3BzLmN1c3RvbWVyLmZuYW1lfSB7dGhpcy5wcm9wcy5jdXN0b21lci5sbmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21lci1waG9uZVwiPnt0aGlzLnByb3BzLmN1c3RvbWVyLnBob25lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbWVyLWFkZHJlc3NcIj57dGhpcy5wcm9wcy5jdXN0b21lci5hZGRyZXNzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbWVyLWNpdHlzdGF0ZVwiPnt0aGlzLnByb3BzLmN1c3RvbWVyLmNpdHl9IHt0aGlzLnByb3BzLmN1c3RvbWVyLnN0YXRlfSwge3RoaXMucHJvcHMuY3VzdG9tZXIuemlwQ29kZX0gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZWRpdC1idXR0b25cIiBzcmM9XCIvaW1nL2ljb25fcGVuY2lsLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gJ3JlYWN0LXRvb2x0aXAnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QnV0dG9uKHtzcmMsIGFsdCwgdGVtcGxhdGUsIG5hdkZ1bmN9KSB7XHJcbiAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICA8YSBkYXRhLXRpcD17YWx0fSBvbkNsaWNrPXsoKSA9PiBuYXZGdW5jKHRlbXBsYXRlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17c3JjfSBhbHQ9e2FsdH0gaGVpZ2h0PVwiNjRcIiB3aWR0aD1cIjY0XCIgLz5cclxuICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgKVxyXG59IiwiaW1wb3J0IE5hdkJ1dHRvbiBmcm9tICdATmF2L2J1dHRvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oe25hdkZ1bmN9KSB7XHJcbiAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICAgICAgICAgICAgIDxOYXZCdXR0b24gc3JjPVwiL2ltZy9pY29uX2hvbWUucG5nXCIgYWx0PVwiSG9tZVwiIHRlbXBsYXRlPVwiZGFzaGJvYXJkXCIgbmF2RnVuYz17bmF2RnVuY30gLz5cclxuICAgICAgICAgICAgICAgPE5hdkJ1dHRvbiBzcmM9XCIvaW1nL2ljb25fZ29sZC5wbmdcIiBhbHQ9XCJUcmFuc2FjdGlvblwiIHRlbXBsYXRlPVwiY3VzdG9tZXJcIiBuYXZGdW5jPXtuYXZGdW5jfSAvPlxyXG4gICAgICAgICAgICAgICA8TmF2QnV0dG9uIHNyYz1cIi9pbWcvaWNvbl9jbGlwYm9hcmQucG5nXCIgYWx0PVwiVGlja2V0c1wiIHRlbXBsYXRlPVwiY3VzdG9tZXJcIiBuYXZGdW5jPXtuYXZGdW5jfSAvPlxyXG4gICAgICAgICAgICAgICA8TmF2QnV0dG9uIHNyYz1cIi9pbWcvaWNvbl9nZWFyLnBuZ1wiIGFsdD1cIkludmVudG9yeVwiIHRlbXBsYXRlPVwiY3VzdG9tZXJcIiBuYXZGdW5jPXtuYXZGdW5jfSAvPlxyXG4gICAgICAgICAgICAgICA8TmF2QnV0dG9uIHNyYz1cIi9pbWcvaWNvbl9wZXJzb24ucG5nXCIgYWx0PVwiQ3VzdG9tZXJzXCIgdGVtcGxhdGU9XCJjdXN0b21lclwiIG5hdkZ1bmM9e25hdkZ1bmN9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICApXHJcbn0iLCJpbXBvcnQgQ3VzdG9tZXJDYXJkIGZyb20gJ2NvbXBvbmVudHMvY3VzdG9tZXItY2FyZCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICAgIHRoaXMudGl0bGUgPSBcIlwiXHJcbiAgICAgICAgICB0aGlzLmhhc0N1c3RvbWVyQ2FyZCA9IHRydWVcclxuICAgICB9XHJcblxyXG4gICAgIC8vQ2FsbCBpbiBjb250c3R1Y3RvciB0byBzZXQgdGl0bGUgb2YgcGFnZXMuIFxyXG4gICAgIHNldFRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICB9XHJcblxyXG4gICAgIHNldEN1c3RvbWVyQ2FyZChib29sKSB7XHJcbiAgICAgICAgICB0aGlzLmhhc0N1c3RvbWVyQ2FyZCA9IGJvb2xcclxuICAgICB9XHJcblxyXG4gICAgIC8vQWJzdHJhY3RcclxuICAgICBwb3B1bGF0ZUNlbnRlclN0YWdlKCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgIH1cclxuICAgICBcclxuICAgICAvL0Fic3RyYWN0XHJcbiAgICAgcG9wdWxhdGVTaWRlU3RhZ2UoKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgfVxyXG5cclxuXHJcbiAgICAgc2hvd0N1c3RvbWVyKCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuaGFzQ3VzdG9tZXJDYXJkKSB7XHJcbiAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEN1c3RvbWVyQ2FyZCBjdXN0b21lcj17dGhpcy5wcm9wcy5zZXNzaW9uLmN1c3RvbWVyfS8+XHJcbiAgICAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgfVxyXG5cclxuICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLXBhbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+eyB0aGlzLnRpdGxlIH08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItc3RhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucG9wdWxhdGVDZW50ZXJTdGFnZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZS1wYW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGUtc3RhZ2VcIiBzdHlsZT17eyBtYXJnaW5Ub3A6ICggKHRoaXMuaGFzQ3VzdG9tZXJDYXJkKSA/IFwiXCIgOiBcIjMwMHB4XCIgKSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucG9wdWxhdGVTaWRlU3RhZ2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zaG93Q3VzdG9tZXIoKX1cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgfVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1JbWFnZTt2YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7dmFyIF9leHRlbmRzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfaGVhZD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvaGVhZFwiKSk7dmFyIF90b0Jhc2U9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0XCIpO3ZhciBfaW1hZ2VDb25maWc9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWdcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpeztnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEPXRydWU7fWNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTPVsnbGF6eScsJ2VhZ2VyJyx1bmRlZmluZWRdO2NvbnN0IGxvYWRlcnM9bmV3IE1hcChbWydpbWdpeCcsaW1naXhMb2FkZXJdLFsnY2xvdWRpbmFyeScsY2xvdWRpbmFyeUxvYWRlcl0sWydha2FtYWknLGFrYW1haUxvYWRlcl0sWydkZWZhdWx0JyxkZWZhdWx0TG9hZGVyXV0pO2NvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVM9WydmaWxsJywnZml4ZWQnLCdpbnRyaW5zaWMnLCdyZXNwb25zaXZlJyx1bmRlZmluZWRdO2Z1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpe3JldHVybiBzcmMuZGVmYXVsdCE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKXtyZXR1cm4gc3JjLnNyYyE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKXtyZXR1cm4gdHlwZW9mIHNyYz09PSdvYmplY3QnJiYoaXNTdGF0aWNSZXF1aXJlKHNyYyl8fGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO31jb25zdHtkZXZpY2VTaXplczpjb25maWdEZXZpY2VTaXplcyxpbWFnZVNpemVzOmNvbmZpZ0ltYWdlU2l6ZXMsbG9hZGVyOmNvbmZpZ0xvYWRlcixwYXRoOmNvbmZpZ1BhdGgsZG9tYWluczpjb25maWdEb21haW5zfT1wcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUU3x8X2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDsvLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzPVsuLi5jb25maWdEZXZpY2VTaXplcywuLi5jb25maWdJbWFnZVNpemVzXTtjb25maWdEZXZpY2VTaXplcy5zb3J0KChhLGIpPT5hLWIpO2FsbFNpemVzLnNvcnQoKGEsYik9PmEtYik7ZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyl7aWYoc2l6ZXMmJihsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJykpey8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG5jb25zdCB2aWV3cG9ydFdpZHRoUmU9LyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7Y29uc3QgcGVyY2VudFNpemVzPVtdO2ZvcihsZXQgbWF0Y2g7bWF0Y2g9dmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpO21hdGNoKXtwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO31pZihwZXJjZW50U2l6ZXMubGVuZ3RoKXtjb25zdCBzbWFsbGVzdFJhdGlvPU1hdGgubWluKC4uLnBlcmNlbnRTaXplcykqMC4wMTtyZXR1cm57d2lkdGhzOmFsbFNpemVzLmZpbHRlcihzPT5zPj1jb25maWdEZXZpY2VTaXplc1swXSpzbWFsbGVzdFJhdGlvKSxraW5kOid3J307fXJldHVybnt3aWR0aHM6YWxsU2l6ZXMsa2luZDondyd9O31pZih0eXBlb2Ygd2lkdGghPT0nbnVtYmVyJ3x8bGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpe3JldHVybnt3aWR0aHM6Y29uZmlnRGV2aWNlU2l6ZXMsa2luZDondyd9O31jb25zdCB3aWR0aHM9Wy4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbi8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4vLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbi8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbi8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuW3dpZHRoLHdpZHRoKjIvKiwgd2lkdGggKiAzKi9dLm1hcCh3PT5hbGxTaXplcy5maW5kKHA9PnA+PXcpfHxhbGxTaXplc1thbGxTaXplcy5sZW5ndGgtMV0pKV07cmV0dXJue3dpZHRocyxraW5kOid4J307fWZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGgscXVhbGl0eSxzaXplcyxsb2FkZXJ9KXtpZih1bm9wdGltaXplZCl7cmV0dXJue3NyYyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07fWNvbnN0e3dpZHRocyxraW5kfT1nZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKTtjb25zdCBsYXN0PXdpZHRocy5sZW5ndGgtMTtyZXR1cm57c2l6ZXM6IXNpemVzJiZraW5kPT09J3cnPycxMDB2dyc6c2l6ZXMsc3JjU2V0OndpZHRocy5tYXAoKHcsaSk9PmAke2xvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d30pfSAke2tpbmQ9PT0ndyc/dzppKzF9JHtraW5kfWApLmpvaW4oJywgJyksLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbi8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbi8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbi8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4vLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbi8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94Llxuc3JjOmxvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d2lkdGhzW2xhc3RdfSl9O31mdW5jdGlvbiBnZXRJbnQoeCl7aWYodHlwZW9mIHg9PT0nbnVtYmVyJyl7cmV0dXJuIHg7fWlmKHR5cGVvZiB4PT09J3N0cmluZycpe3JldHVybiBwYXJzZUludCh4LDEwKTt9cmV0dXJuIHVuZGVmaW5lZDt9ZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKXtjb25zdCBsb2FkPWxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7aWYobG9hZCl7cmV0dXJuIGxvYWQoKDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtyb290OmNvbmZpZ1BhdGh9LGxvYWRlclByb3BzKSk7fXRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTt9Ly8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHJlbW92ZVBsYWNlaG9sZGVyKGltZyxwbGFjZWhvbGRlcil7aWYocGxhY2Vob2xkZXI9PT0nYmx1cicmJmltZyl7Y29uc3QgaGFuZGxlTG9hZD0oKT0+e2lmKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpe2NvbnN0IHA9J2RlY29kZSdpbiBpbWc/aW1nLmRlY29kZSgpOlByb21pc2UucmVzb2x2ZSgpO3AuY2F0Y2goKCk9Pnt9KS50aGVuKCgpPT57aW1nLnN0eWxlLmZpbHRlcj0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRTaXplPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlPSdub25lJzt9KTt9fTtpZihpbWcuY29tcGxldGUpey8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbmhhbmRsZUxvYWQoKTt9ZWxzZXtpbWcub25sb2FkPWhhbmRsZUxvYWQ7fX19ZnVuY3Rpb24gSW1hZ2UoX3JlZil7bGV0e3NyYyxzaXplcyx1bm9wdGltaXplZD1mYWxzZSxwcmlvcml0eT1mYWxzZSxsb2FkaW5nLGNsYXNzTmFtZSxxdWFsaXR5LHdpZHRoLGhlaWdodCxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb24sbG9hZGVyPWRlZmF1bHRJbWFnZUxvYWRlcixwbGFjZWhvbGRlcj0nZW1wdHknLGJsdXJEYXRhVVJMfT1fcmVmLGFsbD0oMCxfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZixbXCJzcmNcIixcInNpemVzXCIsXCJ1bm9wdGltaXplZFwiLFwicHJpb3JpdHlcIixcImxvYWRpbmdcIixcImNsYXNzTmFtZVwiLFwicXVhbGl0eVwiLFwid2lkdGhcIixcImhlaWdodFwiLFwib2JqZWN0Rml0XCIsXCJvYmplY3RQb3NpdGlvblwiLFwibG9hZGVyXCIsXCJwbGFjZWhvbGRlclwiLFwiYmx1ckRhdGFVUkxcIl0pO2xldCByZXN0PWFsbDtsZXQgbGF5b3V0PXNpemVzPydyZXNwb25zaXZlJzonaW50cmluc2ljJztpZignbGF5b3V0J2luIHJlc3Qpey8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG5pZihyZXN0LmxheW91dClsYXlvdXQ9cmVzdC5sYXlvdXQ7Ly8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuZGVsZXRlIHJlc3RbJ2xheW91dCddO31sZXQgc3RhdGljU3JjPScnO2lmKGlzU3RhdGljSW1wb3J0KHNyYykpe2NvbnN0IHN0YXRpY0ltYWdlRGF0YT1pc1N0YXRpY1JlcXVpcmUoc3JjKT9zcmMuZGVmYXVsdDpzcmM7aWYoIXN0YXRpY0ltYWdlRGF0YS5zcmMpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9Ymx1ckRhdGFVUkw9Ymx1ckRhdGFVUkx8fHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtzdGF0aWNTcmM9c3RhdGljSW1hZ2VEYXRhLnNyYztpZighbGF5b3V0fHxsYXlvdXQhPT0nZmlsbCcpe2hlaWdodD1oZWlnaHR8fHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7d2lkdGg9d2lkdGh8fHN0YXRpY0ltYWdlRGF0YS53aWR0aDtpZighc3RhdGljSW1hZ2VEYXRhLmhlaWdodHx8IXN0YXRpY0ltYWdlRGF0YS53aWR0aCl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9fX1zcmM9dHlwZW9mIHNyYz09PSdzdHJpbmcnP3NyYzpzdGF0aWNTcmM7Y29uc3Qgd2lkdGhJbnQ9Z2V0SW50KHdpZHRoKTtjb25zdCBoZWlnaHRJbnQ9Z2V0SW50KGhlaWdodCk7Y29uc3QgcXVhbGl0eUludD1nZXRJbnQocXVhbGl0eSk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKCFzcmMpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHt3aWR0aCxoZWlnaHQscXVhbGl0eX0pfWApO31pZighVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmaXNOYU4od2lkdGhJbnQpfHx0eXBlb2YgaGVpZ2h0SW50IT09J3VuZGVmaW5lZCcmJmlzTmFOKGhlaWdodEludCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO31pZighVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHByaW9yaXR5JiZsb2FkaW5nPT09J2xhenknKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7fWlmKHBsYWNlaG9sZGVyPT09J2JsdXInKXtpZihsYXlvdXQhPT0nZmlsbCcmJih3aWR0aEludHx8MCkqKGhlaWdodEludHx8MCk8MTYwMCl7Y29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTt9aWYoIWJsdXJEYXRhVVJMKXtjb25zdCBWQUxJRF9CTFVSX0VYVD1bJ2pwZWcnLCdwbmcnLCd3ZWJwJ107Ly8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG50aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTt9fX1sZXQgaXNMYXp5PSFwcmlvcml0eSYmKGxvYWRpbmc9PT0nbGF6eSd8fHR5cGVvZiBsb2FkaW5nPT09J3VuZGVmaW5lZCcpO2lmKHNyYyYmc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpey8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG51bm9wdGltaXplZD10cnVlO2lzTGF6eT1mYWxzZTt9Y29uc3Rbc2V0UmVmLGlzSW50ZXJzZWN0ZWRdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnLGRpc2FibGVkOiFpc0xhenl9KTtjb25zdCBpc1Zpc2libGU9IWlzTGF6eXx8aXNJbnRlcnNlY3RlZDtsZXQgd3JhcHBlclN0eWxlO2xldCBzaXplclN0eWxlO2xldCBzaXplclN2ZztsZXQgaW1nU3R5bGU9KDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZzowLGJvcmRlcjonbm9uZScsbWFyZ2luOidhdXRvJyxkaXNwbGF5OidibG9jaycsd2lkdGg6MCxoZWlnaHQ6MCxtaW5XaWR0aDonMTAwJScsbWF4V2lkdGg6JzEwMCUnLG1pbkhlaWdodDonMTAwJScsbWF4SGVpZ2h0OicxMDAlJyxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb259LHBsYWNlaG9sZGVyPT09J2JsdXInP3tmaWx0ZXI6J2JsdXIoMjBweCknLGJhY2tncm91bmRTaXplOidjb3ZlcicsYmFja2dyb3VuZEltYWdlOmB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWB9OnVuZGVmaW5lZCk7aWYodHlwZW9mIHdpZHRoSW50IT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmbGF5b3V0IT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG5jb25zdCBxdW90aWVudD1oZWlnaHRJbnQvd2lkdGhJbnQ7Y29uc3QgcGFkZGluZ1RvcD1pc05hTihxdW90aWVudCk/JzEwMCUnOmAke3F1b3RpZW50KjEwMH0lYDtpZihsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmdUb3B9O31lbHNlIGlmKGxheW91dD09PSdpbnRyaW5zaWMnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2lubGluZS1ibG9jaycsbWF4V2lkdGg6JzEwMCUnLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17Ym94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidibG9jaycsbWF4V2lkdGg6JzEwMCUnfTtzaXplclN2Zz1gPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDt9ZWxzZSBpZihsYXlvdXQ9PT0nZml4ZWQnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbndyYXBwZXJTdHlsZT17b3ZlcmZsb3c6J2hpZGRlbicsYm94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidpbmxpbmUtYmxvY2snLHBvc2l0aW9uOidyZWxhdGl2ZScsd2lkdGg6d2lkdGhJbnQsaGVpZ2h0OmhlaWdodEludH07fX1lbHNlIGlmKHR5cGVvZiB3aWR0aEludD09PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50PT09J3VuZGVmaW5lZCcmJmxheW91dD09PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O31lbHNley8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO319bGV0IGltZ0F0dHJpYnV0ZXM9e3NyYzonZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07aWYoaXNWaXNpYmxlKXtpbWdBdHRyaWJ1dGVzPWdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTp3cmFwcGVyU3R5bGV9LHNpemVyU3R5bGU/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6c2l6ZXJTdHlsZX0sc2l6ZXJTdmc/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIix7c3R5bGU6e21heFdpZHRoOicxMDAlJyxkaXNwbGF5OidibG9jaycsbWFyZ2luOjAsYm9yZGVyOidub25lJyxwYWRkaW5nOjB9LGFsdDpcIlwiLFwiYXJpYS1oaWRkZW5cIjp0cnVlLHJvbGU6XCJwcmVzZW50YXRpb25cIixzcmM6YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCxfdG9CYXNlLnRvQmFzZTY0KShzaXplclN2Zyl9YH0pOm51bGwpOm51bGwsIWlzVmlzaWJsZSYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSkse2RlY29kaW5nOlwiYXN5bmNcIixzdHlsZTppbWdTdHlsZSxjbGFzc05hbWU6Y2xhc3NOYW1lfSkpKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxpbWdBdHRyaWJ1dGVzLHtkZWNvZGluZzpcImFzeW5jXCIsY2xhc3NOYW1lOmNsYXNzTmFtZSxyZWY6ZWxlbWVudD0+e3NldFJlZihlbGVtZW50KTtyZW1vdmVQbGFjZWhvbGRlcihlbGVtZW50LHBsYWNlaG9sZGVyKTt9LHN0eWxlOmltZ1N0eWxlfSkpLHByaW9yaXR5Py8qI19fUFVSRV9fKi8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4vLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4vL1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG5fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OidfX25pbWctJytpbWdBdHRyaWJ1dGVzLnNyYytpbWdBdHRyaWJ1dGVzLnNyY1NldCtpbWdBdHRyaWJ1dGVzLnNpemVzLHJlbDpcInByZWxvYWRcIixhczpcImltYWdlXCIsaHJlZjppbWdBdHRyaWJ1dGVzLnNyY1NldD91bmRlZmluZWQ6aW1nQXR0cmlidXRlcy5zcmMvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc3Jjc2V0OmltZ0F0dHJpYnV0ZXMuc3JjU2V0Ly8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc2l6ZXM6aW1nQXR0cmlidXRlcy5zaXplc30pKTpudWxsKTt9Ly9CVUlMVCBJTiBMT0FERVJTXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKXtyZXR1cm4gc3JjWzBdPT09Jy8nP3NyYy5zbGljZSgxKTpzcmM7fWZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG5jb25zdCBwYXJhbXM9WydhdXRvPWZvcm1hdCcsJ2ZpdD1tYXgnLCd3PScrd2lkdGhdO2xldCBwYXJhbXNTdHJpbmc9Jyc7aWYocXVhbGl0eSl7cGFyYW1zLnB1c2goJ3E9JytxdWFsaXR5KTt9aWYocGFyYW1zLmxlbmd0aCl7cGFyYW1zU3RyaW5nPSc/JytwYXJhbXMuam9pbignJicpO31yZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YDt9ZnVuY3Rpb24gYWthbWFpTG9hZGVyKHtyb290LHNyYyx3aWR0aH0pe3JldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7fWZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuY29uc3QgcGFyYW1zPVsnZl9hdXRvJywnY19saW1pdCcsJ3dfJyt3aWR0aCwncV8nKyhxdWFsaXR5fHwnYXV0bycpXTtsZXQgcGFyYW1zU3RyaW5nPXBhcmFtcy5qb2luKCcsJykrJy8nO3JldHVybmAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO31mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG1pc3NpbmdWYWx1ZXM9W107Ly8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG5pZighc3JjKW1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7aWYoIXdpZHRoKW1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtpZihtaXNzaW5nVmFsdWVzLmxlbmd0aD4wKXt0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7c3JjLHdpZHRoLHF1YWxpdHl9KX1gKTt9aWYoc3JjLnN0YXJ0c1dpdGgoJy8vJykpe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFzcmMuc3RhcnRzV2l0aCgnLycpJiZjb25maWdEb21haW5zKXtsZXQgcGFyc2VkU3JjO3RyeXtwYXJzZWRTcmM9bmV3IFVSTChzcmMpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gK2BTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7fX19cmV0dXJuYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHl8fDc1fWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIi8vIGh0dHBzOi8vaWNvbnM4LmNvbS9saWNlbnNlXHJcbi8vIEljb24gTGljZW5zZTogRnJlZSBhc2xvbmcgYXMgZ2l2ZW4gY3JlZGl0IDogXHJcblxyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICdATmF2L21haW4uanMnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnQFRlbXBsYXRlcy9kYXNoYm9hcmQnXHJcbmltcG9ydCBDdXN0b21lciBmcm9tICdAVGVtcGxhdGVzL2N1c3RvbWVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgIHRoZW1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudDogXCJkYXNoYm9hcmRcIlxyXG4gICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICBzZXNzaW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZuYW1lOiBcIkhhcnJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBsbmFtZTogXCJMYW5nc3RlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU6IFwiKDI3MikgMzAwLTI5MzBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IFwiMTIzNCBNYWluIFN0LlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2l0eTogXCJMYWtlbGFuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IFwiRkxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHppcENvZGU6IFwiMzM4MDVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uOiBcIlwiXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLmNoYW5nZVRlbXBsYXRlID0gdGhpcy5jaGFuZ2VUZW1wbGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgIH1cclxuXHJcbiAgICAgLypcclxuICAgICAgKiBUZW1wbGF0ZSBIYW5kbGluZ1xyXG4gICAgICAqL1xyXG4gICAgIGxvYWRUZW1wbGF0ZShwcm9wcykge1xyXG4gICAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlLnRoZW1lLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgY2FzZSAnZGFzaGJvYXJkJzogXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXNoYm9hcmQgey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgY2FzZSAnY3VzdG9tZXInOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tZXIgey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICB9XHJcbiAgICAgY2hhbmdlVGVtcGxhdGUodGVtcGxhdGUpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aGVtZTogeyBjdXJyZW50OiB0ZW1wbGF0ZSB9fSlcclxuICAgICB9XHJcblxyXG5cclxuICAgICAvL1JlbmRlciB0aGUgY29udGVudC5cclxuICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb24gbmF2RnVuYz17dGhpcy5jaGFuZ2VUZW1wbGF0ZX0vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5sb2FkVGVtcGxhdGUoeyAgc2Vzc2lvbjogdGhpcy5zdGF0ZS5zZXNzaW9uIH0pfVxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICB9XHJcbn0iLCJpbXBvcnQgU3RhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9zdGFnZS9tYWluJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tZXIgZXh0ZW5kcyBTdGFnZSB7XHJcbiAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLnNldFRpdGxlKFwiQ3VzdG9tZXJcIilcclxuICAgICAgICAgIHRoaXMuc2V0Q3VzdG9tZXJDYXJkKGZhbHNlKVxyXG4gICAgIH1cclxuXHJcbiAgICAgcG9wdWxhdGVDZW50ZXJTdGFnZSgpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgICBJIGFtIEdST09UICMyIVxyXG4gICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgKVxyXG4gICAgIH1cclxufSIsImltcG9ydCBTdGFnZSBmcm9tICcuLi9jb21wb25lbnRzL3N0YWdlL21haW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBTdGFnZSB7XHJcbiAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLnNldFRpdGxlKFwiRGFzaGJvYXJkXCIpXHJcbiAgICAgICAgICB0aGlzLnNldEN1c3RvbWVyQ2FyZCh0cnVlKVxyXG4gICAgIH1cclxuXHJcbiAgICAgcG9wdWxhdGVDZW50ZXJTdGFnZSgpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgICBJIGFtIEdST09UIVxyXG4gICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgKVxyXG4gICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b29sdGlwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=