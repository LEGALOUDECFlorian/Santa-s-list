BEGIN;

DROP TABLE IF EXISTS "santa_claus_list","childrens";

CREATE TABLE "santa_claus_list" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL DEFAULT '',
    "color" TEXT NOT NULL DEFAULT '#ffffff',
    "position" INT NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "childrens" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "age" INT NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL DEFAULT '',
    "position" INT NOT NULL DEFAULT 0,
    "santa_claus_list_id" INT NOT NULL REFERENCES "santa_claus_list"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);




COMMIT
