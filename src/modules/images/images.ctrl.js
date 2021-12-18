const HttpStatus = require('http-status-codes');
const { logErrDetails } = require('../../helper/logger');
const { checkHealthMongoDb } = require('../../database-connections/db.mongo');
const { restHelper } = require('../../helper/rest');
const { config }                            = require('../../helper/config');
//Use the api  to retrieve the images. You will need to send a GET http call with the header x-api-key="api-key-efb189be-052e-4c1d-904b-68f52819e2ae"


/**
 *
 * @param req
 * @param res
 */
const getImages = async (req, res) => {
    const imagesRequest = {
        url: 'https://api.jonathanczyzyk.com/api/v1/images/small',
        method: 'GET',
        headers: {
            'x-api-key': "api-key-efb189be-052e-4c1d-904b-68f52819e2ae"
        }
        //query: null,
        //body: null,        
    }    
    const result = await restHelper.callRest(imagesRequest);
    res.json(        
        result
      );
};

module.exports = {
    getImages
};
