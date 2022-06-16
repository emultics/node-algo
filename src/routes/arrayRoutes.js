const express = require('express');
const { getDashedNumber } = require('../controllers/arrayController');
const router = express.Router();
router.route('/getDashedNumber').get(getDashedNumber);

module.exports = router;
