const express = require('express');
const router = express.Router();
const services = require('../services/companyUserService');

router.post('/', services.addUserCompany);
router.get('/', services.fetchUserCompany);

module.exports = router;