# Phase 1: User Authentication, shelf model, user model and JSON API

## Rails
### Models
* User
* Shelf
* Game

### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)
* GameController (show)
* Api::ShelvesController (create, destroy, index, show, update)

### Views
* users/new.html.erb
* session/new.html.erb
* shelves/index.json.jbuilder
* shelves/id/show.json.jbuilder
* games/id/show.json.jbuilder

## Flux
### Views (React Components)

### Stores

### Actions

### ApiUtil

## Gems/Libraries
* BCrypt (Gem)
