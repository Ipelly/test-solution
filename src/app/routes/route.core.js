'use strict'

const express = require('express');
const readerController = require('../controllers/controller.data.reader');
let router = express.Router();


router.get('/places',readerController.getData);
router.get('/api',(req, res) =>{
    res.send('OK'); 
})

module.exports = router;