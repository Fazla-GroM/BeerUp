import React from "react"
import { css } from "@emotion/core"
import { colorPrimary, mq } from "../theme"
import { useDispatch, useSelector } from "react-redux"
import { setIsMobileNavOpen } from "../redux/globals/globalsActions"
import { selectIsMobileNavOpen } from "../redux/globals/globalsSelectors"

const MobileNavToggleBtn = () => {
  const dispatch = useDispatch()
  const isMobileNavOpen = useSelector(selectIsMobileNavOpen)

  const cssNavBtn = css({
    width: "3.2rem",
    height: "3.2rem",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    outline: "none",

    [mq[0]]: {
      display: "none",
    },

    "& div": {
      position: "absolute",
      width: "100%",
      height: ".4rem",
      backgroundColor: colorPrimary,
      borderRadius: "10rem",
      transition: "all .4s",

      "&:first-of-type": {
        top: isMobileNavOpen ? "50%" : "5%",
        transform: isMobileNavOpen
          ? "translateY(-50%) rotate(-45deg)"
          : "translateY(0) rotate(0)",
      },

      "&:nth-of-type(2)": {
        backgroundColor: isMobileNavOpen ? "transparent" : colorPrimary,
      },

      "&:last-of-type": {
        bottom: isMobileNavOpen ? "50%" : "5%",
        transform: isMobileNavOpen
          ? "translateY(50%) rotate(45deg)"
          : "translateY(0) rotate(0)",
      },
    },
  })

  return (
    <button
      onClick={() => dispatch(setIsMobileNavOpen(!isMobileNavOpen))}
      css={cssNavBtn}
      aria-label="Toggle Mobile Navigation"
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  )
}

export default MobileNavToggleBtn
