import React, { useEffect } from "react"
import { css } from "@emotion/core"
import { useDispatch, useSelector } from "react-redux"
import { setBeerModal } from "../redux/globals/globalsActions"
import { selectBeerModal } from "../redux/globals/globalsSelectors"
import { addBeerToCrate, setActiveCrate } from "../redux/crates/cratesActions"
import { selectActiveCrate } from "../redux/crates/cratesSelectors"
import {
  backgroundWhite,
  colorPrimary,
  fontBlackPrimary,
  fontBlackSecondary,
  mq,
} from "../theme"
import LikeButton from "./LikeButton"
import Button from "./Button"

const CRATE_LIMIT = 20

const BeerModal = ({ transitionStyle }) => {
  const dispatch = useDispatch()
  const { isOpen, data } = useSelector(selectBeerModal)
  const { activeCrateIndex, beersAmmount } = useSelector(selectActiveCrate)
  console.log({ beersAmmount })
  const handleAddBeer = (beerData, activeCrate) => {
    if (beersAmmount < CRATE_LIMIT) {
      dispatch(addBeerToCrate(beerData, activeCrate))
    } else {
      alert("FULL")
    }
  }

  const handleClose = e => {
    const target = e.target
    e.stopPropagation()
    if (target.matches("#BeerModal") || target.matches("#BeerModalClose")) {
      dispatch(setBeerModal(false, {}))
    }
  }

  useEffect(() => {
    const handleCloseOnEscKey = e => {
      if (e.keyCode === 27) dispatch(setBeerModal(false, {}))
    }
    document.addEventListener("keydown", handleCloseOnEscKey)
    return () => {
      document.removeEventListener("keydown", handleCloseOnEscKey)
    }
  }, [])

  const cssBeerModal = css({
    position: "fixed",
    zIndex: "1500",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.7)",
    transition: "all .4s",
  })

  const cssCard = css({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(-50%,-50%) `,
    backgroundColor: backgroundWhite,
    width: "90%",
    maxWidth: "1336px",
    maxHeight: "80%",
    borderRadius: "4px",
    padding: "3.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",

    [mq[0]]: {
      flexDirection: "row",
      padding: "7rem",
    },

    [mq[2]]: {
      width: "100%",
      padding: "20rem",
    },
  })

  const cssModalLike = css({
    position: "absolute",
    left: "1rem",
    top: "1rem",

    [mq[0]]: {
      top: "3rem",
      left: "3rem",
    },

    [mq[2]]: {
      top: "5rem",
      left: "5rem",
    },
  })

  const cssCloseBtn = css({
    position: "absolute",
    top: "1rem",
    right: "1rem",
    width: "2.4rem",
    height: "2.4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    cursor: "pointer",
    transition: "all .4s",

    "&:hover": {
      transform: "rotate(360deg)",
    },

    [mq[0]]: {
      top: "3rem",
      right: "3rem",
    },

    [mq[2]]: {
      top: "5rem",
      right: "5rem",
    },

    "&::before,&::after": {
      position: "absolute",
      content: "''",
      width: "100%",
      height: "4px",
      backgroundColor: colorPrimary,
    },

    "&::before": {
      transform: "rotate(45deg)",
    },

    "&::after": {
      transform: "rotate(-45deg)",
    },
  })

  const cssAddBtn = css({
    position: "absolute",
    bottom: "-2.4rem",
    left: "50%",
    transform: "translateX(-50%)",

    [mq[0]]: {
      //position: "static",
    },
  })

  const cssImg = css({
    width: "5rem",
    marginTop: "-7rem",
    marginBottom: "2rem",

    [mq[0]]: {
      margin: "0",
      width: "10rem",
      marginRight: "5rem",
    },

    [mq[2]]: {
      width: "15rem",
      marginRight: "10rem",
    },
  })

  const cssContent = css({
    height: "65%",

    [mq[0]]: {
      height: "100%",
    },
  })

  const cssTitle = css({
    fontWeight: "700",
    color: fontBlackPrimary,
    fontSize: "2.5rem",
    textAlign: "center",
    lineHeight: "1.2",

    [mq[0]]: {
      textAlign: "left",
    },

    "& span": {
      fontSize: "1.6rem",
      color: fontBlackSecondary,
      fontWeight: "400",
      display: "block",
      marginTop: "1rem",
    },
  })

  const cssStatsHolder = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1rem",

    [mq[0]]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },

    "& div:first-of-type": {
      marginRight: "2rem",
    },
  })

  const cssStats = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1rem",

    "& span:first-of-type": {
      color: fontBlackSecondary,
      textTransform: "uppercase",
      marginRight: "1rem",
    },

    "& span:last-of-type": {
      color: fontBlackPrimary,
      fontWeight: "700",
    },
  })

  const cssDesc = css({
    maxHeight: "15rem",
    overflowY: "auto",
    textAlign: "center",
    padding: "0 .5rem",

    [mq[0]]: {
      padding: "0",
      textAlign: "left",
      maxHeight: "100%",
    },
  })

  return (
    <div
      onClick={handleClose}
      style={transitionStyle}
      id="BeerModal"
      css={cssBeerModal}
    >
      <div css={cssCard}>
        {beersAmmount < CRATE_LIMIT ? (
          <>
            <LikeButton css={cssModalLike} />
            <button id="BeerModalClose" css={cssCloseBtn}></button>

            <img css={cssImg} src={data.image_url} alt={data.name} />

            <div css={cssContent}>
              <h4 css={cssTitle}>
                {data.name}
                <span>{data.tagline}</span>
              </h4>
              <div css={cssStatsHolder}>
                <div css={cssStats}>
                  <span>ibu</span>
                  <span>{data.ibu}</span>
                </div>
                <div css={cssStats}>
                  <span>abv</span>
                  <span>{data.abv}%</span>
                </div>
              </div>
              <div css={cssDesc}>{data.description}</div>
            </div>
            <Button
              css={cssAddBtn}
              islink={false}
              title="Add to crate"
              handleClick={() => handleAddBeer(data, activeCrateIndex)}
            />
          </>
        ) : (
          <div style={{ width: "100%", height: "100%" }}>
            <h4 css={cssTitle} style={{ textAlign: "center" }}>
              Crate Full, choose another
            </h4>
            <button id="BeerModalClose" css={cssCloseBtn}></button>
          </div>
        )}
      </div>
    </div>
  )
}

export default BeerModal
