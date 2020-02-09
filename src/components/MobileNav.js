import React, { useEffect } from "react"
import { css } from "@emotion/core"
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setIsMobileNavOpen } from "../redux/globals/globalsActions"
import crateIlustration from "../assets/crate-ilustration.svg"
import backgroundImage from "../assets/pattern.svg"
import Button from "./Button"
import { colorPrimary, fontWhitePrimary, backgroundBlack } from "../theme"

const MobileNav = ({ transitionStyle }) => {
  const dispatch = useDispatch()

  const handleClose = e => {
    const target = e.target
    if (target.closest("#MobileNav")) {
      dispatch(setIsMobileNavOpen(false))
      console.log(target)
    }
  }

  useEffect(() => {
    const handleCloseOnEscKey = e => {
      if (e.keyCode === 27) dispatch(setIsMobileNavOpen(false))
    }
    document.addEventListener("keydown", handleCloseOnEscKey)
    return () => {
      document.removeEventListener("keydown", handleCloseOnEscKey)
    }
  }, [])

  const cssMobileNav = css({
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "500",
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: backgroundBlack,
    backgroundPosition: "center",
    transition: "all .4s",
  })

  const cssNavList = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    "& li": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      //backgroundColor: "red",
      padding: "2rem 3rem",

      "& img": {
        width: "16rem",
      },

      ".mobile-nav-active": {
        "&::after": {
          backgroundColor: colorPrimary,
          width: "50%",
        },
      },
    },
  })

  const cssLink = css({
    color: fontWhitePrimary,
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: "3rem",
    display: "block",
    position: "relative",

    "&::after": {
      position: "absolute",
      bottom: "-.8rem",
      left: "50%",
      transform: "translateX(-50%)",
      content: "' '",
      width: "0",
      height: "4px",
      backgroundColor: "transparent",
      borderRadius: "10rem",
      transition: "all .4s",
    },
  })

  const cssJoinBtn = css({
    marginTop: "-3rem",
  })

  return (
    <nav
      onClick={handleClose}
      id="MobileNav"
      css={cssMobileNav}
      style={transitionStyle}
    >
      <ul css={cssNavList}>
        <li>
          <NavLink
            css={cssLink}
            activeClassName="mobile-nav-active"
            to="/"
            exact={true}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            css={cssLink}
            activeClassName="mobile-nav-active"
            to="/favorites"
          >
            Favorites
          </NavLink>
        </li>
        <li>
          <img src={crateIlustration} alt="A crate full of tasty beer" />
          <Button
            css={cssJoinBtn}
            islink={true}
            path="/sign-up"
            title="Join Beerup"
          />
        </li>
      </ul>
    </nav>
  )
}

export default MobileNav
