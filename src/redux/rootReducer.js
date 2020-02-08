import { combineReducers } from "redux"
//reducers
import globalsReducer from "./globals/globalsReducer"

export default combineReducers({
  globals: globalsReducer,
})
