const SUCCESS_MESSAGES = {
    CONNECTION_SUCCESS: 'Successfully connected to database',
    SERVER_LISTENING: 'Server is listening on port',
    SERVER_SUCCESS: 'Server started successfully',
    DEFAULT_SUCCESS: 'Success',
    DATABASE_CONNECTED:'Connected to Mongodb Database',
    USER_ADDED: 'User added successfully',
    USER_QUERY_SUCCESS: 'User QUERY successfull',
    APPLICATION_ADDED :'Application details added Succesfully',
    APPLICATION_DELETED :'Application details deleted Succesfully',
    ALL_APPLICATION_DETAILS_FETCHED:'All Application details fetched Succesfully',
    APPLICATION_DETAILS_FETCHED:'Application details fetched Succesfully',
    APPLICATION_UPDATED :'Application details updated Succesfully'
};

const ERROR_MESSAGES = {
    CONNECTION_ERROR: 'Connection encountered an error:',
    SERVER_ERROR: 'Server encountered an error',
    ROUTE_ERROR: 'Route not found',
    EMAIL_ERROR: 'Email already exist, try with a new one',
    APPLICATION_ERROR: 'APPLICATION already exists',
    EMAIL_PASSWORD_ERROR:'Incorrect Email or password',
    EMAIL_NOT_FOUND: 'Email not found',
    PASSWORD_ERROR: 'Incorrect password',
    LOGIN_ERROR: 'Not able to login, try again',
    AUTH_ERROR: 'Authorization error, please login first',
    FETCH_DATA_ERROR: 'Not able to fetch all Application Details ',
    SINGLE_FETCH_DATA_ERROR: 'Not able to fetch  Application Details ',
    FORBIDDEN_ERROR: 'Forbidden',
    NEW_ENTRIES_ERROR: 'Not able to add Application Details',
    UPDATE_ERROR: 'Not able to update Application Details',
    USER_ADD_ERROR: 'Not able to add User Details',
    ADD_ERROR: 'Not able to add Application Details',
    DELETED_ERROR: 'Not able to delete Application Details',
    AUTHENTICTION_ERROR: 'Not able to authenticate user Details',
    REQUEST_FAILED: 'Unable to process request',
    REQUEST_AUTHENTICATION_FAILED: 'Authentication error',
    
};

const VALIDATION_MESSAGES = {
    INVALID_ID: 'Invalid Id',
    INVALID_NAME: 'Invalid Name',
    INVALID_EMAIL: 'Invalid email',

}
const statusCodes = {
    STATUS_CODE_SUCCESS: 200,
    STATUS_CODE_INVALID_FORMAT: 400,
    STATUS_CODE_VALIDATION_FAILED: 422,
    STATUS_CODE_DATA_NOT_FOUND: 404,
    STATUS_CODE_FAILURE: 500,
    STATUS_CODE_UNAUTHORIZED: 401,
    STATUS_CODE_FORBIDDEN: 403,
};
const url = {
    accountingProvider_service: "http://localhost:8082/"
}

const successResponse = ({
    req,
    res,
    data = {},
    code = statusCodes.STATUS_CODE_SUCCESS,
    message = SUCCESS_MESSAGES.DEFAULT_SUCCESS,
}) => res.send({ data, code, message });

const errorResponse = ({
    req,
    res,
    error = null,
    code = statusCodes.STATUS_CODE_FAILURE,
    message = ERROR_MESSAGES.SERVER_ERROR,
}) => res.send({ error, code, message });

module.exports = {
    statusCodes,
    url,
    errorResponse,
    SUCCESS_MESSAGES, 
    ERROR_MESSAGES,
    successResponse,
    VALIDATION_MESSAGES,
};