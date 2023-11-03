"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _loginController = require("../controllers/login.controller.js");
// I import my Express Router

// I declare the constant that the Router() method returns.
var router = (0, _express.Router)();

// I import my controller with the methods I need

/**
 * @api {POST} /api/login
 * @apiName registerPurchase
 * @apiGroup User
 * @apiDescription Login
 *
 * @apiSuccess message and data login
 */
router.post('/', _loginController.login);

// I export the router
var _default = exports["default"] = router;