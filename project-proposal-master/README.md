# goodGame

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

goodGame is a web application inspired by Good Reads built using Ruby on Rails
and React.js. goodGame allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [x] Create an account
- [X] Log in / Log out
- [X] Users can create shelves
- [x] Users can add games to shelves
- [x] Users can move games from one shelf to another
- [ ] Users can review games

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (1 days)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [X] authentication
- [X] user signup/signin pages
- [X] blank landing page after signin

### Phase 2: shelves model, game model, API, and basic APIUtil (2 days)

**Objective:** Shelves can be created, edited and destroyed through
the API.

- [x] create `shelf` model
- [ ] seed the database with a small amount of test data
- [x] CRUD API for shelf (`ShelvesController`)
- [x] CRUD API for game (`GamesController`)
- [x] jBuilder views for shelves
- [x] jBuilder views for games
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (2 days)

**Objective:** shelves can be created, viewed, edited and destroyed with the
user interface.  You can search for games and add them to your shelves.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each shelve component, building out the flux loop as needed.
  - [ ] `ShelvesIndex`
  - [ ] `ShelvesIndexItem`
  - [ ] `ShelveForm`

### Phase 4: Start Styling (1 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Reviews (1 day)

**Objective:** Reviews belong to Games, and can be viewed by clicking on a Game.

- [ ] create `Review` model
- build out API, Flux loop, and components for:
  - [ ] Review CRUD
  - [ ] adding reviews requires a game which is on one of a user's shelves
  - [ ] viewing reviews by game
- Use CSS to style new views

### Phase 6: video game info API (1 day)

**Objective:** Incorporate a videogame data API.  And save the data to the game DB if the user adds the game to one of their shelves.

- Add an API which searches for games which aren't already in the db:
  - [ ] display the searches
  - [ ] display the specific game in the same view for the games
  - [ ] add the game to the db if the user adds the game to a shelf


### Phase 7: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] create a demo account
- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add fancy CSS stuff

### Bonus Features (TBD)
- [ ] Users have friends and can see what's in their friend's shelves
- [ ] Users can favorite games


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
