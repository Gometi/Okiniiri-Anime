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

function addAnime(anime) {
    return qp = animeDb.one(`
       INSERT INTO library (anime_id, anime_name)
        VALUES ($/anime_id/, $/anime_name/)
        RETURNING *
       `, anime);
}

function removeAnime(id) {
	return queryPromise = animeDb.none(`
		DELETE FROM library WHERE id = $1
	`, id);
}

function createReview(review) {
    return qp = animeDb.one(`
       INSERT INTO reviews (user_id, user_name, review_of, anime_name, anime_id)
        VALUES ($/user_id/, $/user_name/, $/review_of/, $/anime_name/, $/anime_id/)
        RETURNING *
       `, review);
}


function updateReview(review, id){
  return db.one(`
    UPDATE reviews
    SET 
    user_id = $1
    user_name = $2
    review_of = $3
    anime_name = $4
    anime_id = $5
    RETURNING *
  `, [review.user_id, review.user_name, review.review_of, review.anime_name, review.anime_id], id);
}



module.exports = {
    getAll,
    getOne,
    create,
    destroy,
    updateReview
};