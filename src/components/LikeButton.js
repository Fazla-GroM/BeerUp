import React from "react"
import { css } from "@emotion/core"
import { ReactComponent as HeartIcon } from "../assets/favorite.svg"
import { fontBlackDisabled } from "../theme"

const LikeButton = ({ className }) => {
  const cssLikeBtn = css({
    outline: "none",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    cursor: "pointer",
    transition: "all .4s",

    "&:hover": {
      transform: "scale(1.2)",
    },

    "& svg": {
      fill: fontBlackDisabled,
    },
  })

  return (
    <button css={cssLikeBtn} className={className} aria-label="Like a Beer">
      <HeartIcon />
    </button>
  )
}

export default LikeButton
