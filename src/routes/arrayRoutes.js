const express = require('express');
const { getPetrolPrice } = require('../controllers/apiController');
const {
  getDashedNumber, bSearch, BubbleSort,
} = require('../controllers/arrayController');
const router = express.Router();
router.route('/getDashedNumber').get(getDashedNumber);
router.route('/getPetrolPrice').get(getPetrolPrice);
router.route('/bsearch').post(bSearch);
router.route('/bubbleSort').post(BubbleSort);
module.exports = router;
