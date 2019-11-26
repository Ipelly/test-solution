'use strict'

const config = require('../../config/config');
const logger = require('../../logger/app.logger')
const dataReaderService = require('../services/service.data.reader');
const dataUtil = require('../../utility/util.data.manipulator')


class ControllerStocks {

    async getStocks(req, res){

        try{
            let symbol = req.query.symbol;
            
            let path = `${config.api_endpoints.ticket}${symbol}`;
            console.log(`path ${path}`);
            let stocks = await dataReaderService.fetchStocks(path);
            res.json({
                stocks
            })
        } catch (error) {
            logger.error(`ControllerDataReader - GetData: Not able to get the response. ${error}`)
            res.status(500).json(error);
        }
    }
}


module.exports = new ControllerStocks();