import React from "react"
import { css } from "@emotion/core"
import { useSelector } from "react-redux"
import { selectFavorites } from "../redux/favorites/favoritesSelectors"
import HeroBox from "../components/HeroBox"
import BeerSelector from "../components/BeerSelector"
import { mq } from "../theme"
import { Helmet } from "react-helmet"

const FavoritesPage = () => {
  const favoriteBeers = useSelector(selectFavorites)

  const cssNegativeMargin = css({
    marginTop: "-10rem",

    [mq[0]]: {
      marginTop: "-25rem",
    },
  })

  console.log("FAVORITES")
  return (
    <>
      <Helmet>
        <title>BeerUp | Favorites</title>
        <meta property="og:title" content="BeerUp | Favorites" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.siteurl.com/favorites" />
        <meta property="og:image" content="neka slika" />
        <meta
          property="og:description"
          content="BeerUp! A best place to be if you are a beer lover!"
        />
        <meta
          name="description"
          content="BeerUp! A best place to be if you are a beer lover!"
        />

        {/*CANONICAL */}
        <link rel="canonical" href="www.siteurl.com/favorites" />
      </Helmet>
      <HeroBox title="Favourites" />
      <BeerSelector
        css={cssNegativeMargin}
        beerListTitle="My favorite Beers"
        beerListData={favoriteBeers}
      />
    </>
  )
}

export default FavoritesPage
