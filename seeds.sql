CREATE DATABASE star_wars_characters_db;

USE star_wars_characters_db;

CREATE TABLE characters (
ch_name VARCHAR(50),
affiliation VARCHAR(30),
category VARCHAR(30),
hp BIGINT,
attack BIGINT,
speed BIGINT,
location VARCHAR(30),
imageURL VARCHAR(1000)
);

INSERT INTO characters(ch_name, affiliation, category, hp, attack, speed, location, imageURL) 
VALUES ("Darth Vader", "Dark Side", "sith", 1000, 97, 61, "The Death Star", "http://res.cloudinary.com/stephenrwoosley/image/upload/v1484193797/vader-mask_ulbus7.png");