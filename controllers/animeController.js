const animeDb = require('../models/anime');

function getAll(req, res, next) {
  animeDb.getAll()
    .then(data => {
      res.locals.animes = (data);
      next();
    })
    .catch(next);
}

function getOne(req, res, next) {
	animeDb.getOne()
		.then(data => {
			res.locals.anime = (data);
			next();
		})
		.catch(next);
}
// post method for reviews
function createReview(req, res, next){
	animeDb.createReview(req.body)
			.then(data => {
			res.locals.review = data;
			next();
	})
	.catch(next);
}

// put method for reviews
function updateReview(req, res, next){
	animeDb.updateReview(req.params.id)
		.then(data => {
			res.locals.anime = data;
			next();
		})
		.catch(next);
}


module.exports = {
	getAll,
	getOne,
	updateReview
}