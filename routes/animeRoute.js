const router = require('express').Router();
const controller = require('../controllers/animeController');

console.log('FROM THE rOUTER');
router.route('/')
.get(controller.getAll)









module.exports = router;