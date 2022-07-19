const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

//post 
router.post('/flights/:id/destinations', destinationsCtrl.create);
//update
router.put('/flights/:id/destinations', destinationsCtrl.update);

module.exports = router;