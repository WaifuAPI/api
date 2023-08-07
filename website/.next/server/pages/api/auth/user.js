"use strict";
(() => {
var exports = {};
exports.id = 873;
exports.ids = [873];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 7208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// api/user.js

async function handler(req, res) {
    if (req.method === "POST") {
        const { id, email, token } = req.body;
        const apiKey = process.env.ACCESS_KEY; // Replace 'API_KEY' with the actual environment variable name that holds your API key
        if (!id && !token) {
            return res.status(400).json({
                message: "User ID and Token missing in the request body"
            });
        }
        try {
            if (email) {
                const api_response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${process.env.API_URL}/api/user`, {
                    headers: {
                        key: apiKey,
                        id,
                        email
                    }
                });
                res.json(api_response.data);
            } else if (token) {
                const api_response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${process.env.API_URL}/api/user`, {
                    id,
                    token,
                    email
                }, {
                    headers: {
                        key: apiKey
                    }
                });
                console.log(api_response);
                res.json(api_response.data);
            }
        } catch (error) {
            console.error("Error performing the request:", error);
            res.status(500).json({
                error: "Error performing the request"
            });
        }
    } else {
        return res.status(405).end(); // Method Not Allowed for other request types
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7208));
module.exports = __webpack_exports__;

})();