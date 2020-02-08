import { SET_IS_MOBILE_NAV_OPEN } from "./globalsTypes"

export const setIsMobileNavOpen = isOpen => {
  return {
    type: SET_IS_MOBILE_NAV_OPEN,
    payload: isOpen,
  }
}
