'use strict'
//const nodemailer = require('nodemailer');
//const logger = require('../logger/app.logger');
const emailSender = require('./utility.email.sender');
  
    

class NotificationHelper {
    constructor(){

    }
    getHelper(type){
        let helper = null;
        switch (type){
            case 'home' :
                helper = emailSender;
                break;
            case 'apartment' :
                helper = emailSender;
                break;
            default:
                helper = emailSender;
        }
        return helper;
    }
}

   
module.exports = new NotificationHelper();

