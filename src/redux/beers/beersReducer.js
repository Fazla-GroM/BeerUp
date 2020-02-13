import { GET_BEERS } from "./beersTypes"

const INITAL_STATE = {
  allBeers: {
    pageToFetch: 1,
    results: [],
  },
}

export const beersReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case GET_BEERS: {
      return {
        ...state,
        allBeers: {
          pageToFetch: action.payload.pageToFetch,
          results: [...state.allBeers.results, ...action.payload.results],
        },
      }
    }

    default:
      return state
  }
}
