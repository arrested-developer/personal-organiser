BEGIN;

SET time zone 'UTC';

INSERT INTO todos
  (description, completed)
VALUES
  ('walk the dog', false),
  ('buy some cheese', true),
  ('go to bed', false);

COMMIT;