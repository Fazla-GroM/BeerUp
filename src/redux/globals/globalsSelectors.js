import { createSelector } from "reselect"

const globalsSelector = state => state.globals

export const selectIsMobileNavOpen = createSelector(
  [globalsSelector],
  globals => globals.isMobileNavOpen
)

export const selectBeerModal = createSelector(
  [globalsSelector],
  globals => globals.beerModal
)

export const selectIsBeerBasketOpen = createSelector(
  [globalsSelector],
  globals => globals.isBeerBasketOpen
)
