import {
  SET_IS_MOBILE_NAV_OPEN,
  SET_BEER_MODAL,
  SET_IS_BEER_BASKET_OPEN,
} from "./globalsTypes"

export const setIsMobileNavOpen = isOpen => {
  return {
    type: SET_IS_MOBILE_NAV_OPEN,
    payload: isOpen,
  }
}

export const setBeerModal = (isOpen, data) => {
  return {
    type: SET_BEER_MODAL,
    payload: {
      isOpen,
      data,
    },
  }
}

export const setIsBeerBasketOpen = isOpen => {
  return {
    type: SET_IS_BEER_BASKET_OPEN,
    payload: isOpen,
  }
}
