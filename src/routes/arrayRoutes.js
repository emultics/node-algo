const express = require('express');
const { getPetrolPrice } = require('../controllers/apiController');
const {
  getDashedNumber, bSearch, BubbleSort, Fibonacci, countDigits,
} = require('../controllers/arrayController');
const router = express.Router();
router.route('/getDashedNumber').get(getDashedNumber);
router.route('/getPetrolPrice').get(getPetrolPrice);
router.route('/bsearch').post(bSearch);
router.route('/bubbleSort').post(BubbleSort);
router.route('/fibonacci').post(Fibonacci);
router.route('/countdigits').post(countDigits);
module.exports = router;
