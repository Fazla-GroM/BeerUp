import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import SectionContainer from "./SectionContainer"
import crateImg from "../assets/crate-ilustration.svg"
import { mq } from "../theme"

const HeroBox = ({ isHomePage, subtitle, title }) => {
  const cssHeroBox = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    [mq[2]]: {
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-around",
    },
  })

  const cssImage = css({
    width: "16rem",

    [mq[0]]: {
      width: "40rem",
    },
  })

  return (
    <SectionContainer css={cssHeroBox}>
      <Title isHomePage={isHomePage}>
        {subtitle && <span>{subtitle}</span>}
        {title}
      </Title>
      <img css={cssImage} src={crateImg} alt="A Crate full of Tasty Beer" />
    </SectionContainer>
  )
}

export default HeroBox

const Title = ({ isHomePage, children }) => {
  const theme = useTheme()
  const cssTitle = css({
    color: theme.colors.fontPrimary,
    textTransform: "uppercase",
    fontWeight: "700",
    textAlign: "center",
    fontSize: "4rem",
    lineHeight: "4rem",
    maxWidth: "30rem",
    marginBottom: "5rem",
    display: "block",

    [mq[0]]: {
      fontSize: "6rem",
      maxWidth: "40rem",
      //padding: "0 16rem",
      lineHeight: "7rem",
    },

    [mq[2]]: {
      textAlign: "left",
      fontSize: "8rem",
      lineHeight: "8rem",
      maxWidth: "50rem",
    },

    "& span": {
      display: "block",
      fontSize: "1.4rem",
      letterSpacing: ".5rem",
      marginBottom: "4rem",

      [mq[2]]: {
        lineHeight: "1",
      },
    },
  })

  return isHomePage ? (
    <h1 css={cssTitle}>{children}</h1>
  ) : (
    <h2 css={cssTitle}>{children}</h2>
  )
}
