import React from "react"
import { css } from "@emotion/core"
import backgroundImage from "../assets/pattern.svg"
import { backgroundBlack } from "../theme"

const BeerBasket = ({ transitionStyle }) => {
  const cssBeerBasket = css({
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "500",
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: backgroundBlack,
    backgroundPosition: "center",
    transition: "all .4s",
  })
  return <div css={cssBeerBasket} style={transitionStyle}></div>
}

export default BeerBasket
