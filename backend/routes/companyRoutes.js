const express = require('express');
const router = express.Router();
const companyServices = require('../services/companyService');

router.post('/',companyServices.addCompany);
router.get('/',companyServices.fetchCompany);

module.exports = router;