import React from "react"
import { css } from "@emotion/core"
import { Link } from "react-router-dom"
import logoGlass from "../assets/symbol.svg"
import logo from "../assets/logo.svg"

const Logo = () => {
  const cssLogo = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& img:first-of-type": {
      marginRight: "1rem",
    },
  })

  return (
    <Link to="/" css={cssLogo}>
      <img src={logoGlass} alt="BeerUp glass logo" />
      <img src={logo} alt="BeerUp logo" />
    </Link>
  )
}

export default Logo
