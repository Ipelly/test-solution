'use strict'


const rquestproNative = require('request-promise-native');
const config = require('../config/config');
const logger = require('../logger/app.logger')
const resError = require('../errors/error.response')


class UtilityRequest {
    async get(agrs){
        try{
            let options ={
                method : 'GET',
                json : true,
                url : agrs.path
            }
            return await rquestproNative(options);
        } catch (error) {
            logger.error(`UtilityRequest - Get : URL : ${agrs.path}, Error : ${error.message}`)
            throw new resError(error);
        }
    }
    async post(){
        
    }
}

module.exports = new UtilityRequest();
