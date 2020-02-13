import { createSelector } from "reselect"

const beersSelector = state => state.beers

export const selectAllBeers = createSelector(
  [beersSelector],
  beers => beers.allBeers
)
