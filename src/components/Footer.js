import React from "react"
import { css } from "@emotion/core"
import { NavLink } from "react-router-dom"
import { mainLinks } from "../routes/routes"
import {
  fontWhitePrimary,
  fontWhiteSecondary,
  colorPrimary,
  colorPrimaryTransparent,
} from "../theme"
import Logo from "./Logo"
import { ReactComponent as PininterestLogo } from "../assets/pininterest.svg"
import { ReactComponent as FacebookLogo } from "../assets/facebook.svg"
import { ReactComponent as LinkedInLogo } from "../assets/linked-in.svg"
import { ReactComponent as TwitterLogo } from "../assets/twitter.svg"

const Footer = () => {
  const cssFooter = css({
    padding: "4rem 1.5rem 0 1.5rem",
  })

  const cssNav = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "4rem 0 2rem 0",

    "& a": {
      color: fontWhiteSecondary,
      textTransform: "uppercase",
      fontWeight: "600",
      fontSize: "1.4rem",
      letterSpacing: ".2rem",
      transition: "all .4s",

      "&:not(:last-of-type)": {
        marginBottom: "2rem",
      },

      "&:hover": {
        color: colorPrimary,
      },
    },
  })

  const cssSocialList = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "4rem 0",

    "& li, & a": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },

    "& a": {
      padding: "1rem",

      "& svg": {
        transition: "all .4s",
      },
      "&:hover svg": {
        transform: "scale(1.2)",
      },
    },
  })

  const cssCopy = css({
    color: fontWhiteSecondary,
    fontSize: "1.3rem",
    textAlign: "center",
    padding: "3rem 0",
    borderTop: `2px solid ${colorPrimaryTransparent}`,
  })

  return (
    <footer css={cssFooter}>
      <Logo />
      <nav css={cssNav}>
        {mainLinks.map(({ path, name, isExact }) => {
          return (
            <NavLink
              key={path}
              exact={isExact ? isExact : false}
              to={path}
              activeStyle={{ color: colorPrimary }}
            >
              {name}
            </NavLink>
          )
        })}
      </nav>
      <ul css={cssSocialList}>
        <li>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FacebookLogo />
          </a>
        </li>
        <li>
          <a href="" target="_blank" rel="noopener noreferrer">
            <TwitterLogo />
          </a>
        </li>
        <li>
          <a href="" target="_blank" rel="noopener noreferrer">
            <LinkedInLogo />
          </a>
        </li>
        <li>
          <a href="" target="_blank" rel="noopener noreferrer">
            <PininterestLogo />
          </a>
        </li>
      </ul>
      <div css={cssCopy}>&copy;2020 All rights reserved</div>
    </footer>
  )
}

export default Footer
