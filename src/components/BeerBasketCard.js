import React from "react"
import { css } from "@emotion/core"
import { backgroundWhite, fontBlackPrimary, fontBlackSecondary } from "../theme"

const BeerBasketCard = ({ data }) => {
  const cssBasketCard = css({
    backgroundColor: backgroundWhite,
    width: "100%",
    height: "fit-content",
    padding: "1rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "1rem",
  })

  const cssImg = css({
    width: "2.5rem",
    marginRight: "2rem",
  })

  const cssContent = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  })

  const cssTitle = css({
    fontWeight: "600",
    color: fontBlackPrimary,
    display: "flex",
    flexDirection: "column",

    "& span": {
      fontWeight: "400",
      color: fontBlackSecondary,
      height: "fit-content",
    },
  })

  const cssAmmount = css({
    fontWeight: "700",
  })

  return (
    <div css={cssBasketCard}>
      <div css={cssImg}>
        <img
          css={cssImg}
          src={data.image_url}
          alt={`${data.name}:${data.description}`}
        />
      </div>
      <div css={cssContent}>
        <h4 css={cssTitle}>
          {data.name}
          <span>{data.tagline}</span>
        </h4>
        <span css={cssAmmount}>X{data.count}</span>
      </div>
    </div>
  )
}

export default BeerBasketCard
