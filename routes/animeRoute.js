const router = require('express').Router();
const animeController = require('../controllers/animeController');
const sendResponse = require('../controllers/sendResponse');

router.route('/')
    .get(animeController.getAll, sendResponse.sendOkResp, sendResponse.sendErrResp )
    .post(animeController.create, sendResponse.sendOkResp, sendResponse.sendErrResp)

    router.route('/:id')
        .get(animeController.getAll, sendResponse.sendOkResp, sendResponse.sendErrResp)
        .delete(animeController.destroy, sendResponse.sendOkResp, sendResponse.sendErrResp)









module.exports = router;