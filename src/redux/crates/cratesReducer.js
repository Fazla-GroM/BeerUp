import {
  SET_CRATE_ONE,
  SET_CRATE_TWO,
  SET_CRATE_THREE,
  SET_ACTIVE_CRATE,
  SET_ACTIVE_CRATE_AMMOUNT,
} from "./cratesTypes"

//BULLSHIT

const CRATE_LIMIT = 20

const INITIAL_STATE = {
  activeCrate: {
    activeCrateIndex: 0,
    beersAmmount: 0,
  },
  crateOne: {
    beers: [],
    isFull: false,
  },
  crateTwo: {
    beers: [],
    isFull: false,
  },
  crateThree: {
    beers: [],
    isFull: false,
  },
}

export const cratesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_CRATE: {
      return {
        ...state,
        activeCrate: {
          ...state.activeCrate,
          activeCrateIndex: action.payload,
        },
      }
    }

    case SET_ACTIVE_CRATE_AMMOUNT: {
      return {
        ...state,
        activeCrate: {
          ...state.activeCrate,
          beersAmmount: action.payload,
        },
      }
    }

    case SET_CRATE_ONE: {
      return {
        ...state,
        crateOne: {
          isFull: state.crateOne.beers.length >= CRATE_LIMIT,
          beers: [...state.crateOne.beers, action.payload],
        },
      }
    }
    case SET_CRATE_TWO: {
      return {
        ...state,
        crateTwo: {
          isFull: state.crateTwo.beers.length === CRATE_LIMIT,
          beers: [...state.crateTwo.beers, action.payload],
        },
      }
    }
    case SET_CRATE_THREE: {
      return {
        ...state,
        crateThree: {
          isFull: state.crateThree.beers.length === CRATE_LIMIT,
          beers: [...state.crateThree.beers, action.payload],
        },
      }
    }

    default:
      return state
  }
}
