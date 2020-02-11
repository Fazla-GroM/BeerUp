import { GET_BEERS } from "./beersTypes"
import mainApi from "../mainApi"
import axios from "axios"

console.log({ mainApi })

const BEERS = process.env.BEERS

export const getBeers = pageToFetch => async dispatch => {
  let result

  try {
    result = await mainApi.get(`${BEERS}?=${pageToFetch}`)

    console.log({ result })
    dispatch({
      type: GET_BEERS,
      payload: {
        pageToFetch: pageToFetch + 1,
        results: result.data,
      },
    })
  } catch (err) {
    console.log(err)
  }
}
