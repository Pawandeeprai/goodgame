# goodGame

[goodgamez.herokuapp.com][goodGame]
[goodGame]: http://www.goodgamez.herokuapp.com

GoodGame is a web-app I developed to help users track board games using multiple shelves they've created. It was developed using Ruby on Rails and React.js.

## Features

### BGG API

GoodGame incorporates Board Game Geek's API.  Allowing users to search a comprehensive database of board games.

### Shelf Management

Users can create and edit shelves.  The DB uses a join table which joins a game id to a shelf id.  This keeps the DB from creating duplicate game entries.

### Adding Game Entries from the BGG API

If a user wishes to see the details of a game using the BGG API.  The details of the game (picture, description, playing info) are loaded in a page, but the entry is not saved to the DB until the user adds it to a shelf or creates a review for the game.

### Tour for demo users

To show brand new users the sheer power of the goodGame, there is an option on the login screen for a guest account. The guest account comes with a few preloaded shelves with games.  It will let new users get a better sense of the all the features goodGame has to offer.

### Reviews

GoodGame allows users to review any game found in BGG's API.  Each game has an aggregate review score which is displayed on the game description page.

### User Authentication

This site uses the BCrypt gem to encrypt user passwords for user security.

## Features still to come

The goodGame is still in the MVP stage, and is being constantly upgraded with features. Some deficiencies in the current implementation are:

- Friends: Soon you'll be able to other users as friends.  You can see what games are on your friend's shelf, and their recent activity.

- Ownership shelf: This will be a special shelf where you can track the board games which you actually own.  And if one of your friends has that game on their "Want to play" shelf.  The app will send both of you a message to get you together to play!

## Technology

- Postgresql
- Ruby on Rails
- React.js
