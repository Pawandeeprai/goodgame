# Phase 2: Flux Architecture and Note CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* ShelvesIndex
  - ShelvesIndexItem
* ShelveForm


### Stores
* Note

### Actions
* ApiActions.receiveAllShelves -> triggered by ApiUtil
* ApiActions.receiveSingleShelf
* ApiActions.deleteShelf
* ShelfActions.fetchAllShelves -> triggers ApiUtil
* ShelfActions.fetchSingleShelf
* ShelfActions.createShelf
* ShelfActions.editShelf
* ShelfActions.destroyShelf

### ApiUtil
* ApiUtil.fetchAllShelves
* ApiUtil.fetchSingleShelf
* ApiUtil.createShelf
* ApiUtil.editShelf
* ApiUtil.destroyShelf

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
