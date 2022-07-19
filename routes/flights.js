var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// GET /(index functionality) 
router.get('/', flightsCtrl.index);
// GET New Flights
router.get('/new',flightsCtrl.new);
// POST Flights
router.post('/', flightsCtrl.create);
//Show
router.get('/:id', flightsCtrl.show);
//Put update
//router.put('/')
module.exports = router;
