'use strict';
const { successResponse, errorResponse, SUCCESS_MESSAGES, statusCodes, ERROR_MESSAGES, VALIDATION_MESSAGES } = require('../../constants/constants');
const validateUser = async (req, res, next) => {
    try {
        const { name, email} = req.body;
        console.log(req.body);
        const nameRegex = /^[a-zA-Z\s'-.]+$/;
        const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const validName = (name && typeof(name) === 'string' && nameRegex.test(name));
        if (!validName) {
            throw {
                code: statusCodes.STATUS_CODE_VALIDATION_FAILED,
                message: VALIDATION_MESSAGES.INVALID_NAME,
            };
        }
        const validEmail = (email && typeof(email) === 'string' && emailRegex.test(email));
        if (!validEmail) {
            throw {
                code: statusCodes.STATUS_CODE_VALIDATION_FAILED,
                message: VALIDATION_MESSAGES.INVALID_DATA,
            };
        }
        return next();
    } catch (error) {
        return errorResponse({
            res,
            error,
        });
    }
}
module.exports = {
   validateUser,
};
