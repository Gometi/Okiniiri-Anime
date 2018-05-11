\c anime_db

DELETE FROM library;

INSERT INTO library (anime_id, anime_name)
VALUES
	(8271, 'Tokyo Ghoul'),
	(4697, 'Vampire Bund');


INSERT INTO users (first_name, last_name, email, password)
VALUES
	('Jonathan', 'Torres', 'yourOtaku@gmail.com', 'yourPassword');