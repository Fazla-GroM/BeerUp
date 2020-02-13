import React from "react"
import { css } from "@emotion/core"
import { useSelector } from "react-redux"
import crateImg from "../assets/crate.svg"
import beerImg from "../assets/bottle_draft@2x.png"

const BeerCrate = ({ beerSelector }) => {
  const crateData = useSelector(beerSelector)

  console.log({ beerSelector })
  const cssCrate = css({
    width: "26.4rem",
    height: "31.7rem",
    display: "grid",
    gridTemplateRows: "repeat(5,1fr)",
    gridTemplateColumns: "repeat(4,1fr)",
    backgroundImage: `url(${crateImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "0 auto",
  })

  const cssBeer = css({
    width: "100%",
    padding: "1rem",
  })

  return (
    <div title="Empty Beer crate ready to be filled" css={cssCrate}>
      {crateData.beers.map((beer, index) => {
        return <img key={index} css={cssBeer} src={beerImg} alt="beer" />
      })}
    </div>
  )
}

export default BeerCrate
