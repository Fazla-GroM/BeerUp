import {
  SET_CRATE_ONE,
  SET_CRATE_TWO,
  SET_CRATE_THREE,
  SET_ACTIVE_CRATE,
  SET_ACTIVE_CRATE_AMMOUNT,
} from "./cratesTypes"

export const setActiveCrate = index => {
  return {
    type: SET_ACTIVE_CRATE,
    payload: index,
  }
}

export const setActiveCrateAmmount = ammount => {
  return {
    type: SET_ACTIVE_CRATE_AMMOUNT,
    payload: ammount,
  }
}

export const addBeerToCrate = (beer, activeCrate) => {
  if (activeCrate === 0) {
    return {
      type: SET_CRATE_ONE,
      payload: beer,
    }
  }

  if (activeCrate === 1) {
    return {
      type: SET_CRATE_TWO,
      payload: beer,
    }
  }

  if (activeCrate === 2) {
    return {
      type: SET_CRATE_THREE,
      payload: beer,
    }
  }
}
