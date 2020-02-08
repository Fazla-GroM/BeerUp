import React from "react"
import { css } from "@emotion/core"
import {
  fontBlackDisabled,
  fontBlackPrimary,
  backgroundWhite,
} from "../../theme"

const FormTextInput = ({ id, placeholder, type }) => {
  const cssHolder = css({
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "2rem",
  })

  const cssLabel = css({
    fontSize: "1.4rem",
    position: "absolute",
    left: "2rem",
    top: "50%",
    transform: "translateY(-50%)",
    transition: "all .4s",
    backfaceVisibility: "hidden",
  })

  const cssInput = css({
    backgroundColor: backgroundWhite,
    outline: "none",
    fontSize: "1.4rem",
    fontFamily: "inherit",
    width: "100%",
    padding: "2.5rem 2rem 1rem 2rem",
    border: "none",
    borderRadius: "4px",
    boxShadow:
      "inset 2px 2px 5px rgba(0,0,0,0.2), inset -5px -5px 10px #f7f7f7",

    "&:focus ~ label, &:not(:placeholder-shown) ~ label": {
      top: "25%",
      color: fontBlackDisabled,
      fontSize: "1.3rem",
    },
  })

  return (
    <div css={cssHolder}>
      <input css={cssInput} type={type} id={id} placeholder=" " />

      <label css={cssLabel} htmlFor={id}>
        {placeholder}
      </label>
    </div>
  )
}

export default FormTextInput
