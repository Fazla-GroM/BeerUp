import React, { useEffect } from "react"
import { css } from "@emotion/core"
import { useSelector, useDispatch } from "react-redux"
import { selectBeersForBasket } from "../redux/crates/cratesSelectors"
import { setIsBeerBasketOpen } from "../redux/globals/globalsActions"
import backgroundImage from "../assets/pattern.svg"
import {
  backgroundBlack,
  fontWhitePrimary,
  colorPrimaryTransparent,
  mq,
} from "../theme"
import BeerBasketCard from "./BeerBasketCard"

const BeerBasket = ({ transitionStyle }) => {
  const dispatch = useDispatch()
  const allBeers = useSelector(selectBeersForBasket)

  const handleClose = e => {
    const target = e.target
    e.stopPropagation()
    if (target.matches("#BeerBasket")) {
      dispatch(setIsBeerBasketOpen(false))
    }
  }

  useEffect(() => {
    const handleCloseOnEscKey = e => {
      if (e.keyCode === 27) dispatch(setIsBeerBasketOpen(false))
    }
    document.addEventListener("keydown", handleCloseOnEscKey)
    return () => {
      document.removeEventListener("keydown", handleCloseOnEscKey)
    }
  }, [])

  const getTotalBeersCount = arr => {
    let total = 0
    arr.map(item => (total += item.count))
    return total
  }

  const cssBeerBasket = css({
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "500",
    width: "100%",
    height: "100vh",
    transition: "all .4s",
  })

  const cssLayout = css({
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: backgroundBlack,
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    paddingTop: "6.2rem",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    display: "flex",
    flexDirection: "column",

    [mq[0]]: {
      paddingTop: "8.2rem",
      width: "50%",
    },

    [mq[2]]: {
      width: "30%",
    },
  })

  const cssTitle = css({
    width: "100%",
    color: fontWhitePrimary,
    fontWeight: "700",
    fontSize: "2.4rem",
    borderBottom: `2px solid ${colorPrimaryTransparent}`,
  })

  const cssTotalHolder = css({
    borderTop: `2px solid ${colorPrimaryTransparent}`,
    padding: "1.5rem 0",
    "& span": {
      color: fontWhitePrimary,
      fontWeight: "600",
    },
  })

  const cssCardHolder = css({
    width: "100%",
    height: "100%",
    overflowY: "auto",
    display: "grid",
    gridAutoRows: "minmax(min-content, max-content)",
    gridTemplateColumns: "1fr",
    rowGap: "2rem",
    marginTop: "1rem",
    marginBottom: "1rem",

    [mq[2]]: {
      paddingRight: "2rem",
    },
  })

  return (
    <div
      onClick={handleClose}
      id="BeerBasket"
      css={cssBeerBasket}
      style={transitionStyle}
    >
      <div css={cssLayout}>
        <h3 css={cssTitle}>Your cart</h3>
        <div css={cssCardHolder}>
          {allBeers.map(beer => (
            <BeerBasketCard key={beer.id} data={beer} />
          ))}
        </div>
        <div css={cssTotalHolder}>
          <span>Total Beers: {getTotalBeersCount(allBeers)}</span>
        </div>
      </div>
    </div>
  )
}

export default BeerBasket
