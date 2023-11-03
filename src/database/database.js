// importo el modulo de Sequelize
import Sequelize from 'sequelize';
// defino y exporto en una constante la instancia del Sequelize con la configuarion de la BD en este caso postgres
export const sequelize = new Sequelize(
    'postgres',
    'postgres',
    'andrello',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
);