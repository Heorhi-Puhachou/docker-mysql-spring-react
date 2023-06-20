CREATE DATABASE myexample;

USE myexample;


create table users
(
    id         int         NOT NULL AUTO_INCREMENT primary key,
    first_name varchar(50) NOT NULL,
    last_name  varchar(50) NOT NUll
);

CREATE TABLE publisher
(
    publisher_id int primary key NOT NULL,
    name         varchar(255)    NOT NULL,
    rating       int             NOT NULL
);

INSERT INTO publisher (publisher_id,
                       name,
                       rating)
VALUES (1,
        'Rockstar',
        92),
       (2,
        'Nintendo',
        97);

CREATE TABLE game
(
    game_id      int AUTO_INCREMENT primary key NOT NULL,
    publisher_id int                            NOT NULL,
    name         varchar(255)                   NOT NULL,
    copies       int,
    release_date DATE
);

INSERT INTO game (name,
                  publisher_id,
                  copies,
                  release_date)
VALUES ('GTA',
        1,
        10000,
        '20190601'),
       ('Bayonetta',
        2,
        20000,
        '20191001'),
       ('Legend of Zelda',
        2,
        100000,
        '20191201');
