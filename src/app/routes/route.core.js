'use strict'

const express = require('express');
const properitesController = require('../controllers/controller.properties');
let router = express.Router();


router.get('/properties',properitesController.getProperties);
router.get('/watch',properitesController.watchProperties);
router.get('/api',(req, res) =>{
    res.send('OK'); 
})

module.exports = router;