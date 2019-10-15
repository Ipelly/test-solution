'use strict'

const express = require('express');
const dataReaderController = require('../controllers/controller.data.reader');
let router = express.Router();


router.get('/users',dataReaderController.getData);
router.get('/api',(req, res) =>{
    res.send('OK'); 
})

module.exports = router;