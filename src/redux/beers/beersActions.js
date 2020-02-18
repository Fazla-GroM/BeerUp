import { GET_BEERS } from "./beersTypes"
import mainApi from "../mainApi"

const BEERS = process.env.BEERS

export const getAllBeers = pageToFetch => async dispatch => {
  let result

  try {
    result = await mainApi.get(`${BEERS}?=${pageToFetch}`)

    dispatch({
      type: GET_BEERS,
      payload: {
        pageToFetch: pageToFetch + 1,
        results: result.data,
      },
    })
  } catch (err) {
    console.log(err)
    alert("Woops something went wrong")
  }
}
