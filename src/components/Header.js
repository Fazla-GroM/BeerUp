import React from "react"
import { css } from "@emotion/core"
import { Transition } from "react-transition-group"
import { useSelector } from "react-redux"
import {
  selectIsMobileNavOpen,
  selectIsBeerBasketOpen,
} from "../redux/globals/globalsSelectors"
import MobileNav from "./MobileNav"
import MobileNavToggleBtn from "../components/MobileNavToggleBtn"
import Logo from "./Logo"
import backgroundPattern from "../assets/pattern.svg"
import { backgroundBlack, mq } from "../theme"
import Navigation from "./Navigation"
import BeerBasketBtn from "./BeerBasketBtn"
import BeerBasket from "../components/BeerBasket"
import useMediaQuery from "../hooks/useMediaQuery"

const Header = () => {
  const isNotMobile = useMediaQuery("(min-width: 768px)")
  const isMobileNavOpen = useSelector(selectIsMobileNavOpen)
  const isBeerBasketOpen = useSelector(selectIsBeerBasketOpen)

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

  const cssNavBtnGroup = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& button:first-of-type": {
      marginRight: "2.2rem",

      [mq[0]]: {
        marginRight: "0",
        marginLeft: "3rem",
      },
    },
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
      <Transition unmountOnExit in={isBeerBasketOpen} timeout={{ exit: 400 }}>
        {state => (
          <BeerBasket
            transitionStyle={{ ...mobileNavTransitionStyles[state] }}
          />
        )}
      </Transition>

      <header css={cssHeader}>
        <Logo />
        <div css={cssNavBtnGroup}>
          {isNotMobile && <Navigation />}
          <BeerBasketBtn />
          {!isNotMobile && <MobileNavToggleBtn />}
        </div>
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
