'use strict'

const config = require('../../config/config');
const logger = require('../../logger/app.logger')
const dataReaderService = require('../services/service.data.reader');

class ControllerDataReader {
    async getData(req, res){
        try{
            let places = await dataReaderService.fetchPlaceNearBy(req.query);
            res.json({
                places : places.results,
                'number of locations' : places.results.length
            })
        } catch (error) {
            logger.error(`ControllerDataReader - GetData: Not able to get the response. ${error}`)
            res.status(500).json(error);
        }
    }
}

module.exports = new ControllerDataReader();