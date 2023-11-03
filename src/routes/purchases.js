// I import my Express Router
import { Router } from 'express';
// I declare the constant that the Router() method returns.
const router = Router();

// I import my controller with the methods I need
import { registerPurchase, historyPurchasesUser, getInvoice, getPurchases } from '../controllers/purchase.controller.js';

/**
 * @api {GET} /api/purchases/all
 * @apiName getPurchases
 * @apiGroup Purchases
 * @apiDescription Get a list of Purchases
 *
 * @apiSuccess {Array} data List of Purchases objects
 */
router.get('/all', getPurchases);

/**
 * @api {POST} /api/purchases/user/:fk_id_user_purchase
 * @apiName historyPurchasesUser
 * @apiGroup Purchases
 * @apiDescription Get list purchases products by user
 *
 * @apiSuccess {Array} Get List purchases product by user
 */
router.get('/user/:fk_id_user_purchase', historyPurchasesUser);

/**
 * @api {POST} /api/purchases/invoice/:id_purchase
 * @apiName getInvoice
 * @apiGroup Purchases
 * @apiDescription Get purchase invoid
 *
 * @apiSuccess {Array} Get purchase invoid
 */
router.get('/invoice/:id_purchase', getInvoice);

/**
 * @api {POST} /api/purchases
 * @apiName registerPurchase
 * @apiGroup Purchases
 * @apiDescription To record purchase
 *
 * @apiSuccess message and data registed purchase
 */
router.post('/', registerPurchase);

// I export the router
export default router;