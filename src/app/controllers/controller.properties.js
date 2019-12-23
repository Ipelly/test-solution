'use strict'

const cron = require('cron');
const config = require('../../config/config');
const logger = require('../../logger/app.logger')
const dataReaderService = require('../services/service.data.reader');
const dataWriterService = require('../services/service.data.writer');
const notificationHelper = require('../../utility/notificationhelper/utility.notification.helper')
const dateFormat = require('dateformat');


class ControllerProperties {

    async getProperties(req, res){
        try{
            let result = await dataReaderService.fetchProperties(config.api_endpoints.endpoint);
            result.properties.map(res => {
                switch (res.type){
                    case 'home' :
                        if(res.dynamicDisplayPrice > res.basePrice) {
                            notificationHelper.getHelper(res.type).send(`Dynamic Price is less`,`Type :${res.type} Address :${res.address}, dynamic price (${res.dynamicDisplayPrice}) is higher then base price(${res.basePrice}).`);
                        }
                        break;
                    case 'apartment' :
                        if(res.dynamicDisplayPrice < res.basePrice) {
                            notificationHelper.getHelper(res.type).send(`Dynamic Price is high`,`Type :${res.type} Address :${res.address}, dynamic price (${res.dynamicDisplayPrice}) is less then base price(${res.basePrice}).`);
                        }
                        break;
                    default:
                }
                let qry = `INSERT INTO properties (id,type, dynamicDisplayPrice, basePrice, propdatetime) VALUES ('${res.id}','${res.type}',${res.dynamicDisplayPrice},${res.basePrice},'${dateFormat(new Date(), "dd-mmm-yy hh:mm:ss TT")}')`;
                dataWriterService.saveProperties(qry);
            })
            
            res.json({
                properties : result.properties
            })
        } catch (error) {
            logger.error(`ControllerDataReader - getProperties: Not able to get the response. ${error}`)
            res.status(500).json(error);
        }
    }

    async watchProperties(req, res){

        try{
            let cronJob = cron.job("* * * * * *", () =>{
                dataReaderService.fetchProperties(config.api_endpoints.endpoint).then((result)=>{
                    result.properties.map(res => {
                        switch (res.type){
                            case 'home' :
                                if(res.dynamicDisplayPrice > res.basePrice) {
                                    notificationHelper.getHelper(res.type).send(`Dynamic Price is less`,`Type :${res.type} Address :${res.address}, dynamic price (${res.dynamicDisplayPrice}) is higher then base price(${res.basePrice}).`);
                                }
                                break;
                            case 'apartment' :
                                if(res.dynamicDisplayPrice < res.basePrice) {
                                    notificationHelper.getHelper(res.type).send(`Dynamic Price is high`,`Type :${res.type} Address :${res.address}, dynamic price (${res.dynamicDisplayPrice}) is less then base price(${res.basePrice}).`);
                                }
                                break;
                            default:
                        }
                        let qry = `INSERT INTO properties (id,type, dynamicDisplayPrice, basePrice, propdatetime) VALUES ('${res.id}','${res.type}',${res.dynamicDisplayPrice},${res.basePrice},'${dateFormat(new Date(), "dd-mmm-yy hh:mm:ss TT")}')`;
                        dataWriterService.saveProperties(qry);
                    })
                }).catch( error =>{
                    cronJob.stop();
                    logger.error(`ControllerDataReader - watchProperties: Not able to get the response. ${error}`)
                    res.status(500).json(error);
                })
            });
            cronJob.start();
            res.json({
                'Message' : `API will keep pinging to the  domio properties server to get price update and will notify the admin if there is any price changes`
            })
        } catch(error) {
            logger.error(`ControllerDataReader - watchProperties: Not able to get the response. ${error}`)
            res.status(500).json(error);
        }
    }
}


module.exports = new ControllerProperties();