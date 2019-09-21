'use strict'

const express = require('express');
const dataReaderController = require('../controllers/controller.data.reader');
let router = express.Router();


router.get('/users',dataReaderController.getData)

module.exports = router;