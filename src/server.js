'use strict'

const http = require('http');
const app = require('./app/app');
const config = require('./config/config');
const logger = require('./logger/app.logger')
const database = require('./db/db.sqlite')
const server = http.createServer(app);

const port = process.env.PORT || 8000;
app.set('port', port);

//database.init();
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val){
    let port = (typeof val === 'string') ? parseInt(val,10) : val;
    
    if(isNaN(port))         return val;
    else if ( port >= 0)    return port;
    else                    return false;
}

function onError(error) {
    if(error.syscall !== 'listen') throw error;

    let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port' + port;

    switch (error.code) {
        case 'EACCES' :
            console.error(`${bind} require elevated privileges.`);
            process.exit(1);
            break;
        case 'EADDRINUSE' :
            console.error(`${bind} already in use.`);
            process.exit(1);
            break;
        default : 
            throw error;
    }   
}

function onListening() {
    let addr = server.address();
    let bind = (typeof port === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    logger.debug(`Process ID : ${process.pid}, Application Listening on ${port}.`);
}


module.exports = server;

      

