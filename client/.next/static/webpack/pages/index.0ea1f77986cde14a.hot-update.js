"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Chatlist/List.jsx":
/*!******************************************!*\
  !*** ./src/components/Chatlist/List.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ChatLIstItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChatLIstItem */ \"./src/components/Chatlist/ChatLIstItem.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction List() {\n    _s();\n    const [{ currentChatUser , userInfo , userContacts , onlineUsers  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateProvider)();\n    console.log(userInfo === null || userInfo === void 0 ? void 0 : userInfo.id);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const getContacts = async ()=>{\n            try {\n                const { data: { users , onlineUsers  }  } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__.GET_INITIAL_CONTACTS_ROUTE, \"/\").concat(userInfo === null || userInfo === void 0 ? void 0 : userInfo.id));\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_1__.reducerCases.SET_ONLINE_USERS,\n                    onlineUsers\n                });\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_1__.reducerCases.SET_USER_CONTACTS,\n                    userContacts: users\n                });\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        getContacts();\n    }, [\n        userInfo\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-search-input-container-background flex-auto overflow-auto max-h-full customer-scrollbar\",\n        children: userContacts.map((contact)=>{\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChatLIstItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                data: contact\n            }, contact === null || contact === void 0 ? void 0 : contact.id, false, {\n                fileName: \"E:\\\\Socket.io\\\\client\\\\src\\\\components\\\\Chatlist\\\\List.jsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"E:\\\\Socket.io\\\\client\\\\src\\\\components\\\\Chatlist\\\\List.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(List, \"CdnpGB0s5pe9Vanx8h8zAdBLDeA=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateProvider\n    ];\n});\n_c = List;\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9MaXN0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDTztBQUNLO0FBQ3JDO0FBQ2U7QUFDQztBQUUxQyxTQUFTTyxPQUFPOztJQUNkLE1BQU0sQ0FBQyxFQUFFQyxnQkFBZSxFQUFFQyxTQUFRLEVBQUVDLGFBQVksRUFBRUMsWUFBVyxFQUFFLEVBQUVDLFNBQVMsR0FDeEVYLHVFQUFnQkE7SUFFbEJZLFFBQVFDLEdBQUcsQ0FBQ0wscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVTSxFQUFFO0lBRXhCVixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVcsY0FBYyxVQUFZO1lBQzlCLElBQUk7Z0JBQ0YsTUFBTSxFQUNKQyxNQUFNLEVBQUVDLE1BQUssRUFBRVAsWUFBVyxFQUFFLEdBQzdCLEdBQUcsTUFBTVIsaURBQVMsQ0FBQyxHQUFpQ00sT0FBOUJQLHdFQUEwQkEsRUFBQyxLQUFnQixPQUFiTyxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVNLEVBQUU7Z0JBQ2pFSCxTQUFTO29CQUFFUSxNQUFNcEIsNkVBQTZCO29CQUFFVztnQkFBWTtnQkFDNURDLFNBQVM7b0JBQUVRLE1BQU1wQiw4RUFBOEI7b0JBQUVVLGNBQWNRO2dCQUFNO1lBQ3ZFLEVBQUUsT0FBT0ssT0FBTztnQkFDZFYsUUFBUUMsR0FBRyxDQUFDUztZQUNkO1FBQ0Y7UUFFQVA7SUFDRixHQUFHO1FBQUNQO0tBQVM7SUFFYixxQkFDRSw4REFBQ2U7UUFBSUMsV0FBVTtrQkFDWmYsYUFBYWdCLEdBQUcsQ0FBQyxDQUFDQzswQkFDakIscUVBQUNyQixxREFBWUE7Z0JBQUNXLE1BQU1VO2VBQWNBLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU1osRUFBRTs7Ozs7Ozs7Ozs7QUFJckQ7R0E3QlNSOztRQUVMTixtRUFBZ0JBOzs7S0FGWE07QUErQlQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhdGxpc3QvTGlzdC5qc3g/MGEwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWR1Y2VyQ2FzZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyBHRVRfSU5JVElBTF9DT05UQUNUU19ST1VURSB9IGZyb20gXCJAL3V0aWxzL0FwaVJvdXRlc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXRMSXN0SXRlbSBmcm9tIFwiLi9DaGF0TElzdEl0ZW1cIjtcblxuZnVuY3Rpb24gTGlzdCgpIHtcbiAgY29uc3QgW3sgY3VycmVudENoYXRVc2VyLCB1c2VySW5mbywgdXNlckNvbnRhY3RzLCBvbmxpbmVVc2VycyB9LCBkaXNwYXRjaF0gPVxuICAgIHVzZVN0YXRlUHJvdmlkZXIoKTtcblxuICBjb25zb2xlLmxvZyh1c2VySW5mbz8uaWQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0Q29udGFjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgZGF0YTogeyB1c2Vycywgb25saW5lVXNlcnMgfSxcbiAgICAgICAgfSA9IGF3YWl0IGF4aW9zLmdldChgJHtHRVRfSU5JVElBTF9DT05UQUNUU19ST1VURX0vJHt1c2VySW5mbz8uaWR9YCk7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9PTkxJTkVfVVNFUlMsIG9ubGluZVVzZXJzIH0pO1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IHJlZHVjZXJDYXNlcy5TRVRfVVNFUl9DT05UQUNUUywgdXNlckNvbnRhY3RzOiB1c2VycyB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGdldENvbnRhY3RzKCk7XG4gIH0sIFt1c2VySW5mb10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zZWFyY2gtaW5wdXQtY29udGFpbmVyLWJhY2tncm91bmQgZmxleC1hdXRvIG92ZXJmbG93LWF1dG8gbWF4LWgtZnVsbCBjdXN0b21lci1zY3JvbGxiYXJcIj5cbiAgICAgIHt1c2VyQ29udGFjdHMubWFwKChjb250YWN0KSA9PiAoXG4gICAgICAgIDxDaGF0TElzdEl0ZW0gZGF0YT17Y29udGFjdH0ga2V5PXtjb250YWN0Py5pZH0gLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIl0sIm5hbWVzIjpbInJlZHVjZXJDYXNlcyIsInVzZVN0YXRlUHJvdmlkZXIiLCJHRVRfSU5JVElBTF9DT05UQUNUU19ST1VURSIsImF4aW9zIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJDaGF0TElzdEl0ZW0iLCJMaXN0IiwiY3VycmVudENoYXRVc2VyIiwidXNlckluZm8iLCJ1c2VyQ29udGFjdHMiLCJvbmxpbmVVc2VycyIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImlkIiwiZ2V0Q29udGFjdHMiLCJkYXRhIiwidXNlcnMiLCJnZXQiLCJ0eXBlIiwiU0VUX09OTElORV9VU0VSUyIsIlNFVF9VU0VSX0NPTlRBQ1RTIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJjb250YWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chatlist/List.jsx\n"));

/***/ })

});