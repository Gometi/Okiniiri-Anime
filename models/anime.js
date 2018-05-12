const animeDb = require('../config/connection');

function getAll() {
    return animeDb.any('SELECT * FROM library');
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
       INSERT INTO library (anime_id, anime_name)
        VALUES ($/anime_id/, $/anime_name/)
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