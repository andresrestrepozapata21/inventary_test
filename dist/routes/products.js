"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _productController = require("../controllers/product.controller.js");
// I import my Express Router

// I declare the constant that the Router() method returns.
var router = (0, _express.Router)();
//I import my controller with the methods I need

/**
 * @api {GET} /api/products
 * @apiName getProducts
 * @apiGroup Products
 * @apiDescription Get a list of products
 *
 * @apiSuccess {Array} data List of product objects
 */
router.get('/', _productController.getProducts);

/**
 * @api {GET} /api/products
 * @apiName getOneProduct
 * @apiGroup Products
 * @apiDescription get a product
 *
 * @apiSuccess data from product
 */
router.get('/:id_product', _productController.getOneProduct);

/**
 * @api {POST} /api/products
 * @apiName registerProduct
 * @apiGroup Products
 * @apiDescription To registe a product
 *
 * @apiSuccess message and data registed product
 */
router.post('/', _productController.registerProduct);

/**
 * @api {PUT} /api/products
 * @apiName updateProduct
 * @apiGroup Products
 * @apiDescription to update a product
 *
 * @apiSuccess message and data update product
 */
router.put('/:id_product', _productController.updateProduct);

/**
 * @api {DELETE} /api/products
 * @apiName deleteProduct
 * @apiGroup Products
 * @apiDescription to delete a product
 *
 * @apiSuccess message and count row deleted
 */
router["delete"]('/:id_product', _productController.deleteProduct);

//I export the router
var _default = exports["default"] = router;