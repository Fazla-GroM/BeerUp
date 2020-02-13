import { SET_IS_MOBILE_NAV_OPEN, SET_BEER_MODAL } from "./globalsTypes"

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
