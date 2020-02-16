import React from "react"
import { css } from "@emotion/core"
import { ReactComponent as CrateImg } from "../assets/shopping_cart.svg"
import { useSelector, useDispatch } from "react-redux"
import { setIsBeerBasketOpen } from "../redux/globals/globalsActions"
import { selectIsBeerBasketOpen } from "../redux/globals/globalsSelectors"
import { selectBeerAmmountInAllCrates } from "../redux/crates/cratesSelectors"
import { colorPrimary, colorSecondary } from "../theme"

const BeerBasketBtn = () => {
  const dispatch = useDispatch()
  const isBeerBasketOpen = useSelector(selectIsBeerBasketOpen)
  const allBeersAmmount = useSelector(selectBeerAmmountInAllCrates)

  const handleClick = () => {
    dispatch(setIsBeerBasketOpen(!isBeerBasketOpen))
  }

  const cssBeerBasketBtn = css({
    border: "none",
    outline: " none",
    borderRadius: "10rem",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    cursor: "pointer",
  })

  const cssCrate = css({
    fill: colorPrimary,
    width: "3.2rem",
    height: "3.2rem",
  })

  const cssBeerAmmount = css({
    backgroundColor: colorSecondary,
    minHeight: "2.3rem",
    minWidth: "2.3rem",
    fontWeight: "700",
    color: "white",
    padding: ".4rem",
    borderRadius: "10rem",
    textAlign: "center",
    top: "-.6rem",
    right: "-.8rem",
    position: "absolute",
  })

  return (
    <button
      onClick={handleClick}
      aria-label="Shopping cart"
      css={cssBeerBasketBtn}
    >
      <CrateImg css={cssCrate} />
      {allBeersAmmount > 0 && (
        <span css={cssBeerAmmount}>{allBeersAmmount}</span>
      )}
    </button>
  )
}

export default BeerBasketBtn
