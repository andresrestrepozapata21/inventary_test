// I import the modules that need to be customized like the models or installed with npm
import User from '../models/user.js';
import moment from 'moment-timezone';
import logger from '../utils/logger.js';
// capture the exact time in my time zone using the moment-timezone module, I do this capture outside the methods to reuse this variable
const bogotaTime = moment.tz('America/Bogota');
const formattedTime = bogotaTime.format('YYYY-MM-DD HH:mm:ss');

// method to obtain all the users that I have in my database
export async function getUsers(req, res) {
    // logger control proccess
    logger.info('enter the endpoint GetUsers');
    try {
        // I call the findAll() method and save it in a variable
        const users = await User.findAll();
        // logger control proccess
        logger.info('Get List Users');
        // I return that variable in the response json
        res.json({
            data: users
        });
    } catch (e) {
        // logger control proccess
        logger.info('Error getUsers: ' + e);
        // I return the status 500 and the message I want
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}
// method to register the user
export async function registerUser(req, res) {
    // logger control proccess
    logger.info('enter the endpoint registerUser');
    // I save the variables that come to me in the request in variables.
    const { first_name_user, last_name_user, phone_number_user, email_user, password_user, flag_rol_user } = req.body;
    // I declare the create method with its respective definition of the object and my Product model in a variable taking into account the await
    try {
        let newUser = await User.create({
            first_name_user,
            last_name_user,
            phone_number_user,
            email_user,
            password_user,
            flag_rol_user,
            date_created_user: formattedTime
        },
            {
                // I define the variables that I am going to insert into the database so that there are no conflicts with the definition of the id or the number of columns
                fields: ['first_name_user', 'last_name_user', 'phone_number_user', 'email_user', 'password_user', 'flag_rol_user', 'date_created_user']
            });
        // valid if everything went well in the INSERT
        if (newUser) {
            // logger control proccess
            logger.info('User registed successfully');
            // I return the json with the message I want
            return res.json({
                message: 'User registed successfully',
                data: newUser
            });
        }
    } catch (e) {
        /// logger control proccess
        logger.info('Error registerUser: ' + e);
        // I return the status 500 and the message I want
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}