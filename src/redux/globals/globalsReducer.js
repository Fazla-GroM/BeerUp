import { SET_IS_MOBILE_NAV_OPEN } from "./globalsTypes"

const initialState = {
  isMobileNavOpen: false,
}

const globalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_MOBILE_NAV_OPEN:
      return {
        ...state,
        isMobileNavOpen: action.payload,
      }

    default:
      return state
  }
}

export default globalsReducer
