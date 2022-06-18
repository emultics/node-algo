const express = require('express');
const { getPetrolPrice } = require('../controllers/apiController');
const { getDashedNumber } = require('../controllers/arrayController');
const router = express.Router();
router.route('/getDashedNumber').get(getDashedNumber);
router.route('/getPetrolPrice').get(getPetrolPrice);
module.exports = router;
