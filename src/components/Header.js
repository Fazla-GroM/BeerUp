import React from "react"
import { css } from "@emotion/core"
import MobileNavToggleBtn from "../components/MobileNavToggleBtn"
import Logo from "./Logo"
import backgroundPattern from "../assets/pattern.svg"
import { backgroundBlack } from "../theme"

const Header = () => {
  const cssHeader = css({
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1000",
    maxWidth: "1336px",
    width: "100%",
    padding: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: backgroundBlack,
    backgroundImage: `url(${backgroundPattern})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  })

  return (
    <header css={cssHeader}>
      <Logo />
      <MobileNavToggleBtn />
    </header>
  )
}

export default Header
