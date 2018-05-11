const db =require('../config/connection');

function getAll() {
   return  db.any('SELECT * FROM users');
}

function getOne(id) {
  return queryPromise = db.one(`
    SELECT * FROM library
    WHERE id = $1
    `, id
  );
}

function create(user) {
    return qp = db.one(`
       INSERT INTO users (first_name, last_name, email, password)
        VALUES ($/first_name/, $/last_name/, $/email/, $/password/)
        RETURNING *
       `, user);
}

function destroy(id) {
	return queryPromise = db.none(`
		DELETE FROM users WHERE id = $1
	`, id);
}


module.exports = {
    getAll,
    getOne,
    create,
    destroy
};