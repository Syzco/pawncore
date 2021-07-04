self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/content.js":
/*!*******************************!*\
  !*** ./components/content.js ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var _reactJsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");

var _jsxFileName = "D:\\Poly\\_Internship\\pawncore\\frontend\\components\\content.js";

function Content() {
  return /*#__PURE__*/_reactJsxDevRuntime.jsxDEV("div", {
    className: "sidenav",
    children: /*#__PURE__*/_reactJsxDevRuntime.jsxDEV("ul", {
      children: [/*#__PURE__*/_reactJsxDevRuntime.jsxDEV("li", {
        children: /*#__PURE__*/_reactJsxDevRuntime.jsxDEV("a", {
          href: "#",
          children: /*#__PURE__*/_reactJsxDevRuntime.jsxDEV(Image, {
            src: homeIcon,
            alt: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 6,
            columnNumber: 34
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 6,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 18
      }, this), /*#__PURE__*/_reactJsxDevRuntime.jsxDEV("li", {
        children: /*#__PURE__*/_reactJsxDevRuntime.jsxDEV("a", {
          href: "#",
          children: /*#__PURE__*/_reactJsxDevRuntime.jsxDEV(Image, {
            src: clipboardIcon,
            alt: "Setting"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 7,
            columnNumber: 34
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 18
      }, this), /*#__PURE__*/_reactJsxDevRuntime.jsxDEV("li", {
        children: /*#__PURE__*/_reactJsxDevRuntime.jsxDEV("a", {
          href: "#",
          children: /*#__PURE__*/_reactJsxDevRuntime.jsxDEV(Image, {
            src: goldIcon,
            alt: "Setting"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 8,
            columnNumber: 34
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 18
      }, this), /*#__PURE__*/_reactJsxDevRuntime.jsxDEV("li", {
        children: /*#__PURE__*/_reactJsxDevRuntime.jsxDEV("a", {
          href: "#",
          children: /*#__PURE__*/_reactJsxDevRuntime.jsxDEV(Image, {
            src: gearIcon,
            alt: "Settings"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 34
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 18
      }, this), /*#__PURE__*/_reactJsxDevRuntime.jsxDEV("li", {
        children: /*#__PURE__*/_reactJsxDevRuntime.jsxDEV("a", {
          href: "#",
          children: /*#__PURE__*/_reactJsxDevRuntime.jsxDEV(Image, {
            src: personIcon,
            alt: "Person"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 34
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 18
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, this);
}

_c = Content;
module.exports = LeftSideBar;

var _c;

$RefreshReg$(_c, "Content");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZW50LmpzIl0sIm5hbWVzIjpbIkNvbnRlbnQiLCJob21lSWNvbiIsImNsaXBib2FyZEljb24iLCJnb2xkSWNvbiIsImdlYXJJY29uIiwicGVyc29uSWNvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJMZWZ0U2lkZUJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLE9BQVQsR0FDQTtBQUNJLHNCQUNJO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQSwyQkFDSTtBQUFBLDhCQUNLO0FBQUEsK0JBQUk7QUFBRyxjQUFJLEVBQUMsR0FBUjtBQUFBLGlDQUFZLDJCQUFDLEtBQUQ7QUFBTyxlQUFHLEVBQUVDLFFBQVo7QUFBc0IsZUFBRyxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURMLGVBRUs7QUFBQSwrQkFBSTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQUEsaUNBQVksMkJBQUMsS0FBRDtBQUFPLGVBQUcsRUFBRUMsYUFBWjtBQUEyQixlQUFHLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkwsZUFHSztBQUFBLCtCQUFJO0FBQUcsY0FBSSxFQUFDLEdBQVI7QUFBQSxpQ0FBWSwyQkFBQyxLQUFEO0FBQU8sZUFBRyxFQUFFQyxRQUFaO0FBQXNCLGVBQUcsRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FITCxlQUlLO0FBQUEsK0JBQUk7QUFBRyxjQUFJLEVBQUMsR0FBUjtBQUFBLGlDQUFZLDJCQUFDLEtBQUQ7QUFBTyxlQUFHLEVBQUVDLFFBQVo7QUFBc0IsZUFBRyxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpMLGVBS0s7QUFBQSwrQkFBSTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQUEsaUNBQVksMkJBQUMsS0FBRDtBQUFPLGVBQUcsRUFBRUMsVUFBWjtBQUF3QixlQUFHLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0g7O0tBYlFMLE87QUFlVE0sTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxXQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43Y2UyZWUwZjY4YTVhMmU4N2NmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQ29udGVudCgpXHJcbntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlbmF2XCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48SW1hZ2Ugc3JjPXtob21lSWNvbn0gYWx0PVwiSG9tZVwiIC8+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PEltYWdlIHNyYz17Y2xpcGJvYXJkSWNvbn0gYWx0PVwiU2V0dGluZ1wiIC8+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PEltYWdlIHNyYz17Z29sZEljb259IGFsdD1cIlNldHRpbmdcIiAvPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxJbWFnZSBzcmM9e2dlYXJJY29ufSBhbHQ9XCJTZXR0aW5nc1wiIC8+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PEltYWdlIHNyYz17cGVyc29uSWNvbn0gYWx0PVwiUGVyc29uXCIgLz48L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMZWZ0U2lkZUJhciJdLCJzb3VyY2VSb290IjoiIn0=