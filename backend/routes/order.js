const express = require('express');
const { route } = require('./product');
const { createOrder } = require('../controllers/orderController');
const router = express.Router();


router.route('/order').post(createOrder);

module.exports = router;