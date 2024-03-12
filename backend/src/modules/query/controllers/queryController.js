const queryService = require('../services/queryservices.js');
const {successResponse, errorResponse, SUCCESS_MESSAGES, statusCodes, ERROR_MESSAGES} = require('../../../../constants/constants');
let vis = 1;
const getQuery = async (req, res) => {
    // console.log("yooyo")
    try {
        let { query} = req.body;
        console.log(query);
        // console.log(req)
        console.log(vis,"visitors")
        vis +=1;
        if(query === ""){
            query = "Why should we hire you as software engineer in our company "
        }
        const message = await queryService.sendQuery(query);
        const data = {
            message: message
        }
        return successResponse({
            res,
            data: data,
            message: SUCCESS_MESSAGES.USER_QUERY_SUCCESS,
        })
    }
    catch (error) {
        return errorResponse({
            res,
            message: error.message,
        })
    }
}
const keepAlive= async (req,res) => {
    // console.log("yooyo")
    try {
        console.log("Alive");
        return successResponse({
            res,
            message: SUCCESS_MESSAGES.USER_QUERY_SUCCESS,
        })
    }
    catch (error) {
        return errorResponse({
            res,
            message: error.message,
        })
    }
}


module.exports = {
    getQuery,
    keepAlive,
    
}