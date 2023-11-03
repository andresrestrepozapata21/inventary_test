// I imported the Sequelize module and my custom sequelize module with the configuration and connection to the DB
import Sequelize from 'sequelize';
import { sequelize } from '../database/database.js';
import PurchaseDetail from '../models/purchaseDetail.js';

// I define the model for the purchases table in a variable
const Purchase = sequelize.define('purchases', {
    id_purchase: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    total_price_purchase: {
        type: Sequelize.INTEGER,
    },
    date_created_purchase: {
        type: Sequelize.DATE,
    },
    fk_id_user_purchase: {
        type: Sequelize.INTEGER,
    }
}, 
{
    timestamps: false
});
// I define the relationship between the user table and the purchases table
Purchase.hasMany(PurchaseDetail, { foreignKey: 'fk_id_purchase_purchasedetail', sourceKey: 'id_purchase' });
PurchaseDetail.belongsTo(Purchase, { foreignKey: 'fk_id_purchase_purchasedetail', sourceKey: 'id_purchase' });

// I export the purchases model
export default Purchase;
