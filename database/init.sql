BEGIN;

DROP TABLE IF EXISTS users, restaurants, sessions, recommendations CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    email TEXT UNIQUE NOT NULL,
    hashpassword TEXT NOT NULL,
    name TEXT NOT NULL
);

CREATE TABLE  restaurants (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL
);

CREATE TABLE sessions (
    id SERIAL PRIMARY KEY, 
    user_id INTEGER REFERENCES users(id)   
);

CREATE TABLE recommendations (
    id SERIAL PRIMARY KEY, 
    recommendations TEXT NOT NULL,
    restaurants_id INTEGER REFERENCES restaurants(id),
    user_id INTEGER REFERENCES users(id)
);


COMMIT;

