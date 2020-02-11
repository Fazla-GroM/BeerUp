import { combineReducers } from "redux"
//reducers
import globalsReducer from "./globals/globalsReducer"
import { beersReducer } from "./beers/beersReducer"

export default combineReducers({
  globals: globalsReducer,
  beers: beersReducer,
})
