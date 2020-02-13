import React from "react"
import { css } from "@emotion/core"
import { Transition } from "react-transition-group"
import { useSelector } from "react-redux"
import { selectIsMobileNavOpen } from "../redux/globals/globalsSelectors"
import MobileNav from "./MobileNav"
import MobileNavToggleBtn from "../components/MobileNavToggleBtn"
import Logo from "./Logo"
import backgroundPattern from "../assets/pattern.svg"
import { backgroundBlack } from "../theme"
import Navigation from "./Navigation"

const Header = () => {
  const isMobileNavOpen = useSelector(selectIsMobileNavOpen)

  const cssHeader = css({
    position: "fixed",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: "1000",
    maxWidth: "1336px",
    width: "100%",
    padding: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: backgroundBlack,
    backgroundImage: `url(${backgroundPattern})`,
  })

  return (
    <>
      <Transition unmountOnExit in={isMobileNavOpen} timeout={{ exit: 400 }}>
        {state => (
          <MobileNav
            transitionStyle={{ ...mobileNavTransitionStyles[state] }}
          />
        )}
      </Transition>
      <header css={cssHeader}>
        <Logo />
        <Navigation />
        <MobileNavToggleBtn />
      </header>
    </>
  )
}

export default Header

const mobileNavTransitionStyles = {
  entering: {
    opacity: "0",
    transform: "translate3d(-100%,0,0)",
  },
  entered: {
    opacity: "1",
    transform: "translate3d(0,0,0)",
  },
  exiting: {
    opacity: "0",
    transform: "translate3d(-100%,0,0)",
  },
  exited: {
    opacity: "0",
    transform: "translate3d(-100%,0,0)",
  },
}
