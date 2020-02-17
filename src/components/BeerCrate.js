import React, { useEffect } from "react"
import { css } from "@emotion/core"
import { useSelector, useDispatch } from "react-redux"
import { setActiveCrateAmmount } from "../redux/crates/cratesActions"
import crateImg from "../assets/crate.svg"
import beerImg from "../assets/bottle_draft@2x.png"
import { colorPrimary } from "../theme"

const BeerCrate = ({ beerSelector }) => {
  const dispatch = useDispatch()
  const crateData = useSelector(beerSelector)

  useEffect(() => {
    dispatch(setActiveCrateAmmount(crateData.beers.length))
  }, [crateData.beers.length])

  // console.log({ beerSelector })
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
    position: "relative",
  })

  const cssBeer = css({
    width: "100%",
    padding: "1rem",
  })

  const cssBeerCounter = css({
    backgroundColor: colorPrimary,
    width: "4rem",
    height: "4rem",
    borderRadius: "10rem",
    textAlign: "center",
    fontWeight: "700",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    position: "absolute",
    top: "-2rem",
    right: "-2rem",
  })

  return (
    <>
      <div title="Empty Beer crate ready to be filled" css={cssCrate}>
        {crateData.beers.map((beer, index) => {
          return <img key={index} css={cssBeer} src={beerImg} alt={beer.name} />
        })}
        {crateData.beers.length > 0 && (
          <div css={cssBeerCounter}>{crateData.beers.length}</div>
        )}
      </div>
    </>
  )
}

export default BeerCrate
