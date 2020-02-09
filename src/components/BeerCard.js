import React from "react"
import { css } from "@emotion/core"
import { boxShadow, backgroundWhite } from "../theme"

const BeerCard = () => {
  const cssCard = css({
    width: "100%",
    minHeight: "10rem",
    height: "100%",
    backgroundColor: "hotpink",
    boxShadow: boxShadow,
    borderRadius: "4px",
    backgroundColor: backgroundWhite,
  })
  return <div css={cssCard}></div>
}

export default BeerCard
