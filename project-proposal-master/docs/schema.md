# Schema Information

## shelves
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed

## games
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
console     | string    | not null
description | string    | not null
coverimg_url| string    | not null


## shelves and games join table
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
shelf_id    | string    | not null
game_id     | string    | not null
(shelf_id game_id) indexed

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
game_id     | integer   | not null, foreign key (references games), indexed
rating      | integer   | not null
body        | text      |
(game_id) indexed

## friends join table
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id1    | integer   | not null
user_id2    | integer   | not null
(user_id1 and user_id2) indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
name            | string    | defaults to username
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
pic_url         | string    | default
