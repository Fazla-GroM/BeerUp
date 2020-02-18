import { SET_FAVORITES } from "./favoritesTypes"

const INITIAL_STATE = []

export const favoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FAVORITES: {
      //const newFavsArr = [...state]

      if (!state.some(alreadyFav => alreadyFav.id === action.payload.id)) {
        return [...state, action.payload]
      } else
        return state.filter(alreadyFav => alreadyFav.id !== action.payload.id)
    }

    default:
      return state
  }
}
