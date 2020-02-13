import {
  SET_CRATE_ONE,
  SET_CRATE_TWO,
  SET_CRATE_THREE,
  SET_ACTIVE_CRATE,
} from "./cratesTypes"
import store from "../store"

const CRATE_LIMIT = 20

export const setActiveCrate = index => {
  return {
    type: SET_ACTIVE_CRATE,
    payload: index,
  }
}
