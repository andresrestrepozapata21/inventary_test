// I imported the Sequelize module and my custom sequelize module with the configuration and connection to the DB
import Sequelize from 'sequelize';
import { sequelize } from '../database/database.js';

// I define the model for the users table in a variable
const PurchaseDetail = sequelize.define('purchasesdetails', {
    id_purchasesdetail: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    quantity_product_purchasedetail: {
        type: Sequelize.INTEGER,
    },
    date_created_purchasedetailt: {
        type: Sequelize.DATE,
    },
    fk_id_purchase_purchasedetail: {
        type: Sequelize.INTEGER,
    },
    fk_id_product_purchasedetail: {
        type: Sequelize.INTEGER,
    }
},
    {
        timestamps: false
    });

// I export the users model
export default PurchaseDetail;
