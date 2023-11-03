// I import my Express Router
import { Router } from 'express';
// I declare the constant that the Router() method returns.
const router = Router();

// I import my controller with the methods I need
import { registerUser, getUsers } from '../controllers/user.controller.js';

/**
 * @api {GET} /api/users
 * @apiName getUsers
 * @apiGroup Users
 * @apiDescription Get a list of Users
 *
 * @apiSuccess {Array} data List of users objects
 */
router.get('/', getUsers);

/**
 * @api {POST} /api/users
 * @apiName registerUser
 * @apiGroup users
 * @apiDescription Register user
 *
 * @apiSuccess message and data registed User
 */
router.post('/', registerUser);

// I export the router
export default router;
