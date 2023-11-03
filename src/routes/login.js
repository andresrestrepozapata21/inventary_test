// I import my Express Router
import { Router } from 'express';
// I declare the constant that the Router() method returns.
const router = Router();

// I import my controller with the methods I need
import { login } from '../controllers/login.controller.js';

/**
 * @api {POST} /api/login
 * @apiName registerPurchase
 * @apiGroup User
 * @apiDescription Login
 *
 * @apiSuccess message and data login
 */
router.post('/', login);

// I export the router
export default router;