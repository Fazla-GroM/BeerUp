import React from "react"
import { css } from "@emotion/core"
import { NavLink } from "react-router-dom"
import crateIlustration from "../assets/crate-ilustration.svg"
import Button from "./Button"

const MobileNav = ({ transitionStyle }) => {
  const cssMobileNav = css({
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "500",
    width: "100%",
    height: "100vh",
    backgroundColor: "hotpink",
    transition: "all .4s",
  })

  const cssNavList = css({})

  return (
    <nav css={cssMobileNav} style={transitionStyle}>
      <ul css={cssNavList}>
        <li>
          <NavLink to="/" exact={true}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
        <li>
          <img src={crateIlustration} alt="A crate full of tasty beer" />
          <Button islink={true} path="/sign-up" title="Join Beerup" />
        </li>
      </ul>
    </nav>
  )
}

export default MobileNav
