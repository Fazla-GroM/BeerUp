import React from "react"
import { css } from "@emotion/core"
import { NavLink } from "react-router-dom"
import {
  fontWhitePrimary,
  colorPrimary,
  colorPrimaryTransparent,
  mq,
} from "../theme"
import Button from "./Button"

const Navigation = () => {
  const cssNav = css({
    display: "none",

    [mq[0]]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    ".nav-active": {
      "&::after": {
        width: "100%",
        backgroundColor: colorPrimary,
      },
    },
  })

  const cssLink = css({
    color: fontWhitePrimary,
    padding: ".7rem 0",
    marginRight: "3rem",
    display: "block",
    position: "relative",
    letterSpacing: ".2rem",
    fontSize: "1.4rem",
    fontWeight: "600",

    "&::after": {
      position: "absolute",
      content: "' '",
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
      width: "0",
      height: "4px",
      backgroundColor: colorPrimary,
      borderRadius: "10rem",
      transition: "all .4s",
    },
  })

  const cssNavBtn = css({
    backgroundColor: "transparent",
    border: `3px solid ${colorPrimary}`,
    color: fontWhitePrimary,
    fontSize: "1.4rem",

    "&:hover": {
      backgroundColor: colorPrimaryTransparent,
    },
  })

  return (
    <nav css={cssNav}>
      <NavLink css={cssLink} activeClassName="nav-active" exact={true} to="/">
        Home
      </NavLink>
      <NavLink css={cssLink} activeClassName="nav-active" to="/favorites">
        Favorites
      </NavLink>
      <Button css={cssNavBtn} islink={true} path="/sign-up" title="Join" />
    </nav>
  )
}

export default Navigation
