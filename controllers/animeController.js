const animeDb = require('../models/anime');

function getAll(req, res, next) {
    animeDb.getAll()
        .then(data => {
            res.locals.animes = data;
            next();
        })
        .catch(next);
}

function getOne(req, res, next) {
	animeDb.getOne()
		.then(data => {
			res.locals.quote = data;
			next();
		})
		.catch(next);
}

function create(req, res, next) {
	animeDb.create(req.body)
		.then(data => {
			res.locals.quote = data;
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
