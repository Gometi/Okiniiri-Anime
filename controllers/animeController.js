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
	animeDb.getOne(id)
		.then(data => {
			console.log(data);
			next();
		})
		.catch(next);
}
module.exports = {
	getAll,
	getOne
}
