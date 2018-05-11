const animeDb =require('../config/connection');

function getAll() {
   return  animeDb.any('SELECT * FROM library');
}

function getOne(id) {
  return queryPromise = animeDb.one(`
    SELECT * FROM library
    WHERE id = $1
    `, id
  );
}

function create(anime) {
    return qp = animeDb.one(`
       INSERT INTO library (anime_id, anime_name)
        VALUES ($/anime_id/, $/anime_name/)
        RETURNING *
       `, anime);
}

function destroy(id) {
	return queryPromise = animeDb.none(`
		DELETE FROM users WHERE id = $1
	`, id);
}

module.exports = {
    getAll,
    getOne,
    create,
    destroy
};