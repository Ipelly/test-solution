'use strict'

const sqlite3 = require('sqlite3').verbose()
const config = require('../config/config');
const logger = require('../logger/app.logger');

const DBSOURCE = config.dbVars.db_source;

class SQLiteDB {
    constructor(){
        this.db = new sqlite3.Database(DBSOURCE, (error) => {
            if (error) {
                logger.error(`SQLiteDB - init : Error :  ${error.message}.`);
                throw error;
            } else logger.debug(`SQLiteDB : Connected to the SQlite database.`);
        });
        this.init();
        this.getDB();
    }

    init(){ 
        this.db.run(`CREATE TABLE owners (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name text, 
                    email text UNIQUE, 
                    password text,
                    CONSTRAINT email_unique UNIQUE (email)
                )`, (error) => {
                        if (error) {
                            logger.error(`SQLiteDB - init : Error :  ${error.message}.`);
                            throw error; 
                        } else logger.debug(`SQLiteDB : Created USER table sucessfully.`);     
                    }
        ); 
        this.db.run(`CREATE TABLE properties (
            id text,
            type text, 
            dynamicDisplayPrice NUMERIC, 
            basePrice NUMERIC, 
            propdatetime date
        )`, (error) => {
                if (error) {
                    logger.error(`SQLiteDB - init : Error (CREATE TABLE properties):  ${error.message}.`);
                    throw error;
                } else logger.debug(`SQLiteDB : Created properties table sucessfully.`);     
            }
        );  
    } 

    save(query){
        this.db.run( query,(error) => {
            if (error) {
                logger.error(`SQLiteDB - save : Error :  ${error.message}.`);
                throw error;
            } else logger.debug(`SQLiteDB : Saves properties sucessfully.`);     
        });   
    }

    getDB(){
        return this.db;
    }
}

   
module.exports = new SQLiteDB();

