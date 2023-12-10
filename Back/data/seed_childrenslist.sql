BEGIN;

INSERT INTO "santa_claus_list" ("title", "color") VALUES
  ('Les Enfants Sages', '#186f34'),
  ('Les Enfants Pas Sages', '#bb0b0b');

INSERT INTO "childrens" ("name", "age", "description", "santa_claus_list_id") VALUES
  ('Salomé', 8, 'Toujours prête à rendre service (enfin... presque) et très gentille, elle fait souvent de gros câlins', 1),
  ('Alexie', 5, 'Même si elle fait sa chipie, elle fait de très gros câlins et elle est très gentille (quand elle écoute)', 1),
  ('Auréline', 12, 'Ne range jamais ses jouets', 2),
  ('Florantin', 11, 'Crie sur tout le monde dès le réveil (les gens préfèrent le laisser dormir)', 2); 
COMMIT;