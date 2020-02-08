import React from "react"
import { css } from "@emotion/core"
import HeroBox from "../components/HeroBox"
import BeerSelector from "../components/BeerSelector"

const FavoritesPage = () => {
  const cssNegativeMargin = css({
    marginTop: "-10rem",
  })

  console.log("FAVORITES")
  return (
    <>
      <HeroBox title="Favourites" />
      <BeerSelector css={cssNegativeMargin} beerListTitle="My favorite Beers" />
    </>
  )
}

export default FavoritesPage
