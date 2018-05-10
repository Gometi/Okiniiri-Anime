
DROP TABLE IF EXISTS library

CREATE TABLE library(
 id SERIAL PRIMARY KEY,
 anime_id INT NOT NULL,
 anime_name TEXT 
);

INSERT INTO library (anime_id, anime_name) VALUES
(1, 'OnePiece');