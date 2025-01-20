const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/ApiController');

// Define routes

router.get('/api/sports-data-2', ApiController.getAllData);


module.exports = router;