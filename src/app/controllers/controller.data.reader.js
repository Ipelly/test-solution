'use strict'

const config = require('../../config/config');
const logger = require('../../logger/app.logger')
const dataReaderService = require('../services/service.data.reader');
const dataUtil = require('../../utility/util.data.manipulator')

class ControllerDataReader {
    async getData(req, res){
        try{
            let regUers = await dataReaderService.fetchRegisteredUsers(config.api_endpoints.registeredusers);
            let unregUers = await dataReaderService.fetchUnregisteredUsers(config.api_endpoints.un_registeredusers);
            let allProject = await dataReaderService.fetchProjects(config.api_endpoints.project_memberships);
            let users = [...regUers, ...unregUers];
            let userWithProject = dataUtil.marge(users,allProject);

            res.json({
                userWithProject
            })
        } catch (error) {
            logger.error(` ControllerDataReader - GetData: Not able to get the response. ${error}`)
            res.status(500).json(error);
        }
    }

    readAll() { 
        const promises = [];
        promises.push(dataReaderService.getRegisteredUsers(config.api_endpoints.registeredusers));
        promises.push(dataReaderService.getUnregisteredUsers(config.api_endpoints.un_registeredusers));
        promises.push(dataReaderService.getProjects(config.api_endpoints.project_memberships));
        
        Promise.all(promises.map(write)).then(() => console.log("all done"));
      }
}

module.exports = new ControllerDataReader();