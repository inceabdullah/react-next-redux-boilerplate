/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions */ \"./redux/actions/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/root/git/react-next-redux-boilerplate/pages/index.js\";\n\n\n\n\n\nfunction Index(props) {\n  var counter = props.counter.value,\n      incrementCounter = props.incrementCounter,\n      decrementCounter = props.decrementCounter;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().head),\n        children: \"React Next.js Redux\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: decrementCounter,\n            children: \"-\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 14\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: counter\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: incrementCounter,\n            children: \"+\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 14\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().note),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: \"Source: \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          href: \"https://github.com/inceabdullah/react-next-redux-boilerplate\",\n          children: \"https://github.com/inceabdullah/react-next-redux-boilerplate\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }, this)\n  }, void 0, false);\n}\n\n_c = Index;\n\nvar mapState = function mapState(state) {\n  return {\n    counter: state.counter\n  };\n};\n\nvar mapDis = {\n  incrementCounter: function incrementCounter() {\n    return _redux_actions__WEBPACK_IMPORTED_MODULE_3__.default.counterActions.incrementCounter();\n  },\n  decrementCounter: function decrementCounter() {\n    return _redux_actions__WEBPACK_IMPORTED_MODULE_3__.default.counterActions.decrementCounter();\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapState, mapDis)(Index));\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiY291bnRlciIsInZhbHVlIiwiaW5jcmVtZW50Q291bnRlciIsImRlY3JlbWVudENvdW50ZXIiLCJzdHlsZXMiLCJtYXBTdGF0ZSIsInN0YXRlIiwibWFwRGlzIiwiYWN0aW9ucyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQSxNQUVIQyxPQUZHLEdBS2hCRCxLQUxnQixDQUVsQkMsT0FGa0IsQ0FFVEMsS0FGUztBQUFBLE1BR2xCQyxnQkFIa0IsR0FLaEJILEtBTGdCLENBR2xCRyxnQkFIa0I7QUFBQSxNQUlsQkMsZ0JBSmtCLEdBS2hCSixLQUxnQixDQUlsQkksZ0JBSmtCO0FBT3BCLHNCQUFRO0FBQUEsMkJBQ047QUFBSyxlQUFTLEVBQUVDLHFFQUFoQjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUEscUVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUVBLDBFQUFoQjtBQUFBLGdDQUNFO0FBQUEsaUNBQUs7QUFBUSxtQkFBTyxFQUFFRCxnQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSxvQkFBTUg7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBQSxpQ0FBSztBQUFRLG1CQUFPLEVBQUVFLGdCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFPRTtBQUFLLGlCQUFTLEVBQUVFLHFFQUFoQjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBRyxjQUFJLEVBQUUsOERBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE0sbUJBQVI7QUFjRDs7S0FyQlFOLEs7O0FBdUJULElBQU1PLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUMxQixTQUFPO0FBQ0xOLFdBQU8sRUFBRU0sS0FBSyxDQUFDTjtBQURWLEdBQVA7QUFHRCxDQUpEOztBQU1BLElBQU1PLE1BQU0sR0FBRztBQUNiTCxrQkFBZ0IsRUFBRTtBQUFBLFdBQU1NLG1GQUFBLEVBQU47QUFBQSxHQURMO0FBRWJMLGtCQUFnQixFQUFFO0FBQUEsV0FBTUssbUZBQUEsRUFBTjtBQUFBO0FBRkwsQ0FBZjtBQUtBLCtEQUFlQyxvREFBTyxDQUFDSixRQUFELEVBQVdFLE1BQVgsQ0FBUCxDQUEwQlQsS0FBMUIsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vcmVkdXgvYWN0aW9ucyc7XG5cbmZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBjb3VudGVyOnt2YWx1ZTpjb3VudGVyfSxcbiAgICBpbmNyZW1lbnRDb3VudGVyLFxuICAgIGRlY3JlbWVudENvdW50ZXJcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5SZWFjdCBOZXh0LmpzIFJlZHV4PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXY+PGJ1dHRvbiBvbkNsaWNrPXtkZWNyZW1lbnRDb3VudGVyfT4tPC9idXR0b24+PC9kaXY+XG4gICAgICAgIDxkaXY+e2NvdW50ZXJ9PC9kaXY+XG4gICAgICAgIDxkaXY+PGJ1dHRvbiBvbkNsaWNrPXtpbmNyZW1lbnRDb3VudGVyfT4rPC9idXR0b24+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm90ZX0+XG4gICAgICAgIDxkaXY+U291cmNlOiA8L2Rpdj5cbiAgICAgICAgPGEgaHJlZj17XCJodHRwczovL2dpdGh1Yi5jb20vaW5jZWFiZHVsbGFoL3JlYWN0LW5leHQtcmVkdXgtYm9pbGVycGxhdGVcIn0+aHR0cHM6Ly9naXRodWIuY29tL2luY2VhYmR1bGxhaC9yZWFjdC1uZXh0LXJlZHV4LWJvaWxlcnBsYXRlPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC8+KVxufVxuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvdW50ZXI6IHN0YXRlLmNvdW50ZXJcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpcyA9IHtcbiAgaW5jcmVtZW50Q291bnRlcjogKCkgPT4gYWN0aW9ucy5jb3VudGVyQWN0aW9ucy5pbmNyZW1lbnRDb3VudGVyKCksXG4gIGRlY3JlbWVudENvdW50ZXI6ICgpID0+IGFjdGlvbnMuY291bnRlckFjdGlvbnMuZGVjcmVtZW50Q291bnRlcigpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzKShJbmRleCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});