const rp = require('request-promise');
const ALLOWED_METHODS = ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'];
const { url, statusCodes } = require('../../../constants/constants.js')
async function sendRequest(params) {
    const {
        method, headers, uri, body, query, json = true,
    } = params;
    const options = {
        method,
        uri,
        headers,
        body,
        qs: query,
        json,
    };
    return rp(options);
}
async function requestAsync(params) {
    const {
        method, cache = false, prefix = '',
    } = params;

    if (!ALLOWED_METHODS.includes(method.toUpperCase())) {
        throw new Error({ message: `Invalid http method, allowed methods are ${ALLOWED_METHODS}` });
    }
    const response = await sendRequest(params);
    return response;
}
/* Hits an API asynchronously, use cache=true with additional params to cache the response.
* @param {String} uri
* @param {Object} body
* @param {Object} query
* @param {Object} headers
* @param {Boolean} cache
* @param {Boolean} json
* @param {String} prefix
* @param {Number} expiryTimeInSeconds
*/
async function getAsync(params) {
    return requestAsync({ method: 'GET', ...params });
}
const getAsyncACC = async ({
    api,
    query,
    prefix,
    json = true,
    headers,
}) => {
    const data = await getAsync({
        uri: `${url.accountingProvider_service}${api}`,
        json,
        headers,
        query,
        prefix,
    });
    if ((data.code && data.code !== 200) || (data.statusCode && data.statusCode !== 200)) {
        console.log("APS get error", data);
        throw new Error({ message: 'Failed to get data from APS', data });
    }
    console.log(data)
    return data;
};
module.exports = {
    getAsyncACC,
}