// I import my Express Router
import { Router } from 'express';
// I declare the constant that the Router() method returns.
const router = Router();

// I import my controller with the methods I need
import { registerUser, getUsers } from '../controllers/user.controller.js';

/**
 * @api {GET} /api/products
 * @apiName getUsers
 * @apiGroup Users
 * @apiDescription Get a list of Users
 *
 * @apiSuccess {Array} data List of users objects
 */
router.get('/', getUsers);

/**
 * @api {POST} /api/products
 * @apiName registerUser
 * @apiGroup Products
 * @apiDescription Get a list of products
 *
 * @apiSuccess message and data registed product
 */
router.post('/', registerUser);

// I export the router
export default router;
