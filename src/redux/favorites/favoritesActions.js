import { SET_FAVORITES } from "./favoritesTypes"

export const setFavorites = beer => {
  return {
    type: SET_FAVORITES,
    payload: beer,
  }
}
