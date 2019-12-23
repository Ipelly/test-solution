'use strict'

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const database = require('../../db/db.sqlite')
const logger = require('../../logger/app.logger')

class ServiceDataWriter {
    saveProperties(qry){
        try {
            database.save(qry);
        } catch(error) {
            throw error;
        }
    }
}

module.exports = new ServiceDataWriter();


