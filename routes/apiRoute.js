const router = require('express').Router();
const apiController = require('../controllers/apiController');
const sendAnimeController = require('../controllers/sendAnimeController');

console.log('FROM THE apirOUTER');
router.route('/')
    .get(
        apiController.getAnime,
        sendAnimeController.sendAnime,
        sendAnimeController.sendErrResp
    )

module.exports = router;