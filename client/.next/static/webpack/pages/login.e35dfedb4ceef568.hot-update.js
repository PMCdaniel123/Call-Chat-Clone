"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/utils/ApiRoutes.js":
/*!********************************!*\
  !*** ./src/utils/ApiRoutes.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_AUDIO_MESSAGE_ROUTE\": function() { return /* binding */ ADD_AUDIO_MESSAGE_ROUTE; },\n/* harmony export */   \"ADD_IMAGE_MESSAGE_ROUTE\": function() { return /* binding */ ADD_IMAGE_MESSAGE_ROUTE; },\n/* harmony export */   \"ADD_MESSAGE_ROUTE\": function() { return /* binding */ ADD_MESSAGE_ROUTE; },\n/* harmony export */   \"CHECK_USER_ROUTE\": function() { return /* binding */ CHECK_USER_ROUTE; },\n/* harmony export */   \"GET_ALL_CONTACTS\": function() { return /* binding */ GET_ALL_CONTACTS; },\n/* harmony export */   \"GET_INITIAL_CONTACTS_ROUTE\": function() { return /* binding */ GET_INITIAL_CONTACTS_ROUTE; },\n/* harmony export */   \"GET_MESSAGES_ROUTE\": function() { return /* binding */ GET_MESSAGES_ROUTE; },\n/* harmony export */   \"HOST\": function() { return /* binding */ HOST; },\n/* harmony export */   \"ONBOARD_USER_ROUTE\": function() { return /* binding */ ONBOARD_USER_ROUTE; }\n/* harmony export */ });\nconst HOST = \"http://localhost:3005\";\nconst AUTH_ROUTE = \"\".concat(HOST, \"/api/auth\");\nconst MESSAGE_ROUTE = \"\".concat(HOST, \"/api/messages\");\nconst CHECK_USER_ROUTE = \"\".concat(AUTH_ROUTE, \"/check-user\");\nconst ONBOARD_USER_ROUTE = \"\".concat(AUTH_ROUTE, \"/onboard-user\");\nconst GET_ALL_CONTACTS = \"\".concat(AUTH_ROUTE, \"/get-contacts\");\nconst ADD_MESSAGE_ROUTE = \"\".concat(MESSAGE_ROUTE, \"/add-message\");\nconst GET_MESSAGES_ROUTE = \"\".concat(MESSAGE_ROUTE, \"/get-messages\");\nconst ADD_IMAGE_MESSAGE_ROUTE = \"\".concat(MESSAGE_ROUTE, \"/add-image-message\");\nconst ADD_AUDIO_MESSAGE_ROUTE = \"\".concat(MESSAGE_ROUTE, \"/add-audio-message\");\nconst GET_INITIAL_CONTACTS_ROUTE = \"\".concat(MESSAGE_ROUTE, \"/get-initial-contacts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvQXBpUm91dGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLE9BQU8sd0JBQXdCO0FBRTVDLE1BQU1DLGFBQWEsR0FBUSxPQUFMRCxNQUFLO0FBRTNCLE1BQU1FLGdCQUFnQixHQUFRLE9BQUxGLE1BQUs7QUFFdkIsTUFBTUcsbUJBQW1CLEdBQWMsT0FBWEYsWUFBVyxlQUFhO0FBQ3BELE1BQU1HLHFCQUFxQixHQUFjLE9BQVhILFlBQVcsaUJBQWU7QUFDeEQsTUFBTUksbUJBQW1CLEdBQWMsT0FBWEosWUFBVyxpQkFBZTtBQUV0RCxNQUFNSyxvQkFBb0IsR0FBaUIsT0FBZEosZUFBYyxnQkFBYztBQUN6RCxNQUFNSyxxQkFBcUIsR0FBaUIsT0FBZEwsZUFBYyxpQkFBZTtBQUMzRCxNQUFNTSwwQkFBMEIsR0FBaUIsT0FBZE4sZUFBYyxzQkFBb0I7QUFDckUsTUFBTU8sMEJBQTBCLEdBQWlCLE9BQWRQLGVBQWMsc0JBQW9CO0FBQ3JFLE1BQU1RLDZCQUE2QixHQUFpQixPQUFkUixlQUFjLHlCQUF1QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXRpbHMvQXBpUm91dGVzLmpzPzY4OTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEhPU1QgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNVwiO1xyXG5cclxuY29uc3QgQVVUSF9ST1VURSA9IGAke0hPU1R9L2FwaS9hdXRoYDtcclxuXHJcbmNvbnN0IE1FU1NBR0VfUk9VVEUgPSBgJHtIT1NUfS9hcGkvbWVzc2FnZXNgO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIRUNLX1VTRVJfUk9VVEUgPSBgJHtBVVRIX1JPVVRFfS9jaGVjay11c2VyYDtcclxuZXhwb3J0IGNvbnN0IE9OQk9BUkRfVVNFUl9ST1VURSA9IGAke0FVVEhfUk9VVEV9L29uYm9hcmQtdXNlcmA7XHJcbmV4cG9ydCBjb25zdCBHRVRfQUxMX0NPTlRBQ1RTID0gYCR7QVVUSF9ST1VURX0vZ2V0LWNvbnRhY3RzYDtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfTUVTU0FHRV9ST1VURSA9IGAke01FU1NBR0VfUk9VVEV9L2FkZC1tZXNzYWdlYDtcclxuZXhwb3J0IGNvbnN0IEdFVF9NRVNTQUdFU19ST1VURSA9IGAke01FU1NBR0VfUk9VVEV9L2dldC1tZXNzYWdlc2A7XHJcbmV4cG9ydCBjb25zdCBBRERfSU1BR0VfTUVTU0FHRV9ST1VURSA9IGAke01FU1NBR0VfUk9VVEV9L2FkZC1pbWFnZS1tZXNzYWdlYDtcclxuZXhwb3J0IGNvbnN0IEFERF9BVURJT19NRVNTQUdFX1JPVVRFID0gYCR7TUVTU0FHRV9ST1VURX0vYWRkLWF1ZGlvLW1lc3NhZ2VgO1xyXG5leHBvcnQgY29uc3QgR0VUX0lOSVRJQUxfQ09OVEFDVFNfUk9VVEUgPSBgJHtNRVNTQUdFX1JPVVRFfS9nZXQtaW5pdGlhbC1jb250YWN0c2A7XHJcbiJdLCJuYW1lcyI6WyJIT1NUIiwiQVVUSF9ST1VURSIsIk1FU1NBR0VfUk9VVEUiLCJDSEVDS19VU0VSX1JPVVRFIiwiT05CT0FSRF9VU0VSX1JPVVRFIiwiR0VUX0FMTF9DT05UQUNUUyIsIkFERF9NRVNTQUdFX1JPVVRFIiwiR0VUX01FU1NBR0VTX1JPVVRFIiwiQUREX0lNQUdFX01FU1NBR0VfUk9VVEUiLCJBRERfQVVESU9fTUVTU0FHRV9ST1VURSIsIkdFVF9JTklUSUFMX0NPTlRBQ1RTX1JPVVRFIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/ApiRoutes.js\n"));

/***/ })

});