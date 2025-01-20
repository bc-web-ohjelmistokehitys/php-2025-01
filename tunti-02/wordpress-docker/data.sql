CREATE TABLE person (
   id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
   name varchar(255) NOT NULL,
   PRIMARY KEY(id)
);

INSERT INTO person (name) VALUES('Peksudus');
INSERT INTO person (name) VALUES('Caligula');
INSERT INTO person (name) VALUES('Hip hap huu');