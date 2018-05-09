const db = require('../config/connection');

function getAll(){
    const qp = db.any(`
        SELECT * FROM library;
    `)
    console.log(qp);
}

getAll();