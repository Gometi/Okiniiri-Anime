const user = require('../models/users');


function register(req, res, next) {
    console.log('register controller')
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