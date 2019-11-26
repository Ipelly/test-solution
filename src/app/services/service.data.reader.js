'use strict'

const express = require('express');
const url = require('url');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const requestUtil = require('../../utility/util.request')
const logger = require('../../logger/app.logger')

class ServiceDataReader {
    async fetchPlaceNearBy(query){
     
        try {
            return await requestUtil.get(query);
        } catch(error) {
            throw error;
        }
    }
}

module.exports = new ServiceDataReader();


