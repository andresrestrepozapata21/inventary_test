// I imported the Sequelize module and my custom sequelize module with the configuration and connection to the DB
import Sequelize from 'sequelize';
import { sequelize } from '../database/database.js';
import Purchase from './purchase.js';
// I define the model for the users table in a variable
const User = sequelize.define('users', {
    id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    first_name_user: {
        type: Sequelize.TEXT,
    },
    last_name_user: {
        type: Sequelize.TEXT,
    },
    phone_number_user: {
        type: Sequelize.TEXT,
    },
    email_user: {
        type: Sequelize.TEXT,
    },
    password_user: {
        type: Sequelize.TEXT,
    },
    last_login_user: {
        type: Sequelize.DATE,
    },
    date_created_user: {
        type: Sequelize.DATE,
    },
    flag_rol_user: {
        type: Sequelize.INTEGER,
    }
},
    {
        timestamps: false
    });
// I define the relationship between the user table and the purchases table
User.hasMany(Purchase, { foreignKey: 'fk_id_user_purchase', sourceKey: 'id_user' });
Purchase.belongsTo(User, { foreignKey: 'fk_id_user_purchase', sourceKey: 'id_user' });

// I export the users model
export default User;
