import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"

const MobileNavToggleBtn = () => {
  const theme = useTheme()

  const cssNavBtn = css({
    width: "3.5rem",
    height: "3.5rem",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    outline: "none",

    "&:hover div": {
      "&:first-of-type": {
        top: "5%",
      },
      "&:last-of-type": {
        bottom: "5%",
      },
    },

    "& div": {
      position: "absolute",
      width: "100%",
      height: ".4rem",
      backgroundColor: theme.colors.primary,
      borderRadius: "10rem",
      transition: "all .4s",

      "&:first-of-type": {
        top: "15%",
      },
      "&:last-of-type": {
        bottom: "15%",
      },
    },
  })

  return (
    <button css={cssNavBtn} aria-label="Toggle Mobile Navigation">
      <div></div>
      <div></div>
      <div></div>
    </button>
  )
}

export default MobileNavToggleBtn
