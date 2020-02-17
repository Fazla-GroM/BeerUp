import React from "react"
import { css } from "@emotion/core"
import { backgroundWhite, mq } from "../theme"
import HeroBox from "../components/HeroBox"
import SectionContainer from "../components/SectionContainer"
import SignUpForm from "../components/signUpForm/SignUpForm"
import capImg from "../assets/cap.svg"
import { Helmet } from "react-helmet"

const SignUpPage = () => {
  const cssFormContainer = css({
    marginTop: "-10rem",
    padding: "4rem 1rem 8rem 1rem",
    backgroundColor: backgroundWhite,
    position: "relative",

    [mq[0]]: {
      marginTop: "-25rem",
    },
  })

  const cssBeerCap = css({
    position: "absolute",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%) rotate(180deg)",
  })

  console.log("SIGNUP")
  return (
    <>
      <Helmet>
        <title>BeerUp | Sign-Up</title>
        <meta property="og:title" content="BeerUp | Sign-Up" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.siteurl.com/sign-up" />
        <meta property="og:image" content="neka slika" />
        <meta
          property="og:description"
          content="BeerUp! A best place to be if you are a beer lover!"
        />
        <meta
          name="description"
          content="BeerUp! A best place to be if you are a beer lover!"
        />

        {/*CANONICAL */}
        <link rel="canonical" href="www.siteurl.com/sign-up" />
      </Helmet>
      <HeroBox title="Join Up!" />
      <SectionContainer css={cssFormContainer}>
        <SignUpForm />
        <img css={cssBeerCap} src={capImg} alt="A yellow beer cap" />
      </SectionContainer>
    </>
  )
}

export default SignUpPage
