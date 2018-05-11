

DROP TABLE IF EXISTS library;
DROP TABLE IF EXISTS users;

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
 email TEXT,
 password VARCHAR(30)
);

INSERT INTO users (first_name, last_name,user_name, email, password)
VALUES
	('Jonathan', 'Torres','De_La_Kraken' 'yourOtaku@gmail.com', 'yourPassword'),
	('Shalom', 'Dahal', 'Big_Boss','bossOtaku@gmail.com', 'hisPassword');
