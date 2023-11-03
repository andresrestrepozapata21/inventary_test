//I import my necessary dependencies
import express, { json } from 'express';
import morgan from 'morgan';

// importing routes
import userRoutes from './routes/users.js';
import productRoutes from './routes/products.js';
import purchaseRouter from './routes/purchases.js';
import loginRouter from './routes/login.js';

/**
 * 
 * @apiDescription inicialization
 *
 */
const app = express();

/**
 * 
 * @apiDescription middlewares
 *
 */
app.use(morgan('dev'));
app.use(json());

/**
 * @api /api/purchases
 * @apiName routes
 * @apiGroup routes
 * @apiDescription route definition
 *
 */
app.use('/api/users', userRoutes);
app.use('/api/products',productRoutes);
app.use('/api/purchases',purchaseRouter);
app.use('/api/login',loginRouter)

// I export my app variable
export default app;