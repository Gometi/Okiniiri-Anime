const animeDb = require('../models/anime');

function getAll(req, res, next) {
	console.log(req.params.id,'controller')
    animeDb.getAll(req.params.id)
        .then(data => {
            res.locals.animes = data;
            next();
        })
        .catch(next);
}


function create(req, res, next) {
	animeDb.create(req.body)
		.then(data => {
			res.locals.anime = data;
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
	create,
	destroy
}
