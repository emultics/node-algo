const express = require('express');
const { getPetrolPrice } = require('../controllers/apiController');
const {
  getDashedNumber, bSearch,
} = require('../controllers/arrayController');
const router = express.Router();
router.route('/getDashedNumber').get(getDashedNumber);
router.route('/getPetrolPrice').get(getPetrolPrice);
router.route('/bsearch').post(bSearch);
module.exports = router;
