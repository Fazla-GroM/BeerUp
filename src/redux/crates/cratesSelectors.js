import { createSelector } from "reselect"
import countDuplicatesArr from "../../helpers/countDuplicatesArr"

const cratesSelector = state => state.crates

export const selectActiveCrate = createSelector(
  [cratesSelector],
  crates => crates.activeCrate
)

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

export const selectBeerAmmountInAllCrates = createSelector(
  [cratesSelector],
  crates => {
    return (
      crates.crateOne.beers.length +
      crates.crateTwo.beers.length +
      crates.crateThree.beers.length
    )
  }
)

export const selectBeersForBasket = createSelector([cratesSelector], crates => {
  const allBeersInCrates = [
    ...crates.crateOne.beers,
    ...crates.crateTwo.beers,
    ...crates.crateThree.beers,
  ]
  return countDuplicatesArr(allBeersInCrates)
})
