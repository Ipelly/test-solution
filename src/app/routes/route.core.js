'use strict'

const express = require('express');
const stockController = require('../controllers/controller.stocks');
let router = express.Router();


router.get('/stock',stockController.getStocks);
router.get('/api',(req, res) =>{
    res.send('OK'); 
})

module.exports = router;