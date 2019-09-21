'use strict'



const config = require('../config/config');
const logger = require('../logger/app.logger')


class UtilityDataManipulator {
    marge(arg1, arg2){
        let resultantArr = [];
        try{
            arg1.map(arg => {
                let projects =[];
                arg2.filter(project => project.userId == arg.id).map( p =>projects.push(p.id));
                arg.projects = projects
                resultantArr.push(arg);
            });
            return resultantArr;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UtilityDataManipulator();
