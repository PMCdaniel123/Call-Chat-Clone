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

/***/ "./src/components/Chatlist/ChatLIstItem.jsx":
/*!**************************************************!*\
  !*** ./src/components/Chatlist/ChatLIstItem.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _utils_CalculateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/CalculateTime */ \"./src/utils/CalculateTime.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ChatLIstItem(param) {\n    let { data , isContactPage =false  } = param;\n    _s();\n    const [{ userInfo , currentChatUser  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider)();\n    const handleContactClick = ()=>{\n        // if (currentChatUser?.id === data?.id) {\n        if (!isContactPage) {\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducerCases.CHANGE_CURRENT_CHAT_USER,\n                user: {\n                    name: data === null || data === void 0 ? void 0 : data.name,\n                    about: data === null || data === void 0 ? void 0 : data.about,\n                    profilePicture: data === null || data === void 0 ? void 0 : data.profilePicture,\n                    email: data === null || data === void 0 ? void 0 : data.email,\n                    id: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.id) === data.senderId ? data === null || data === void 0 ? void 0 : data.receiverId : data === null || data === void 0 ? void 0 : data.senderId\n                }\n            });\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducerCases.SET_ALL_CONTACTS_PAGE\n            });\n        } else {\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducerCases.CHANGE_CURRENT_CHAT_USER,\n                user: {\n                    ...data\n                }\n            });\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducerCases.SET_ALL_CONTACTS_PAGE\n            });\n        }\n    // }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex cursor-pointer items-center hover:bg-background-default-hover\",\n        onClick: handleContactClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-w-fit px-5 pt-3 pb-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"lg\",\n                    image: data === null || data === void 0 ? void 0 : data.profilePicture\n                }, void 0, false, {\n                    fileName: \"E:\\\\Socket.io\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Socket.io\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-full flex flex-col justify-center mt-3 pr-2 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-white\",\n                                    children: data === null || data === void 0 ? void 0 : data.name\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Socket.io\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Socket.io\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            !isContactPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-sm \".concat(!(data === null || data === void 0 ? void 0 : data.totalUnreadMessages) > 0 ? \"text-secondary\" : \"text-icon-green\"),\n                                    children: (0,_utils_CalculateTime__WEBPACK_IMPORTED_MODULE_5__.calculateTime)(data === null || data === void 0 ? void 0 : data.createdAt)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Socket.io\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Socket.io\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Socket.io\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex border-b border-conversation-border pb-2 pt-1 pr-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-secondary line-clamp-1 text-sm\",\n                                children: isContactPage ? (data === null || data === void 0 ? void 0 : data.about) || \"\\xa0\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                    fileName: \"E:\\\\Socket.io\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 58\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Socket.io\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Socket.io\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Socket.io\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Socket.io\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Socket.io\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatLIstItem, \"hWWz54+Ds4ecnMS86SYyA8JkElw=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider\n    ];\n});\n_c = ChatLIstItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatLIstItem);\nvar _c;\n$RefreshReg$(_c, \"ChatLIstItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9DaGF0TElzdEl0ZW0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1k7QUFDb0I7QUFDUDtBQUNHO0FBRXRELFNBQVNLLGFBQWEsS0FBK0IsRUFBRTtRQUFqQyxFQUFFQyxLQUFJLEVBQUVDLGVBQWdCLEtBQUssR0FBRSxHQUEvQjs7SUFDcEIsTUFBTSxDQUFDLEVBQUVDLFNBQVEsRUFBRUMsZ0JBQWUsRUFBRSxFQUFFQyxTQUFTLEdBQUdSLHVFQUFnQkE7SUFFbEUsTUFBTVMscUJBQXFCLElBQU07UUFDL0IsMENBQTBDO1FBQzFDLElBQUksQ0FBQ0osZUFBZTtZQUNsQkcsU0FBUztnQkFDUEUsTUFBTVQscUZBQXFDO2dCQUMzQ1csTUFBTTtvQkFDSkMsTUFBTVQsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNUyxJQUFJO29CQUNoQkMsT0FBT1YsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNVSxLQUFLO29CQUNsQkMsZ0JBQWdCWCxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1XLGNBQWM7b0JBQ3BDQyxPQUFPWixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1ZLEtBQUs7b0JBQ2xCQyxJQUNFWCxDQUFBQSxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVXLEVBQUUsTUFBS2IsS0FBS2MsUUFBUSxHQUFHZCxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1lLFVBQVUsR0FBR2YsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNYyxRQUFRO2dCQUN0RTtZQUNGO1lBQ0FWLFNBQVM7Z0JBQUVFLE1BQU1ULGtGQUFrQztZQUFDO1FBQ3RELE9BQU87WUFDTE8sU0FBUztnQkFDUEUsTUFBTVQscUZBQXFDO2dCQUMzQ1csTUFBTTtvQkFBRSxHQUFHUixJQUFJO2dCQUFDO1lBQ2xCO1lBQ0FJLFNBQVM7Z0JBQUVFLE1BQU1ULGtGQUFrQztZQUFDO1FBQ3RELENBQUM7SUFDRCxJQUFJO0lBQ047SUFFQSxxQkFDRSw4REFBQ29CO1FBQ0NDLFdBQVk7UUFDWkMsU0FBU2Q7OzBCQUVULDhEQUFDWTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ3ZCLHNEQUFNQTtvQkFBQ1csTUFBSztvQkFBS2MsT0FBT3BCLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTVcsY0FBYzs7Ozs7Ozs7Ozs7MEJBRS9DLDhEQUFDTTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7MENBQ0MsNEVBQUNJO29DQUFLSCxXQUFVOzhDQUFjbEIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNUyxJQUFJOzs7Ozs7Ozs7Ozs0QkFFekMsQ0FBQ1IsK0JBQ0EsOERBQUNnQjswQ0FDQyw0RUFBQ0k7b0NBQ0NILFdBQVcsV0FJVixPQUhDLENBQUNsQixDQUFBQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1zQixtQkFBbUIsSUFBRyxJQUN6QixtQkFDQSxpQkFBaUI7OENBR3RCeEIsbUVBQWFBLENBQUNFLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTXVCLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU10Qyw4REFBQ047d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRztnQ0FBS0gsV0FBVTswQ0FDYmpCLGdCQUFnQkQsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNVSxLQUFLLEtBQUksdUJBQVcsOERBQUNPOzs7O3dDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3BFO0dBbEVTbEI7O1FBQzJDSCxtRUFBZ0JBOzs7S0FEM0RHO0FBb0VULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXRsaXN0L0NoYXRMSXN0SXRlbS5qc3g/Y2Y5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuLi9jb21tb24vQXZhdGFyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCB7IHJlZHVjZXJDYXNlcyB9IGZyb20gXCJAL2NvbnRleHQvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVUaW1lIH0gZnJvbSBcIkAvdXRpbHMvQ2FsY3VsYXRlVGltZVwiO1xuXG5mdW5jdGlvbiBDaGF0TElzdEl0ZW0oeyBkYXRhLCBpc0NvbnRhY3RQYWdlID0gZmFsc2UgfSkge1xuICBjb25zdCBbeyB1c2VySW5mbywgY3VycmVudENoYXRVc2VyIH0sIGRpc3BhdGNoXSA9IHVzZVN0YXRlUHJvdmlkZXIoKTtcblxuICBjb25zdCBoYW5kbGVDb250YWN0Q2xpY2sgPSAoKSA9PiB7XG4gICAgLy8gaWYgKGN1cnJlbnRDaGF0VXNlcj8uaWQgPT09IGRhdGE/LmlkKSB7XG4gICAgaWYgKCFpc0NvbnRhY3RQYWdlKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IHJlZHVjZXJDYXNlcy5DSEFOR0VfQ1VSUkVOVF9DSEFUX1VTRVIsXG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICBuYW1lOiBkYXRhPy5uYW1lLFxuICAgICAgICAgIGFib3V0OiBkYXRhPy5hYm91dCxcbiAgICAgICAgICBwcm9maWxlUGljdHVyZTogZGF0YT8ucHJvZmlsZVBpY3R1cmUsXG4gICAgICAgICAgZW1haWw6IGRhdGE/LmVtYWlsLFxuICAgICAgICAgIGlkOlxuICAgICAgICAgICAgdXNlckluZm8/LmlkID09PSBkYXRhLnNlbmRlcklkID8gZGF0YT8ucmVjZWl2ZXJJZCA6IGRhdGE/LnNlbmRlcklkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IHJlZHVjZXJDYXNlcy5TRVRfQUxMX0NPTlRBQ1RTX1BBR0UgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogcmVkdWNlckNhc2VzLkNIQU5HRV9DVVJSRU5UX0NIQVRfVVNFUixcbiAgICAgICAgdXNlcjogeyAuLi5kYXRhIH0sXG4gICAgICB9KTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9BTExfQ09OVEFDVFNfUEFHRSB9KTtcbiAgICB9XG4gICAgLy8gfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgZmxleCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIgaG92ZXI6YmctYmFja2dyb3VuZC1kZWZhdWx0LWhvdmVyYH1cbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvbnRhY3RDbGlja31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LWZpdCBweC01IHB0LTMgcGItMVwiPlxuICAgICAgICA8QXZhdGFyIHR5cGU9XCJsZ1wiIGltYWdlPXtkYXRhPy5wcm9maWxlUGljdHVyZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgbXQtMyBwci0yIHctZnVsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57ZGF0YT8ubmFtZX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgeyFpc0NvbnRhY3RQYWdlICYmIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1zbSAke1xuICAgICAgICAgICAgICAgICAgIWRhdGE/LnRvdGFsVW5yZWFkTWVzc2FnZXMgPiAwXG4gICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWljb24tZ3JlZW5cIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NhbGN1bGF0ZVRpbWUoZGF0YT8uY3JlYXRlZEF0KX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJvcmRlci1iIGJvcmRlci1jb252ZXJzYXRpb24tYm9yZGVyIHBiLTIgcHQtMSBwci0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5IGxpbmUtY2xhbXAtMSB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgIHtpc0NvbnRhY3RQYWdlID8gZGF0YT8uYWJvdXQgfHwgXCJcXHUwMEEwXCIgOiA8ZGl2PjwvZGl2Pn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdExJc3RJdGVtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXZhdGFyIiwidXNlU3RhdGVQcm92aWRlciIsInJlZHVjZXJDYXNlcyIsImNhbGN1bGF0ZVRpbWUiLCJDaGF0TElzdEl0ZW0iLCJkYXRhIiwiaXNDb250YWN0UGFnZSIsInVzZXJJbmZvIiwiY3VycmVudENoYXRVc2VyIiwiZGlzcGF0Y2giLCJoYW5kbGVDb250YWN0Q2xpY2siLCJ0eXBlIiwiQ0hBTkdFX0NVUlJFTlRfQ0hBVF9VU0VSIiwidXNlciIsIm5hbWUiLCJhYm91dCIsInByb2ZpbGVQaWN0dXJlIiwiZW1haWwiLCJpZCIsInNlbmRlcklkIiwicmVjZWl2ZXJJZCIsIlNFVF9BTExfQ09OVEFDVFNfUEFHRSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpbWFnZSIsInNwYW4iLCJ0b3RhbFVucmVhZE1lc3NhZ2VzIiwiY3JlYXRlZEF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chatlist/ChatLIstItem.jsx\n"));

/***/ })

});