const express = require('express');
const router = express.Router();
const customerServices = require('../services/customerService');

router.get('/',customerServices.addCompany);

module.exports = router;