import { css } from "@emotion/core"
import emotionReset from "emotion-reset"
import backgroundImg from "./assets/pattern.svg"

export const colors = {
  primary: "#FFC80A",
  primaryActive: "#FFB90A",
  black: "#121212",
  fontPrimary: "rgba(255,255,255, 87%)",
  fontSecondary: "rgba(255,255,255, 60%)",
  fontDisabled: "rgba(255,255,255, 38%)",
}

export const theme = {
  colors,
}
//BOX SHADOWS
export const boxShadow =
  "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
//COLORS
export const backgroundWhite = "#F7F7F7"
export const backgroundBlack = "#121212"
export const colorPrimary = "#FFC80A"
export const colorPrimaryActive = "#FFB90A"
export const colorPrimaryTransparent = "rgba(255, 200, 10, 0.3)"
export const colorSecondary = "#e74f31"
export const fontBlackPrimary = "rgba(0,0,0, 87%)"
export const fontBlackSecondary = "rgba(0,0,0, 60%)"
export const fontBlackDisabled = "rgba(0,0,0, 38%)"
export const fontWhitePrimary = "rgba(255,255,255, 87%)"
export const fontWhiteSecondary = "rgba(255,255,255, 60%)"
export const fontWhiteDisabled = "rgba(255,255,255, 38%)"

export const backgroundColors = {
  white: "#F7F7F7",
  black: "#121212",
}

export const globalStyles = css`
  ${emotionReset}
  *,
          *::after,
          *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-smoothing: antialiased;
  }
  html {
    height: 100%;
    font-size: 62.5%;
    box-sizing: border-box;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    height: 100%;
    overflow-y: scroll;
    line-height: 1.6;
    font-family: "Poppins", Sans Serif;
    font-size: 1.6rem;
    background-color: #121212;
    background-image: url(${backgroundImg});
    background-attachment: fixed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #App {
    position: relative;
    width: 100%;
    height: 100%;
  }
  main {
    width: 100%;

    padding-top: 12rem;
  }
  a {
    text-decoration: none;
  }
`
