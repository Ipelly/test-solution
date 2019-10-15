
'use strict'

const config = require('config-yml');

function getConfigVars() {
    let configVars;
    switch (process.env.ENV_NAME.trim()) {
        case 'development':
            configVars = config.development;
            break;
        case 'test':
            configVars = config.test;
            break;
        case 'production':
            configVars = config.production;
            break;
        default:
            console.log('Config Common : Node_Env variable has not been set up. Node_ENV : ' + process.env.ENV_NAME + '.')
    }
    return configVars;
}

let configVars = {
    getConfigVars
}

module.exports = configVars;