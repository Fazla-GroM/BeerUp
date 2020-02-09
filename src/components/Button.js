import React from "react"
import { Link } from "react-router-dom"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"

const Button = ({ type, title, islink, path, handleClick, className }) => {
  const theme = useTheme()
  const cssButton = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colors.black,
    backgroundColor: theme.colors.primary,
    width: "fit-content",
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: "inherit",
    fontSize: "1.6rem",
    letterSpacing: ".2rem",
    padding: "1.2rem 3.5rem",
    borderRadius: "10rem",
    position: "relative",
    zIndex: "2",
    transition: "all .4s",
    cursor: "pointer",
    border: "none",
    outline: "none",

    "&:hover": {
      backgroundColor: theme.colors.primaryActive,
    },
  })

  return islink ? (
    <Link css={cssButton} to={path} className={className}>
      {title}
    </Link>
  ) : (
    <button
      css={cssButton}
      type={type}
      onClick={handleClick}
      className={className}
    >
      {title}
    </button>
  )
}

export default Button
