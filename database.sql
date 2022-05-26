
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "books" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (300),
    "author" VARCHAR(300),
    "publish_year" VARCHAR(300),
   "description" VARCHAR(1000),
   "book_url" VARCHAR(1000),
   "points" INTEGER,
    "current_page" INTEGER,
 "completed" BOOLEAN default False,
  "kid_id" INTEGER REFERENCES "kids",
   "updated_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
   "inserted_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
   "total_pages" INTEGER 
);



CREATE TABLE "kids" (
 "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER REFERENCES "user"
);