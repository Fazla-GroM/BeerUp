import { createSelector } from "reselect"

const favoritesSelector = state => state.favorites

export const selectFavorites = createSelector(
  [favoritesSelector],
  favorites => favorites
)
