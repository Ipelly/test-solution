'use strict'

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const requestUtil = require('../../utility/util.request')
const logger = require('../../logger/app.logger')

class ServiceDataReader {
    async fetchRegisteredUsers(path){
        try {
            return await requestUtil.get({path});
        } catch(error) {
            throw error;
        }
    }

    async fetchUnregisteredUsers(path){
        try {
            return await requestUtil.get({path});
        } catch(error) {
            throw error;
        }
    }

    async fetchProjects(path){
        try {
            return await requestUtil.get({path});
        } catch(error) {
            throw error;
        }
    }

    async fetchStocks(path){
        try {
            return await requestUtil.get({path});
        } catch(error) {
            throw error;
        }
    }
}

module.exports = new ServiceDataReader();


