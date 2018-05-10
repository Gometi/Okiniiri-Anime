const db =require('../config/connection');

// getting all 
function getAll() {
   return  db.any('SELECT * FROM library');
}

// getting one 
function getOne(id){
    return qp = db.one(`
        SELECT * FROM library
        WHERE id = $1
    `, id);
}

// creating or saving one 
function create(anime) {
    return qp = db.one(`
       INSERT INTO library (anime_id, anime_name)
        VALUES ($/anime_id/, $/anime_name/)
        RETURNING *
       `, anime);
}

// deleting 
function destroy(id) {
    return queryPromise = db.none(`
        DELETE FROM library WHERE id = $1
    `, id);
}


module.exports = {
    getAll,
    getOne,
    create,
    destroy
};