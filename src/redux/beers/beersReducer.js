import { GET_BEERS } from "./beersTypes"

const INITAL_STATE = {
  beers: {
    pageToFetch: 1,
    results: [],
  },
}

export const beersReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case GET_BEERS: {
      return {
        ...state,
        beers: {
          pageToFetch: action.pageToFetch,
          results: [...state.beers.results, ...action.payload.results],
        },
      }
    }

    default:
      return state
  }
}
