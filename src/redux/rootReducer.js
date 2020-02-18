import { combineReducers } from "redux"
//reducers
import { globalsReducer } from "./globals/globalsReducer"
import { beersReducer } from "./beers/beersReducer"
import { cratesReducer } from "./crates/cratesReducer"
import { favoritesReducer } from "./favorites/favoritesReducer"

export default combineReducers({
  globals: globalsReducer,
  beers: beersReducer,
  crates: cratesReducer,
  favorites: favoritesReducer,
})
