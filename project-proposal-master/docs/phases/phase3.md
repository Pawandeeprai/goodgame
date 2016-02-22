# Phase 3: Notebooks and Tags (2 days)

## Rails
### Models
* Reviews


### Controllers
* Api::ReviewsController (create, destroy, show, update)

### Views
* reviews/show.json.jbuilder

## Flux
### Views (React Components)
* NotebooksIndex
  - NotebookIndexItem
* ReviewForm

### Stores
* Shelves
* Games

### Actions
* ApiActions.receiveAllNotebooks -> triggered by ApiUtil
* ApiActions.receiveSingleNotebook
* ApiActions.deleteNotebook
* NotebookActions.fetchAllNotebooks -> triggers ApiUtil
* NotebookActions.fetchSingleNotebook
* NotebookActions.createNotebook
* NotebookActions.editNotebook
* NotebookActions.destroyNotebook

### ApiUtil
* ApiUtil.fetchAllNotebooks
* ApiUtil.fetchSingleNotebook
* ApiUtil.createNotebook
* ApiUtil.editNotebook
* ApiUtil.destroyNotebook

## Gems/Libraries
