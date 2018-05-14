const router = require('express').Router();
const controller = require('../controllers/animeController');

console.log('FROM THE rOUTER');

router.route('/')
	.get(controller.getAll, sendResponse.sendOkResp, sendResponse.sendErrResp)
	.post(animeController.create, sendResponse.sendOkResp, sendResponse.sendErrResp)

router.route('/anime/:id')
	.delete(animeController.getOne, sendResponse.sendOkResp, sendResponse.sendErrResp)
	.post(animeController.createReview, sendResponse.sendOkResp, sendResponse.sendErrResp)
	.put(animeController.updateReview, sendResponse.sendOkResp, sendResponse.sendErrResp)





module.exports = router;