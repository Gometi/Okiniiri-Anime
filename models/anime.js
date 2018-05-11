const db =require('../config/connection');
function getAll() {
   return  db.any('SELECT * FROM library');
}

module.exports = {
    getAll
};
