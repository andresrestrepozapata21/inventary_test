"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _userController = require("../controllers/user.controller.js");
// I import my Express Router

// I declare the constant that the Router() method returns.
var router = (0, _express.Router)();

// I import my controller with the methods I need

/**
 * @api {GET} /api/products
 * @apiName getUsers
 * @apiGroup Users
 * @apiDescription Get a list of Users
 *
 * @apiSuccess {Array} data List of users objects
 */
router.get('/', _userController.getUsers);

/**
 * @api {POST} /api/products
 * @apiName registerUser
 * @apiGroup Products
 * @apiDescription Get a list of products
 *
 * @apiSuccess message and data registed product
 */
router.post('/', _userController.registerUser);

// I export the router
var _default = exports["default"] = router;