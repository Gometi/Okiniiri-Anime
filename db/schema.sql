DROP TABLE IF EXISTS library;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS reviews;

CREATE TABLE library(
 id SERIAL PRIMARY KEY,
 anime_id INT NOT NULL,
 anime_name TEXT 
);


INSERT INTO library (anime_id, anime_name)
VALUES
	(8271, 'Tokyo Ghoul'),
	(4697, 'Vampire Bund');

CREATE TABLE users(
 id SERIAL PRIMARY KEY,
 first_name TEXT,
 last_name TEXT,
 user_name,
 email TEXT,
 password VARCHAR(30)
);

INSERT INTO users (first_name, last_name,user_name, email, pw_digest)
VALUES
	('Jonathan', 'Torres','De_La_Kraken' 'yourOtaku@gmail.com', 'yourPassword'),
	('Ufuoma', 'Gometi', 'Dr_Gometi', 'KPopOtaku@gmail.com', 'masterPassword'),
	('Shalom', 'Dahal', 'Big_Boss','bossOtaku@gmail.com', 'hisPassword');

CREATE TABLE reviews(
 id SERIAL PRIMARY KEY,
 user_id REFERENCES users(id),
 user_name REFERENCES users(user_name),
 review_of TEXT,
 anime_name REFERENCES library(anime_name),
 anime_id REFERENCES library(id)
);
