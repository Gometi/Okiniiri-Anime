const user = require('../models/users');


function register(req, res, next) {
    user.register(req.body)
        .then(data => {
            res.locals.quote = data;
            next();
        })
        .catch(next);
}



module.exports = {
    register
}