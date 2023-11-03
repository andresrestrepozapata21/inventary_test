// I import the modules that need to be customized like the models or installed with npm
import Product from '../models/product.js';
import moment from 'moment-timezone';
import logger from '../utils/logger.js';
// capture the exact time in my time zone using the moment-timezone module, I do this capture outside the methods to reuse this variable
const bogotaTime = moment.tz('America/Bogota');
const formattedTime = bogotaTime.format('YYYY-MM-DD HH:mm:ss');

// method to obtain all the products
export async function getProducts(req, res) {
    // logger control proccess
    logger.info('enter the endpoint getProducts');
    try {
        // I call the findAll() method and save it in a variable
        const product = await Product.findAll();
        // logger control proccess
        logger.info('Get list products');
        // I return that variable in the response json
        return res.json({
            data: product
        });
    } catch (e) {
        // logger control proccess
        logger.info('Error getProducts: ' + e);
        // I return the status 500 and the message I want
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

// method to obtain a product
export async function getOneProduct(req, res) {
    // logger control proccess
    logger.info('enter the endpoint getOneProducts');
    try {
        // capture the id that comes in the parameters of the req
        const { id_product } = req.params;
        // I call and save the result of the findOne method, which is d sequelize
        const product = await Product.findOne({
            where: {
                id_product
            }
        });
        // logger control proccess
        logger.info('Get a products him info');
        // I build and return the json that I want to return
        return res.json({
            data: product
        });
    } catch (e) {
        // logger control proccess
        logger.info('Error getOneProduct: ' + e);
        // I return the status 500 and the message I want
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

// method to register the product
export async function registerProduct(req, res) {
    // logger control proccess
    logger.info('enter the endpoint registerProduct');
    // I save the variables that come to me in the request in variables.
    const { lot_name_product, name_product, price_product, quantity_available_product, date_in_product } = req.body;
    // I enclose everything in a try catch to control errors
    try {
        // I declare the create method with its respective definition of the object and my Product model in a variable taking into account the await
        let newProduct = await Product.create({
            lot_name_product,
            name_product,
            price_product,
            quantity_available_product,
            date_in_product,
            date_created_product: formattedTime
        },
            {
                // I define the variables that I am going to insert into the database so that there are no conflicts with the definition of the id or the number of columns
                fields: ['lot_name_product', 'name_product', 'price_product', 'quantity_available_product', 'date_in_product', 'date_created_product']
            });
        // valid if everything went well in the INSERT
        if (newProduct) {
            // logger control proccess
            logger.info('Product registed successfully');
            // I return the json with the message I want
            return res.json({
                message: 'Product registed successfully',
                data: newProduct
            });
        }
    } catch (e) {
        // logger control proccess
        logger.info('Error registerProduct: ' + e);
        // I return the status 500 and the message I want
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

// method to update a product
export async function updateProduct(req, res) {
    // logger control proccess
    logger.info('enter the endpoint updateProduct');
    // I enclose in a try catch to validate errors
    try {
        // I capture the parameter that comes in the req and the data that I want to update that comes in the body of the req
        const { id_product } = req.params;
        const { lot_name_product, name_product, price_product, quantity_available_product, date_in_product } = req.body;

        // I call and save the result of the findOne method, which is d sequelize
        const products = await Product.findAll({
            attributes: ['id_product', 'lot_name_product', 'name_product', 'price_product', 'quantity_available_product', 'date_in_product'],
            where: {
                id_product
            }
        });

        if (products.length > 0) {
            products.forEach(async products => {
                await products.update({
                    lot_name_product,
                    name_product,
                    price_product,
                    quantity_available_product,
                    date_in_product
                })
            });
        }
        // logger control proccess
        logger.info('Product updated successfully');
        // I return the json with the message I want
        return res.json({
            message: 'Product updated successfully',
            data: products
        });
    } catch (e) {
        // logger control proccess
        logger.info('Error updateProduct: ' + e);
        // I return the status 500 and the message I want
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

// method to delete a product
export async function deleteProduct(req, res) {
    // logger control proccess
    logger.info('enter the endpoint deleteProduct');
    // I enclose in a try catch to validate errors
    try {
        // I capture the parameter that comes in the req
        const { id_product } = req.params;
        // I call the sequelize method to eliminate the product, I save in a variable what the .destroy returns and the number of eliminations
        const deleteRowCount = await Product.destroy({
            where: {
                id_product
            }
        });
        // logger control proccess
        logger.info('Product deleted successfully');
        // I return the json with the message I want
        return res.json({
            message: 'Product deleted successfully',
            data: deleteRowCount
        });
    } catch (e) {
        // imprimo el errro en consola
        logger.info('Error deleteProduct, "Possibly it is because the product is in the purchasing tables": -----' + e);
        // I return the status 500 and the message I want
        res.status(500).json({
            message: 'Something goes wrong, Possibly it is because the product is in the purchasing tables',
            data: {}
        });
    }
}