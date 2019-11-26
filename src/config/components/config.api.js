'use strict'


const joi = require('joi');
const config = require('config-yml');
const configVars = require('./config.common');


const envVarsSchema = joi.object({
    GOOGLE_PROTOCALL : joi.string().required(),
    GOOGLE_HOSTNAME : joi.string().required(),
    GOOGLE_PLACE_ENDPOINT : joi.string().required(),
    GOOGLE_API_KEY : joi.string().required()
}).unknown().required();


const {
    error,
    value : envVars
} = joi.validate(configVars.getConfigVars().api, envVarsSchema);

if(error) {
    console.error(`API Endpoints : Config Varidation Error : ${error.message}`);
    process.exit(1);
}

let envVariables = {
    google_protocall : envVars.GOOGLE_PROTOCALL,
    google_hostname : envVars.GOOGLE_HOSTNAME,
    google_place_endpoint : envVars.GOOGLE_PLACE_ENDPOINT,
    google_api_key : envVars.GOOGLE_API_KEY
}

module.exports = envVariables;