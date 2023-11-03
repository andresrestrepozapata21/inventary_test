// I import the modules that need to be customized like the models or installed with npm
import User from '../models/user.js';
import moment from 'moment-timezone';
import logger from '../utils/logger.js';
// capture the exact time in my time zone using the moment-timezone module, I do this capture outside the methods to reuse this variable
const bogotaTime = moment.tz('America/Bogota');
const formattedTime = bogotaTime.format('YYYY-MM-DD HH:mm:ss');

export async function login(req, res) {
    // logger control proccess
    logger.info('enter the endpoint login');
    try {
        // capture the id that comes in the parameters of the req
        const { email_user, password_user } = req.body;
        // I call and save the result of the findAll method, which is d sequelize
        const login = await User.findAll({
            where: {
                email_user,
                password_user
            },
            attributes: ['id_user', 'email_user', 'flag_rol_user', 'last_login_user']
        });
        // I validate login exist
        if (login.length > 0) {
            // I go through the login data that I obtained and send the lastlogin to be updated
            login.forEach(async login => {
                await login.update({
                    last_login_user: formattedTime
                });
            });
            // logger control proccess
            logger.info('correct credentials, seccion iniciada');
            // The user exists and the credentials are correct
            res.json({
                message: 'Successful login',
                data: login
            });
        } else {
            // logger control proccess
            logger.info('Incorrect credentials');
            // The credentials are incorrect
            res.status(401).json({ message: 'Incorrect credentials' });
        }
    } catch (e) {
        // logger control proccess
        logger.info('Error Login: ' + e);
        // I return the status 500 and the message I want
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}