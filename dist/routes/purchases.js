"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _purchaseController = require("../controllers/purchase.controller.js");
// I import my Express Router

// I declare the constant that the Router() method returns.
var router = (0, _express.Router)();

// I import my controller with the methods I need

/**
 * @api {GET} /api/purchases/all
 * @apiName getPurchases
 * @apiGroup Purchases
 * @apiDescription Get a list of Purchases
 *
 * @apiSuccess {Array} data List of Purchases objects
 */
router.get('/all', _purchaseController.getPurchases);

/**
 * @api {POST} /api/purchases
 * @apiName registerPurchase
 * @apiGroup Purchases
 * @apiDescription To record purchase
 *
 * @apiSuccess message and data registed purchase
 */
router.post('/', _purchaseController.registerPurchase);

/**
 * @api {POST} /api/purchases/user/:fk_id_user_purchase
 * @apiName historyPurchasesUser
 * @apiGroup Purchases
 * @apiDescription Get list purchases products by user
 *
 * @apiSuccess {Array} Get List purchases product by user
 */
router.get('/user/:fk_id_user_purchase', _purchaseController.historyPurchasesUser);

/**
 * @api {POST} /api/purchases/invoice/:id_purchase
 * @apiName getInvoice
 * @apiGroup Purchases
 * @apiDescription Get purchase invoid
 *
 * @apiSuccess {Array} Get purchase invoid
 */
router.get('/invoice/:id_purchase', _purchaseController.getInvoice);

// I export the router
var _default = exports["default"] = router;