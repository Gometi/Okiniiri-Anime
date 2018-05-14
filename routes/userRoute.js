const router = require('express').Router();

const registerController = require('../controllers/registerController');
const sendResponse = require('../controllers/sendResponse');

router.route('/')
    .post(registerController.register, sendResponse.sendOkResp, sendResponse.sendErrResp)


module.exports = router;