/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/copy-small.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/copy-small.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const copySmall = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.625 5.5h9.75c.069 0 .125.056.125.125v9.75a.125.125 0 0 1-.125.125h-9.75a.125.125 0 0 1-.125-.125v-9.75c0-.069.056-.125.125-.125ZM4 5.625C4 4.728 4.728 4 5.625 4h9.75C16.273 4 17 4.728 17 5.625v9.75c0 .898-.727 1.625-1.625 1.625h-9.75A1.625 1.625 0 0 1 4 15.375v-9.75Zm14.5 11.656v-9H20v9C20 18.8 18.77 20 17.251 20H6.25v-1.5h11.001c.69 0 1.249-.528 1.249-1.219Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copySmall);
//# sourceMappingURL=copy-small.js.map

/***/ }),

/***/ "./src/block-plugins/index.js":
/*!************************************!*\
  !*** ./src/block-plugins/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/copy-small.js");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











/**
 * Get TimeStamp with WP Settings Timezone..
 *
 * @param {*} dateObj Date object.
 * @param {*} nextDays Number of days to add.
 *
 * @returns
 */

const getWPTimeStamp = (dateObj = 'now', nextDays = 0) => {
  const {
    timezone
  } = (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_8__.getSettings)();
  const date = 'now' === dateObj ? new Date() : dateObj;

  // If nextDays is set, add the days to the date.
  if (nextDays > 0) {
    date.setDate(date?.getDate() + nextDays);
  }
  return (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_8__.dateI18n)('U', date?.getTime() + timezone?.offset * 1000);
};

/**
 * Share Post Preview Info.
 */
function SharePostPreview() {
  const wpCurrentTimeStamp = getWPTimeStamp();
  const defaultDatePickerStamp = getWPTimeStamp('now', 2);
  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)('core/editor');
  const {
    postID,
    previewLink,
    postStatus,
    meta
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const editor = select('core/editor');
    const previewLink = editor?.getEditedPostPreviewLink() || '';
    return {
      postID: editor?.getCurrentPostId() || 0,
      previewLink: previewLink ? previewLink : '',
      postStatus: editor?.getEditedPostAttribute('status') || '',
      meta: editor?.getEditedPostAttribute('meta') || {}
    };
  }, []);
  const [sharePostPreviewLink, setSharePostPreviewLink] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(previewLink || '');
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [isChecked, setIsChecked] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(meta?.spp_enable_preview || false);
  const [isNoExpire, setIsNoExpire] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('no-expire' === meta?.spp_expire || false);
  const [timestamp, setTimeStamp] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(() => {
    return meta?.spp_expire && 'no-expire' !== meta?.spp_expire ? meta?.spp_expire : defaultDatePickerStamp;
  });
  const {
    createNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__.store);
  const copyButtonRef = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useCopyToClipboard)(sharePostPreviewLink, () => {
    createNotice('info', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Share Preview Link copied to clipboard.', 'share-post-preview'), {
      isDismissible: true,
      type: 'snackbar'
    });
  });
  const setPostToken = (expireTimeStamp, noExpire, isChecked) => {
    setLoading(true);
    const expire = noExpire ? 'no-expire' : expireTimeStamp.toString();
    const response = wp.ajax.post('get_share_post_preview_token', {
      post_id: postID,
      expire: expire
    });
    response.done(response => {
      if (response?.token) {
        setSharePostPreviewLink(previewLink + '&spp_token=' + response?.token);
      }
    }, 'json');
    response.always(() => {
      setLoading(false);
    });
    editPost({
      meta: {
        ...meta,
        spp_enable_preview: !!isChecked,
        spp_expire: isChecked ? expire : ''
      }
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setPostToken(timestamp, isNoExpire, isChecked);
  }, [timestamp, isNoExpire, isChecked]);

  // Do not show the settings if the post is not published.
  if (['publish', 'private', 'auto-draft'].includes(postStatus)) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalVStack, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Enable Share Preview', 'share-post-preview'),
      checked: isChecked,
      disabled: loading,
      onChange: value => {
        setIsChecked(value);
      }
    }), isChecked && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalInputControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Copy Share Preview Link', 'share-post-preview'),
        hideLabelFromVision: true,
        autoComplete: "off",
        spellCheck: "false",
        value: sharePostPreviewLink,
        type: "text",
        disabled: true,
        suffix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalInputControlSuffixWrapper, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
            ref: copyButtonRef,
            size: "small",
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Copy Share Link', 'share-post-preview')
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CheckboxControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Don\'t Expire.', 'share-post-preview'),
        checked: isNoExpire,
        disabled: loading,
        onChange: value => {
          setIsNoExpire(value);
        }
      }), !isNoExpire && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.DatePicker, {
        disabled: loading,
        currentDate: new Date(timestamp * 1000),
        onChange: newDate => {
          const newTimeStamp = Math.floor(new Date(newDate).getTime() / 1000);
          setTimeStamp(newTimeStamp);
        },
        isInvalidDate: invalidDate => {
          return invalidDate < new Date(wpCurrentTimeStamp * 1000);
        }
      })]
    })]
  });
}

/**
 * Share Post Preview Settings Plugin.
 */
function SharePostPreviewPlugin() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PluginPostStatusInfo, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(SharePostPreview, {})
  });
}
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_7__.registerPlugin)('share-post-preview', {
  render: SharePostPreviewPlugin
});

/***/ }),

/***/ "./src/assets/styles/index.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/index.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["date"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["editor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["notices"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/index.scss */ "./src/assets/styles/index.scss");
/* harmony import */ var _block_plugins_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-plugins/index */ "./src/block-plugins/index.js");
/* global _ */

// Import Styles


})();

/******/ })()
;
//# sourceMappingURL=index.js.map