import React from "react"
import { css } from "@emotion/core"
import HeroBox from "../components/HeroBox"
import Button from "../components/Button"

const NoMatchPage = () => {
  const cssBtn = css({
    margin: "-2.5rem auto 4rem auto",
  })

  return (
    <>
      <HeroBox
        subtitle="Whoa, you missed the turn!"
        title="Go grab some beers"
      />
      <Button css={cssBtn} islink={true} title="Get Beers" path="/" />
    </>
  )
}

export default NoMatchPage
