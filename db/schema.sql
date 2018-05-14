DROP TABLE IF EXISTS library;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    pw_digest VARCHAR
);

CREATE TABLE library(
 id SERIAL PRIMARY KEY,
 anime_id INT NOT NULL,
 anime_name TEXT,
 user_id INT REFERENCES users(id) 
);

