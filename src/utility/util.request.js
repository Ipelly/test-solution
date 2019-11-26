'use strict'


const url = require('url');
const rquestproNative = require('request-promise-native');
const config = require('../config/config');
const logger = require('../logger/app.logger')
const resError = require('../errors/error.response')


class UtilityRequest {
    async get(query){
        try{
            query.key = config.api_endpoints.google_api_key;
            let urlObject={ 
                protocol: config.api_endpoints.google_protocall, 
                hostname: config.api_endpoints.google_hostname,
                pathname: config.api_endpoints.google_place_endpoint, 
                query
            } 
            let options = {
                method : 'GET',
                json : true,
                url : url.format(urlObject)
            }
            return await rquestproNative(options);
        } catch (error) {
            logger.error(`UtilityRequest - Get : Error : ${error.message}`)
            throw new resError(error);
        }
    }

    async post(){}
}

 module.exports = new UtilityRequest();

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?
//     location=-33.8670522,151.1957362&
//     radius=500&
//     name=harbour&
//     types=food&
//     key=AIzaSyAdAnwAfMAEDU3igUPKq_v8QrapgzyNHT4
