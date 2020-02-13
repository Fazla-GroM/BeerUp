import { SET_IS_MOBILE_NAV_OPEN, SET_BEER_MODAL } from "./globalsTypes"

const INITIAL_STATE = {
  isMobileNavOpen: false,
  beerModal: {
    isOpen: false,
    data: {},
  },
}

export const globalsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_IS_MOBILE_NAV_OPEN:
      return {
        ...state,
        isMobileNavOpen: action.payload,
      }

    case SET_BEER_MODAL:
      return {
        ...state,
        beerModal: {
          ...state.beerModal,
          ...action.payload,
        },
      }
    default:
      return state
  }
}
