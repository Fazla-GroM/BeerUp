import {
  SET_IS_MOBILE_NAV_OPEN,
  SET_BEER_MODAL,
  SET_IS_BEER_BASKET_OPEN,
} from "./globalsTypes"

const INITIAL_STATE = {
  isMobileNavOpen: false,
  beerModal: {
    isOpen: false,
    data: {},
  },
  isBeerBasketOpen: true,
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
    case SET_IS_BEER_BASKET_OPEN:
      return {
        ...state,
        isBeerBasketOpen: action.payload,
      }
    default:
      return state
  }
}
