const animeDb = require('../models/anime');

function getAll(req, res, next) {
  animeDb.getAll()
    .then(data => {
      console.log(data);
      next();
    })
    .catch(next);
}

function getOne(req, res, next) {
	animeDb.getOne(id)
		.then(data => {
			console.log(data);
			next();
		})
		.catch(next);
}

function create(req, res, next) {
	animeDb.create(req.body)
		.then(data => {
			console.log(data);
			next();
		})
		.catch(next);
}

function destroy(req, res, next) {
	animeDb.destroy(req.params.id)
		.then(() => {
			next()
		})
		.catch(next);
}

module.exports = {
	getAll,
	getOne,
	create,
	destroy
}