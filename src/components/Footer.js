import React from "react"
import { css } from "@emotion/core"
import { NavLink } from "react-router-dom"
import { mainLinks } from "../routes/routes"
import {
  fontWhitePrimary,
  fontWhiteSecondary,
  colorPrimary,
  colorPrimaryTransparent,
  mq,
} from "../theme"
import Logo from "./Logo"
import { ReactComponent as PininterestLogo } from "../assets/pininterest.svg"
import { ReactComponent as FacebookLogo } from "../assets/facebook.svg"
import { ReactComponent as LinkedInLogo } from "../assets/linked-in.svg"
import { ReactComponent as TwitterLogo } from "../assets/twitter.svg"

const Footer = () => {
  const cssFooter = css({
    maxWidth: "1336px",
    padding: "0 1.5rem",
    margin: "0 auto",
  })

  const cssTopHolder = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "4rem 0",

    [mq[0]]: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
  })

  const cssGroup = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    [mq[0]]: {
      alignItems: "flex-start",
    },

    [mq[2]]: {
      flexDirection: "row",
      flex: "1",
      justifyContent: "space-between",
    },
  })

  const cssFooterLogo = css({
    marginBottom: "2rem",
  })

  const cssNav = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    [mq[0]]: {
      alignItems: "flex-start",
    },

    [mq[2]]: {
      flexDirection: "row",
    },

    "& a:not(:last-of-type)": {
      marginBottom: "2rem",

      [mq[2]]: {
        marginRight: "3rem",
      },
    },

    "& a": {
      color: fontWhiteSecondary,
      textTransform: "uppercase",
      fontWeight: "600",
      fontSize: "1.4rem",
      letterSpacing: ".2rem",
      transition: "all .4s",

      "&:hover": {
        color: colorPrimary,
      },
    },
  })

  const cssSocialList = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4rem",

    [mq[0]]: {
      marginTop: "0",
    },

    [mq[2]]: {
      flex: ".69",
      justifyContent: "flex-end",
    },

    "& li:not(:last-of-type)": {
      marginRight: "4rem",
    },

    "& li, & a": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // width: "100%",
    },

    "& a": {
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
      <div css={cssTopHolder}>
        <div css={cssGroup}>
          <Logo css={cssFooterLogo} />
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
        </div>
        <ul css={cssSocialList}>
          <li>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Link"
            >
              <FacebookLogo />
            </a>
          </li>
          <li>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Link"
            >
              <TwitterLogo />
            </a>
          </li>
          <li>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Link"
            >
              <LinkedInLogo />
            </a>
          </li>
          <li>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pininterest Link"
            >
              <PininterestLogo />
            </a>
          </li>
        </ul>
      </div>

      <div css={cssCopy}>&copy;2020 All rights reserved</div>
    </footer>
  )
}

export default Footer
