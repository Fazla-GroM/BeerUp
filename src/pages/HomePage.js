import React, { useEffect } from "react"
import { css } from "@emotion/core"
import HeroBox from "../components/HeroBox"
import Button from "../components/Button"
import BeerSelector from "../components/BeerSelector"
import { mq } from "../theme"
import { useDispatch } from "react-redux"
import { getBeers } from "../redux/beers/beersActions"

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBeers(1))
  }, [])

  const cssSignUpBtn = css({
    margin: "-3rem auto 0 auto ",

    [mq[0]]: {
      margin: "-10rem auto 0 auto",
    },
  })

  const cssNegativeMargin = css({
    marginTop: "-2rem",
  })

  console.log("HOME PAGE")
  return (
    <>
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
      <BeerSelector css={cssNegativeMargin} beerListTitle="Beers" />
    </>
  )
}

export default HomePage
