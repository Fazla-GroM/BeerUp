import { createSelector } from "reselect"

const cratesSelector = state => state.crates

export const selectCrateOne = createSelector(
  [cratesSelector],
  crates => crates.crateOne
)

export const selectCrateTwo = createSelector(
  [cratesSelector],
  crates => crates.crateTwo
)

export const selectCrateThree = createSelector(
  [cratesSelector],
  crates => crates.crateThree
)
