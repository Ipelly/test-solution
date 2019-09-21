'use strict'


const joi = require('joi');
const config = require('config-yml');
const configVars = require('./config.common');


const envVarsSchema = joi.object({
    REGISTEREDUSERS : joi.string(),
    UNREGISTEREDUSERS : joi.string(),
    PROJECT_MEMBERSHIP : joi.string()
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
    registeredusers : envVars.REGISTEREDUSERS,
    un_registeredusers : envVars.UNREGISTEREDUSERS,
    project_memberships : envVars.PROJECT_MEMBERSHIP
}

module.exports = envVariables;