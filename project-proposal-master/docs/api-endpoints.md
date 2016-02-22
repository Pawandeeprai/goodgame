# API Endpoints

## HTML API

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Games

- `GET /api/games`
  - Games index/search
  - accepts pagination params (if I get there)
- `POST /api/games`
- `GET /api/games/:id`

### Shelves

- `GET /api/shelves`
- `POST /api/shelves`
- `GET /api/shelves/:id`
- `PATCH /api/shelves/:id`
- `DELETE /api/shelves/:id`
- `GET /api/shelves/:id/games`
  - index of all games for a shelf

### Reviews

- A game's reviews will be included in the game show template
- `GET /api/games/:game_id/reviews`
- `POST /api/games/:game_id/reviews`: add review to game by game id
- `DELETE /api/games/:game_id/reviews/:tag_name`: remove review
