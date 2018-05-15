const animeDb = require('../config/connection');

function getAll(id) {
    return animeDb.any(`SELECT * FROM library WHERE user_id = $1`, id );
}

// getting one 
function getOne(id) {
    return qp = animeDb.one(`
        SELECT * FROM library
        WHERE anime_id = $1
    `, id);
}

// creating or saving one 
function create(anime) {
    return qp = animeDb.one(`
       INSERT INTO library (anime_id, anime_name, user_id)
        VALUES ($/anime_id/, $/anime_name/, $/user_id/)
        RETURNING *
       `, anime);
}

// deleting 
function destroy(id) {
    return queryPromise = animeDb.none(`
        DELETE FROM library WHERE anime_id = $1
    `, id);
}


module.exports = {
    getAll,
    getOne,
    create,
    destroy
};