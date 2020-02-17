import React from "react"
import { css } from "@emotion/core"
import HeroBox from "../components/HeroBox"
import Button from "../components/Button"
import BeerSelector from "../components/BeerSelector"
import { mq } from "../theme"
import { getAllBeers } from "../redux/beers/beersActions"
import { selectAllBeers } from "../redux/beers/beersSelectors"
import { Helmet } from "react-helmet"

const HomePage = () => {
  const cssSignUpBtn = css({
    margin: "-3rem auto 0 auto ",

    [mq[0]]: {
      margin: "-10rem auto 0 auto",
    },

    [mq[2]]: {},
  })

  const cssNegativeMargin = css({
    marginTop: "-2rem",
  })

  return (
    <>
      <Helmet>
        <title>BeerUp | Home</title>
        <meta property="og:title" content="BeerUp | Home" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.siteurl.com" />
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
        <link rel="canonical" href="www.siteurl.com" />
      </Helmet>
      <HeroBox
        isHomePage={true}
        subtitle="The Beerster Pro 2.0"
        title="Join Our Famous Beerup!"
      />
      <Button
        css={cssSignUpBtn}
        islink={true}
        path="/sign-up"
        title="Join BeerUp"
      />
      <BeerSelector
        css={cssNegativeMargin}
        beerListTitle="Beers"
        getBeerListData={getAllBeers}
        selectBeerListData={selectAllBeers}
      />
    </>
  )
}

export default HomePage
