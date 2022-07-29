"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./node_modules/.pnpm/next@12.2.3_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/pages/_error.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@12.2.3_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/pages/_error.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ \"../shared/lib/head\"));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst statusCodes = {\n    400: \"Bad Request\",\n    404: \"This page could not be found\",\n    405: \"Method Not Allowed\",\n    500: \"Internal Server Error\"\n};\nfunction _getInitialProps({ res , err  }) {\n    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n    return {\n        statusCode\n    };\n}\nvar _Component;\nclass Error extends (_Component = _react.default.Component) {\n    render() {\n        const { statusCode , withDarkMode =true  } = this.props;\n        const title = this.props.title || statusCodes[statusCode] || \"An unexpected error has occurred\";\n        return /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.error\n        }, /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement(\"title\", null, statusCode ? `${statusCode}: ${title}` : \"Application error: a client-side exception has occurred\")), /*#__PURE__*/ _react.default.createElement(\"div\", null, /*#__PURE__*/ _react.default.createElement(\"style\", {\n            dangerouslySetInnerHTML: {\n                __html: `\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n                \n                ${withDarkMode ? `@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }` : \"\"}`\n            }\n        }), statusCode ? /*#__PURE__*/ _react.default.createElement(\"h1\", {\n            className: \"next-error-h1\",\n            style: styles.h1\n        }, statusCode) : null, /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.desc\n        }, /*#__PURE__*/ _react.default.createElement(\"h2\", {\n            style: styles.h2\n        }, this.props.title || statusCode ? title : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, \"Application error: a client-side exception has occurred (see the browser console for more information)\"), \".\"))));\n    }\n}\nError.displayName = \"ErrorPage\";\nError.getInitialProps = _getInitialProps;\nError.origGetInitialProps = _getInitialProps;\nconst styles = {\n    error: {\n        fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif',\n        height: \"100vh\",\n        textAlign: \"center\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\"\n    },\n    desc: {\n        display: \"inline-block\",\n        textAlign: \"left\",\n        lineHeight: \"49px\",\n        height: \"49px\",\n        verticalAlign: \"middle\"\n    },\n    h1: {\n        display: \"inline-block\",\n        margin: 0,\n        marginRight: \"20px\",\n        padding: \"10px 23px 10px 0\",\n        fontSize: \"24px\",\n        fontWeight: 500,\n        verticalAlign: \"top\"\n    },\n    h2: {\n        fontSize: \"14px\",\n        fontWeight: \"normal\",\n        lineHeight: \"inherit\",\n        margin: 0,\n        padding: 0\n    }\n};\nexports[\"default\"] = Error; //# sourceMappingURL=_error.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxMi4yLjNfYmlxYmFib3BsZmJyZXR0ZDc2NTVmcjRuMnkvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZXJyb3IuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQ3pDRyxLQUFLLEVBQUUsSUFBSTtDQUNkLEVBQUMsQ0FBQztBQUNIRCxrQkFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLElBQUlHLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQU8sQ0FBQyxDQUFDO0FBQ3JELElBQUlDLEtBQUssR0FBR0Ysc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsOENBQW9CLENBQUMsQ0FBQztBQUNqRSxTQUFTRCxzQkFBc0IsQ0FBQ0csR0FBRyxFQUFFO0lBQ2pDLE9BQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFVLEdBQUdELEdBQUcsR0FBRztRQUNqQ0wsT0FBTyxFQUFFSyxHQUFHO0tBQ2YsQ0FBQztDQUNMO0FBQ0QsTUFBTUUsV0FBVyxHQUFHO0FBQ2hCLE9BQUcsRUFBRSxhQUFhO0FBQ2xCLE9BQUcsRUFBRSw4QkFBOEI7QUFDbkMsT0FBRyxFQUFFLG9CQUFvQjtBQUN6QixPQUFHLEVBQUUsdUJBQXVCO0NBQy9CO0FBQ0QsU0FBU0MsZ0JBQWdCLENBQUMsRUFBRUMsR0FBRyxHQUFHQyxHQUFHLEdBQUcsRUFBRTtJQUN0QyxNQUFNQyxVQUFVLEdBQUdGLEdBQUcsSUFBSUEsR0FBRyxDQUFDRSxVQUFVLEdBQUdGLEdBQUcsQ0FBQ0UsVUFBVSxHQUFHRCxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHLEdBQUc7SUFDdEYsT0FBTztRQUNIQSxVQUFVO0tBQ2IsQ0FBQztDQUNMO0FBQ0QsSUFBSUMsVUFBVTtBQUNkLE1BQU1DLEtBQUssU0FBUyxDQUFDRCxVQUFVLEdBQUdYLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDYyxTQUFTLENBQUM7SUFDdkRDLE1BQU0s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Q3ZCTSxNQUFNLEVBQUUsQ0FBQztRQUNUQyxXQUFXLEVBQUUsTUFBTTtRQUNuQkMsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQkMsUUFBUSxFQUFFLE1BQU07UUFDaEJDLFVBQVUsRUFBRSxHQUFHO1FBQ2ZMLGFBQWEsRUFBRSxLQUFLO0tBQ3ZCO0lBQ0RiLEVBQUUsRUFBRTtRQUNBaUIsUUFBUSxFQUFFLE1BQU07UUFDaEJDLFVBQVUsRUFBRSxRQUFRO1FBQ3BCTixVQUFVLEVBQUUsU0FBUztRQUNyQkUsTUFBTSxFQUFFLENBQUM7UUFDVEUsT0FBTyxFQUFFLENBQUM7S0FDYjtDQUNKO0FBQ0Q5QyxrQkFBZSxHQUFHZSxLQUFLLENBQUMsQ0FFeEIsa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxMi4yLjNfYmlxYmFib3BsZmJyZXR0ZDc2NTVmcjRuMnkvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZXJyb3IuanM/NTljNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc3RhdHVzQ29kZXMgPSB7XG4gICAgNDAwOiAnQmFkIFJlcXVlc3QnLFxuICAgIDQwNDogJ1RoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQnLFxuICAgIDQwNTogJ01ldGhvZCBOb3QgQWxsb3dlZCcsXG4gICAgNTAwOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJ1xufTtcbmZ1bmN0aW9uIF9nZXRJbml0aWFsUHJvcHMoeyByZXMgLCBlcnIgIH0pIHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzICYmIHJlcy5zdGF0dXNDb2RlID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IDQwNDtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlXG4gICAgfTtcbn1cbnZhciBfQ29tcG9uZW50O1xuY2xhc3MgRXJyb3IgZXh0ZW5kcyAoX0NvbXBvbmVudCA9IF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCkge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXNDb2RlICwgd2l0aERhcmtNb2RlID10cnVlICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlIHx8IHN0YXR1c0NvZGVzW3N0YXR1c0NvZGVdIHx8ICdBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCc7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5lcnJvclxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwgbnVsbCwgc3RhdHVzQ29kZSA/IGAke3N0YXR1c0NvZGV9OiAke3RpdGxlfWAgOiAnQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCcpKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIHtcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICAgICAgYm9keSB7IG1hcmdpbjogMDsgY29sb3I6ICMwMDA7IGJhY2tncm91bmQ6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAubmV4dC1lcnJvci1oMSB7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJHt3aXRoRGFya01vZGUgPyBgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgICAgICAgICAgICAgICAgYm9keSB7IGNvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiAjMDAwOyB9XG4gICAgICAgICAgICAgICAgICAubmV4dC1lcnJvci1oMSB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1gIDogJyd9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSwgc3RhdHVzQ29kZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgxXCIsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJuZXh0LWVycm9yLWgxXCIsXG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmgxXG4gICAgICAgIH0sIHN0YXR1c0NvZGUpIDogbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuZGVzY1xuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7XG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmgyXG4gICAgICAgIH0sIHRoaXMucHJvcHMudGl0bGUgfHwgc3RhdHVzQ29kZSA/IHRpdGxlIDogLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBcIkFwcGxpY2F0aW9uIGVycm9yOiBhIGNsaWVudC1zaWRlIGV4Y2VwdGlvbiBoYXMgb2NjdXJyZWQgKHNlZSB0aGUgYnJvd3NlciBjb25zb2xlIGZvciBtb3JlIGluZm9ybWF0aW9uKVwiKSwgXCIuXCIpKSkpO1xuICAgIH1cbn1cbkVycm9yLmRpc3BsYXlOYW1lID0gJ0Vycm9yUGFnZSc7XG5FcnJvci5nZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzO1xuRXJyb3Iub3JpZ0dldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHM7XG5jb25zdCBzdHlsZXMgPSB7XG4gICAgZXJyb3I6IHtcbiAgICAgICAgZm9udEZhbWlseTogJy1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBcIlNlZ29lIFVJXCIsIFwiRmlyYSBTYW5zXCIsIEF2ZW5pciwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZicsXG4gICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgIH0sXG4gICAgZGVzYzoge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0OXB4JyxcbiAgICAgICAgaGVpZ2h0OiAnNDlweCcsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXG4gICAgfSxcbiAgICBoMToge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxuICAgICAgICBwYWRkaW5nOiAnMTBweCAyM3B4IDEwcHggMCcsXG4gICAgICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCdcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgcGFkZGluZzogMFxuICAgIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBFcnJvcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2Vycm9yLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwib2JqIiwiX19lc01vZHVsZSIsInN0YXR1c0NvZGVzIiwiX2dldEluaXRpYWxQcm9wcyIsInJlcyIsImVyciIsInN0YXR1c0NvZGUiLCJfQ29tcG9uZW50IiwiRXJyb3IiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJ3aXRoRGFya01vZGUiLCJwcm9wcyIsInRpdGxlIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwic3R5bGVzIiwiZXJyb3IiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNsYXNzTmFtZSIsImgxIiwiZGVzYyIsImgyIiwiRnJhZ21lbnQiLCJkaXNwbGF5TmFtZSIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJmb250RmFtaWx5IiwiaGVpZ2h0IiwidGV4dEFsaWduIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwidmVydGljYWxBbGlnbiIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/next@12.2.3_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/pages/_error.js\n");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/.pnpm/next@12.2.3_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

})();