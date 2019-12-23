'use strict'


const joi = require('joi');
const config = require('config-yml');

const configVars = require('./config.common');


const envVarsSchema = joi.object({
    SMTP_SERVER : joi.string(),
    USER : joi.string(),
    PASSWORD : joi.string(),
    TO : joi.string()
}).unknown().required();


const {
    error,
    value : envVars
} = joi.validate(configVars.getConfigVars().admin, envVarsSchema);

if(error) {
    console.error(`Admin : Config Varidation Error : ${error.message}`);
    process.exit(1);
}

let envVariables = {
    smtp_server : envVars.SMTP_SERVER,
    user : envVars.USER,
    password : envVars.PASSWORD,
    to : envVars.TO
}

module.exports = envVariables;