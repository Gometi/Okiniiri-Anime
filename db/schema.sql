DROP TABLE IF EXISTS library;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS reviews;

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

CREATE TABLE reviews(
    id SERIAL PRIMARY KEY,
    review TEXT,
    anime_name VARCHAR,
    user_name VARCHAR,
    user_id INT REFERENCES users(id) 
)

