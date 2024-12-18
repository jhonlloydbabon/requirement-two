const express = require('express');
const router = express.Router();
const userServices = require('../services/userService');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads')); 
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); 
    }
});
const upload = multer({ storage });

router.use('/uploads', express.static(path.join(__dirname, '../uploads')));

router.post('/', upload.single('file'), userServices.addUser);
router.get('/', userServices.fetchUser);

module.exports = router;