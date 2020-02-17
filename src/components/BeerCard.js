import React from "react"
import { css } from "@emotion/core"
import { useDispatch } from "react-redux"
import { setBeerModal } from "../redux/globals/globalsActions"
import {
  boxShadow,
  boxShadowHover,
  backgroundWhite,
  fontBlackPrimary,
  fontBlackSecondary,
  mq,
} from "../theme"
import LikeButton from "./LikeButton"

const BeerCard = ({ data }) => {
  const dispatch = useDispatch()

  const cssCard = css({
    minWidth: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "hotpink",
    boxShadow: boxShadow,
    borderRadius: "4px",
    backgroundColor: backgroundWhite,
    padding: "2.5rem",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    cursor: "pointer",

    "&:hover": {
      boxShadow: boxShadowHover,
    },
  })

  const cssCardLikeBtn = css({
    position: "absolute",
    top: "7px",
    left: "7px",
  })

  const cssImage = css({
    "& img": {
      width: "50px",

      [mq[2]]: {
        width: "30px",
      },
    },
  })

  const cssContent = css({
    flex: "1",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: "2rem",
  })

  const cssTitle = css({
    color: fontBlackPrimary,
    textTransform: "uppercase",
    fontWeight: "700",
    lineHeight: "1.2",
    marginBottom: "1.5rem",
  })

  const cssData = css({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1rem",

    "& span:first-of-type": {
      color: fontBlackSecondary,
      textTransform: "uppercase",
    },

    "& span:last-of-type": {
      color: fontBlackPrimary,
    },
  })

  return (
    <div onClick={() => dispatch(setBeerModal(true, data))} css={cssCard}>
      <LikeButton css={cssCardLikeBtn} />
      <div css={cssImage}>
        <img src={data.image_url} alt={`${data.name}: ${data.tagline}`} />
      </div>
      <div css={cssContent}>
        <h4 css={cssTitle}>{data.name}</h4>
        <div css={cssData}>
          <span>ibu</span>
          <span>{data.ibu}</span>
        </div>
        <div css={cssData}>
          <span>abv</span>
          <span>{data.abv}%</span>
        </div>
      </div>
    </div>
  )
}

export default BeerCard
