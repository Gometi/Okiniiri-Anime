const animeDb = require('../models/anime');

function getAll(req, res, next) {
    animeDb.getAll()
        .then(data => {
            console.log(data);
            next();
        })
        .catch(next);
}

module.exports = {
    getAll
}
