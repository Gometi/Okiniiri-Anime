DROP TABLE IF EXISTS library;
CREATE TABLE library(
 id SERIAL PRIMARY KEY,
 anime_id INT NOT NULL,
 anime_name TEXT 
);

