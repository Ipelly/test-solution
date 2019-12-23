
'use strict'
const nodemailer = require('nodemailer');
const config = require('../../config/config');
const logger = require('../../logger/app.logger');

    let transporter = nodemailer.createTransport({
        service: config.admin.smtp_server,
        auth: {
            user:  config.admin.user,
            pass:  config.admin.password
        }
    });
  
    

class EmailSender {
    send(subject, body){ 
        let mailOptions = {
            from: config.admin.user,
            to: config.admin.to,
            subject: subject,
            text: body        
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
              throw error;
            } else {
              console.log('Email sent: ' + info.response);
            }
        });
    } 
}

   
module.exports = new EmailSender();

