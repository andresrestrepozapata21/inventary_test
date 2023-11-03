// I import the modules that need to be customized like the models or installed with npm
import Purchase from '../models/purchase.js';
import PurchaseDetail from '../models/purchaseDetail.js';
import Product from '../models/product.js';
import User from '../models/user.js';
import Sequelize from 'sequelize';
import moment from 'moment-timezone';
import logger from '../utils/logger.js';
// capture the exact time in my time zone using the moment-timezone module, I do this capture outside the methods to reuse this variable
const bogotaTime = moment.tz('America/Bogota');
const formattedTime = bogotaTime.format('YYYY-MM-DD HH:mm:ss');

// method to obtain all the products
export async function getPurchases(req, res) {
    // logger control proccess
    logger.info('enter the endpoint getPurchases');
    try {
        // I call and save the result of the findAll method, which is d sequelize
        const allPurchases = await Purchase.findAll({
            attributes: ['id_purchase', 'total_price_purchase', 'date_created_purchase'],
            include: [
                {
                    model: User, // Related model
                    attributes: ['id_user', 'first_name_user', 'last_name_user', 'phone_number_user', 'email_user'] // User model attributes you want to include
                },
                {
                    model: PurchaseDetail, // Related model
                    attributes: ['id_purchasesdetail', 'quantity_product_purchasedetail'], // Product model attributes you want to include
                    include: [
                        {
                            model: Product, // Agrega el modelo Product para obtener información del producto
                            attributes: ['id_product', 'lot_name_product', 'name_product', 'price_product']
                        }
                    ]
                }
            ],
            order: [
                [Sequelize.literal('date_created_purchase DESC')]
            ]
        });
        // logger control proccess
        logger.info('Get list all Purchases');
        // I validate product > 0, id exists in BD
        if (allPurchases.length > 0) {
            // I return the json with the message I want
            return res.json({
                data: allPurchases
            });
        } else {
            //return 404 not Found
            return res.sendStatus(404);
        }
    } catch (e) {
        // logger control proccess
        logger.info('Error getPurchases: ' + e);
        // I return the status 500 and the message I want
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

// method to register the user
export async function registerPurchase(req, res) {
    // logger control proccess
    logger.info('enter the endpoint registerPurchase');
    // I extract the values that are sent in the json req
    const { fk_id_user_purchase, total_price_purchase, products } = req.body;
    // I validate req correct json
    if (!fk_id_user_purchase || !total_price_purchase || !products) return res.sendStatus(400);
    // I execute my code in a try catch
    try {
        // I validate not empty JSON products
        if (!products || !Array.isArray(products)) {
            return res.status(400).json({ message: 'Not found Products' });
        }
        // I call and save the result of the findOne method, which is d sequelize
        const userExist = await User.findAll({
            where: {
                id_user: fk_id_user_purchase
            }
        });
        // I validate user exists
        if (userExist.length < 1) return res.status(404).json({message: 'The user you are trying to enter do not exist.'});
        // Register the product arrangement to validate if all shipped products exist in database.
        for (const product of products) {
            // I call and save the result of the findOne method, which is d sequelize i validate if products exists on BD
            const ProductExist = await Product.findAll({
                where: {
                    id_product: product.id_product
                }
            });
            // I validate user exists
            if (ProductExist.length < 1) return res.status(404).json({message: 'Some or all of the products you are trying to enter do not exist.'});
        }
        // I declare the create method with its respective definition of the object and my Product model in a variable taking into account the await
        let newPurchase = await Purchase.create({
            total_price_purchase,
            date_created_purchase: formattedTime,
            fk_id_user_purchase
        },
            {
                // I define the variables that I am going to insert into the database so that there are no conflicts with the definition of the id or the number of columns
                fields: ['date_created_purchase', 'total_price_purchase', 'fk_id_user_purchase']
            });
        // I validate user purschase recorded
        if (newPurchase) {
            // logger control proccess
            logger.info('Purchase registed successfully');
            // I execute my code in a try catch
            let productsAdded = [];
            // I go through the products to register them
            for (const product of products) {
                // I declare the create method with its respective definition of the object and my PurchaseDetail model in a variable taking into account the await
                let newPurchaseDetail = await PurchaseDetail.create({
                    quantity_product_purchasedetail: product.quantity_product,
                    date_created_purchasedetailt: formattedTime,
                    fk_id_purchase_purchasedetail: newPurchase.id_purchase,
                    fk_id_product_purchasedetail: product.id_product
                },
                    {
                        // I define the variables that I am going to insert into the database so that there are no conflicts with the definition of the id or the number of columns
                        fields: ['quantity_product_purchasedetail', 'date_created_purchasedetailt', 'fk_id_purchase_purchasedetail', 'fk_id_product_purchasedetail']
                    });
                // I validate purschase Details recorded
                if (newPurchaseDetail) {
                    // logger control proccess
                    logger.info('Product purchase registed successfully');
                    // Push array productAdded
                    productsAdded.push(newPurchaseDetail);
                }
            }
            // I return the json with the message I want
            return res.json({
                message: 'Purchase registed successfully',
                puchase: newPurchase,
                PurchaseDetail: productsAdded
            });
        }
    } catch (e) {
        // logger control proccess
        logger.info('Error registerPurchase: ' + e);
        // I return the status 500 and the message I want
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

// method to register the user
export async function historyPurchasesUser(req, res) {
    // logger control proccess
    logger.info('enter the endpoint historyPurchasesUser');
    // I enclose in a try catch to validate errors
    try {
        // I capture the parameter that comes in the req and the data that I want to update that comes in the body of the req
        const { fk_id_user_purchase } = req.params;
        // I call and save the result of the findAll method, which is d sequelize
        const history = await Purchase.findAll({
            attributes: ['id_purchase', 'total_price_purchase', 'date_created_purchase'],
            where: {
                fk_id_user_purchase
            },
            include: [
                {
                    model: PurchaseDetail, // Related model
                    attributes: ['id_purchasesdetail', 'quantity_product_purchasedetail'], // Product model attributes you want to include
                    include: [
                        {
                            model: Product, // Agrega el modelo Product para obtener información del producto
                            attributes: ['id_product', 'lot_name_product', 'name_product', 'price_product']
                        }
                    ]
                }
            ],
            order: [
                [Sequelize.literal('date_created_purchase DESC')]
            ]
        });
        // logger control proccess
        logger.info('Get list purchases products by user');
        // I validate product > 0, id exists in BD
        if (history.length > 0) {
            // I return the json with the message I want
            return res.json({
                data: history
            });
        } else {
            //return 404 not Found
            return res.sendStatus(404);
        }
    } catch (e) {
        // logger control proccess
        logger.info('Error historyPurchasesUser: ' + e);
        // I return the status 500 and the message I want
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

// method to register the user
export async function getInvoice(req, res) {
    // logger control proccess
    logger.info('enter the endpoint getInvoice');
    // I enclose in a try catch to validate errors
    try {
        // I capture the parameter that comes in the req and the data that I want to update that comes in the body of the req
        const { id_purchase } = req.params;

        // I call and save the result of the findAll method, which is d sequelize
        const invoice = await Purchase.findAll({
            attributes: ['id_purchase', 'total_price_purchase', 'date_created_purchase'],
            where: {
                id_purchase
            },
            include: [
                {
                    model: User, // Related model
                    attributes: ['id_user', 'first_name_user', 'last_name_user', 'phone_number_user', 'email_user'] // User model attributes you want to include
                },
                {
                    model: PurchaseDetail, // Related model
                    attributes: ['id_purchasesdetail', 'quantity_product_purchasedetail'], // Product model attributes you want to include
                    include: [
                        {
                            model: Product, // Agrega el modelo Product para obtener información del producto
                            attributes: ['id_product', 'lot_name_product', 'name_product', 'price_product']
                        }
                    ]
                }
            ]
        });
        // logger control proccess
        logger.info('Get purchase invoid');
        // I validate product > 0, id exists in BD
        if (invoice.length > 0) {
            // I return the json with the message I want
            return res.json({
                data: invoice
            });
        } else {
            //return 404 not Found
            return res.sendStatus(404);
        }
    } catch (e) {
        // logger control proccess
        logger.info('Error getInvoice: ' + e);
        // I return the status 500 and the message I want
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}