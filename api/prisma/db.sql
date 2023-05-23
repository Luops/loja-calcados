CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(800),
    name VARCHAR(50),
    email VARCHAR(60),
    role SMALLINT
);