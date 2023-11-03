// I import my Express Router
import { Router } from 'express';
// I declare the constant that the Router() method returns.
const router = Router();
//I import my controller with the methods I need
import { registerProduct, getProducts, getOneProduct, deleteProduct, updateProduct } from '../controllers/product.controller.js';

/**
 * @api {GET} /api/products
 * @apiName getProducts
 * @apiGroup Products
 * @apiDescription Get a list of products
 *
 * @apiSuccess {Array} data List of product objects
 */
router.get('/', getProducts);

/**
 * @api {GET} /api/products
 * @apiName getOneProduct
 * @apiGroup Products
 * @apiDescription get a product
 *
 * @apiSuccess data from product
 */
router.get('/:id_product', getOneProduct);

/**
 * @api {POST} /api/products
 * @apiName registerProduct
 * @apiGroup Products
 * @apiDescription To registe a product
 *
 * @apiSuccess message and data registed product
 */
router.post('/', registerProduct);

/**
 * @api {PUT} /api/products
 * @apiName updateProduct
 * @apiGroup Products
 * @apiDescription to update a product
 *
 * @apiSuccess message and data update product
 */
router.put('/:id_product', updateProduct);

/**
 * @api {DELETE} /api/products
 * @apiName deleteProduct
 * @apiGroup Products
 * @apiDescription to delete a product
 *
 * @apiSuccess message and count row deleted
 */
router.delete('/:id_product', deleteProduct);

//I export the router
export default router;