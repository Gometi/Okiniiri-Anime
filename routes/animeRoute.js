const router = require('express').Router();
const controller = require('../controllers/animeController');

console.log('FROM THE rOUTER');

router.route('/')
	.get(controller.getAll)

router.route('/anime/:id')
	.get(controller.getOne)






module.exports = router;