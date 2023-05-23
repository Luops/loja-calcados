create table users(
    id serial primary key,
    username varchar(20),
    password varchar(800),
    name varchar(50),
    email varchar(60),
    role smallint
);