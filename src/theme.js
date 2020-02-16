import { css, keyframes } from "@emotion/core"
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
  "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
export const boxShadowHover =
  "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
export const boxShadowTwo =
  "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
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

//MEDIA QUERIES
export const breakpoints = [
  "only screen and (min-width: 768px)",
  "only screen and (min-width: 996px)",
  "only screen and (min-width: 1200px)",
]
export const mq = breakpoints.map(bp => `@media ${bp}`)

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
    scroll-behavior: smooth;
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
  }
  main {
    width: 100%;
    padding-top: 12rem;
  }
  a {
    text-decoration: none;
  }

  .page-enter {
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    height: 100%;
    z-index: 2;
    transform: translate3d(100%, 0, 0);
  }

  .page-enter-active {
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    overflow: hidden;
    z-index: 2;
    transform: translate3d(0, 0, 0);
    transition: all 0.5s;
  }

  .page-exit {
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    z-index: 1;
  }

  .page-exit-active {
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    overflow: hidden;
    transform: translate3d(-100%, 0, 0);
    z-index: 1;
    transition: all 0.5s;
  }
`

export const bounce = keyframes`
 0%{
   transform:scale(0)
 }

 100%{
   transform:scale(1)

 }
`

//crate ilu
// width="452px" height="563px"
