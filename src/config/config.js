'use strict'


const evnVars = require('./components/config.env');
const logger = require('./components/config.logger');
const api_endpoints = require('./components/config.api');
const dbVars = require('./components/config.database');
const config = Object.assign(
    {}, evnVars, {logger}, {api_endpoints}, {dbVars}
);

module.exports = config;