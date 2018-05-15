const router = require('express').Router();
const reviewsController = require('../controllers/reviewsController');
const sendResponse = require('../controllers/sendResponse');

router.route('/')
    .get(reviewsController.getReview, sendResponse.sendOkResp, sendResponse.sendErrResp)
    .post(reviewsController.create, sendResponse.sendOkResp, sendResponse.sendErrResp)


router.route('/user_review')
    .post(reviewsController.getReview, sendResponse.sendOkResp, sendResponse.sendErrResp)




    module.exports = router;