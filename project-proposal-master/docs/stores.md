# Flux Stores

### GameStore

Holds all persisted Game data.

##### Actions:
- `receiveAllGames`
- `receiveSingleGame`

##### Listeners:
- `ShelfIndex`
- `Game detailDetail`

### NoteFormStore

Holds un-persisted note data to send to the API.

##### Actions:
- `receiveNoteFormParams`

##### Listeners:
- `NoteForm`

### ShelfStore

Holds all persisted shelf data.

##### Actions:
- `receiveAllShelves`
- `receiveSingleShelf`
- `removeShelf`

##### Listeners:
- `ShelfIndex`

### ShelfFormStore

Holds un-persisted shelf data to send to the API.

##### Actions:
- `receiveShelfFormParams`

##### Listeners:
- `ShelfForm`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

<!-- ### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions` -->
