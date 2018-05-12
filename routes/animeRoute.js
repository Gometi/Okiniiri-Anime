const router = require('express').Router();
const animeController = require('../controllers/animeController');
const sendAnimeController = require('../controllers/sendAnimeController');

router.route('/')
    .get(animeController.getAll, sendAnimeController.sendAnime, sendAnimeController.sendErrResp )
    .post(animeController.create, sendAnimeController.sendAnime, sendAnimeController.sendErrResp)









module.exports = router;