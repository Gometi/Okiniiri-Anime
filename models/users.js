
const db = require('../config/connection');
const bcrypt = require('bcrypt');
const salt = 7;


function register(userData) {
    return bcrypt.hash(userData.password, salt)
    .then(hash =>{
        const newUser = {
            username: userData.username,
            email: userData.email,
            pw_digest: hash
        }
        return db.one(`
        INSERT INTO users (username, email, pw_digest)
        VALUES ($/username/, $/email/, $/pw_digest/)
        RETURNING id, username, email
      `, newUser)
    })
}

function getEmail(email) {
    console.log('checking table',email)
    return db.one(`
    SELECT * FROM users
    WHERE email = $1
  `, email);
}

function login(userData) {
    console.log(userData.email)
    return getEmail(userData.email)
    .then(user =>
        bcrypt.compare(userData.password, user.pw_digest)
        .then(match => {
            if (!match) throw new Error('UserData does not match');
            delete user.pw_digest;
            return user;
        })
    )
}


module.exports ={
    register,
    login
}



