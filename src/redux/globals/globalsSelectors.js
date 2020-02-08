import { createSelector } from "reselect"

const globalsSelector = state => state.globals

export const selectIsMobileNavOpen = createSelector(
  [globalsSelector],
  globals => globals.isMobileNavOpen
)
