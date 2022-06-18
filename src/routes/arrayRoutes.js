const express = require('express');
const { getPetrolPrice } = require('../controllers/apiController');
const {
  getDashedNumber,
  binarySearch,
} = require('../controllers/arrayController');
const router = express.Router();
router.route('/getDashedNumber').get(getDashedNumber);
router.route('/getPetrolPrice').get(getPetrolPrice);
router.route('/bsearch').post(binarySearch);
module.exports = router;
