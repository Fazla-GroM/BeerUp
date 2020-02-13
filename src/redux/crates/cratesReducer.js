import {
  SET_CRATE_ONE,
  SET_CRATE_TWO,
  SET_CRATE_THREE,
  SET_ACTIVE_CRATE,
} from "./cratesTypes"

//BULLSHIT

const INITIAL_STATE = {
  activeCrate: 0,
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
        activeCrate: action.payload,
      }
    }

    case SET_CRATE_ONE: {
      return {
        ...state,
        crateOne: {
          isFull: action.payload.isFull,
          beers: [...state.crateOne.beers, ...action.payload.beers],
        },
      }
    }
    case SET_CRATE_TWO: {
      return {
        ...state,
        crateTwo: {
          isFull: action.payload.isFull,
          beers: [...state.crateTwo.beers, ...action.payload.beers],
        },
      }
    }
    case SET_CRATE_THREE: {
      return {
        ...state,
        crateThree: {
          isFull: action.payload.isFull,
          beers: [...state.crateThree.beers, ...action.payload.beers],
        },
      }
    }

    default:
      return state
  }
}
