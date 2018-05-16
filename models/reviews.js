const animeDb = require('../config/connection');

function getReview(review) {
    console.log('revi', review)
    return animeDb.any(`SELECT * FROM reviews WHERE anime_name = $/anime_name/ AND user_id = $/user_id/`, review);
}



// getting one 
function getOne(id) {
    return qp = animeDb.one(`
        SELECT * FROM library
        WHERE anime_id = $1
    `, id);
}

// creating or saving one 
function create(review) {
    return qp = animeDb.one(`
       INSERT INTO reviews (review, anime_name, user_name, user_id)
        VALUES ($/review/, $/anime_name/, $/user_name/, $/user_id/)
        RETURNING *
       `, review);
}

function update(review) {
    return qp = animeDb.any(`UPDATE reviews SET review = $/review/ WHERE anime_name = $/anime_name/ AND user_id = $/user_id/ RETURNING *
       `, review);
}

// deleting 
function destroy(id) {
    return queryPromise = animeDb.none(`
        DELETE FROM library WHERE anime_id = $1
    `, id);
}

module.exports = {
    create,
    getReview,
    update
}