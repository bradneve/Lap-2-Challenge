DROP TABLE IF EXISTS journals;

CREATE TABLE journals (
    id serial PRIMARY KEY,
    title varchar(100) NOT NULL,
    name varchar(100) NOT NULL,
    story varchar(500) NOT NULL
);