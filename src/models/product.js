// I imported the Sequelize module and my custom sequelize module with the configuration and connection to the DB
import Sequelize from 'sequelize';
import { sequelize } from '../database/database.js';
import PurchaseDetail from './purchaseDetail.js';
// I define the model for the users table in a variable
const Product = sequelize.define('products', {
    id_product: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    lot_name_product: {
        type: Sequelize.TEXT,
    },
    name_product: {
        type: Sequelize.TEXT,
    },
    price_product: {
        type: Sequelize.INTEGER,
    },
    quantity_available_product: {
        type: Sequelize.INTEGER,
    },
    date_in_product: {
        type: Sequelize.DATE,
    },
    date_created_product: {
        type: Sequelize.DATE,
    }
},
    {
        timestamps: false
    });
// I define the relationship between the user table and the purchases table
Product.hasMany(PurchaseDetail, { foreignKey: 'fk_id_product_purchasedetail', sourceKey: 'id_product' });
PurchaseDetail.belongsTo(Product, { foreignKey: 'fk_id_product_purchasedetail', sourceKey: 'id_product' });
// I export the users model
export default Product;
