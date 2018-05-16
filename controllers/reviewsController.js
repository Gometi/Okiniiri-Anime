const animeDb = require('../models/reviews');


function create(req, res, next) {
    animeDb.create(req.body)
        .then(data => {
            res.locals.review = data;
            next();
        })
        .catch(next);
}

function update(req, res, next) {
    animeDb.update(req.body)
        .then(data => {
            res.locals.review = data;
            next();
        })
        .catch(next);
}

function getReview(req, res, next) {
    animeDb.getReview(req.body)
        .then(data => {
            console.log('data', data)
            res.json(data);
            
        })
        .catch(next);
}




module.exports = {
    create,
    getReview,
    update
}
