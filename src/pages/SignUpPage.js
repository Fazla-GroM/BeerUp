import React from "react"
import { css } from "@emotion/core"
import { backgroundWhite } from "../theme"
import HeroBox from "../components/HeroBox"
import SectionContainer from "../components/SectionContainer"
import SignUpForm from "../components/signUpForm/SignUpForm"
import capImg from "../assets/cap.svg"

const SignUpPage = () => {
  const cssFormContainer = css({
    marginTop: "-10rem",
    padding: "4rem 1rem 8rem 1rem",
    backgroundColor: backgroundWhite,
    position: "relative",
  })

  const cssBeerCap = css({
    position: "absolute",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%) rotate(180deg)",
  })
  return (
    <>
      <HeroBox title="Join Up!" />
      <SectionContainer css={cssFormContainer}>
        <SignUpForm />
        <img css={cssBeerCap} src={capImg} alt="A yellow beer cap" />
      </SectionContainer>
    </>
  )
}

export default SignUpPage
