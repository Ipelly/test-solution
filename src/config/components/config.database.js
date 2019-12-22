'use strict'


const joi = require('joi');
const config = require('config-yml');
const configVars = require('./config.common');


const envVarsSchema = joi.object({
    DB_SOURCE : joi.string()
}).unknown().required();


const {
    error,
    value : envVars
} = joi.validate(configVars.getConfigVars().database, envVarsSchema);

if(error) {
    console.error(`Database : Config Varidation Error : ${error.message}`);
    process.exit(1);
}

let envVariables = {
    db_source : envVars.DB_SOURCE
}

module.exports = envVariables;