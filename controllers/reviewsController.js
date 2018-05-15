const animeDb = require('../models/reviews');


function create(req, res, next) {
    animeDb.create(req.body)
        .then(data => {
            res.locals.review = data;
            next();
        })
        .catch(next);
}

function getReview(req, res, next) {
    animeDb.getReview(req.body)
        .then(data => {
            res.json(data);
            next();
        })
        .catch(next);
}
function getUserReview(params) {
    
}



module.exports = {
    create,
    getReview,
    getUserReview
}
