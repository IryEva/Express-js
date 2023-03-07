const express = require('express');
const router = express.Router();
const contactUsController = require('../controllers/contactus');


router.get('/contactUs',contactUsController.contactUs);

//router.post('/success',contactusController.success);

module.exports=router;
