import React from "react"
import { css } from "@emotion/core"
import {
  backgroundWhite,
  fontBlackDisabled,
  fontBlackPrimary,
} from "../../theme"

const FormTextareaInput = ({
  id,
  placeholder,
  name,
  value,
  handleChange,
  error,
}) => {
  const cssHolder = css({
    margin: "2rem 0",
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    //marginBottom: "2rem",
  })

  const cssTextarea = css({
    backgroundColor: backgroundWhite,
    color: fontBlackPrimary,
    outline: "none",
    fontSize: "1.4rem",
    fontFamily: "inherit",
    width: "100%",
    minHeight: "15rem",
    padding: "2.5rem 2rem 1rem 2rem",
    border: "none",
    borderRadius: "4px",
    boxShadow:
      "inset 2px 2px 5px rgba(0,0,0,0.2), inset -5px -5px 10px #f7f7f7",

    "&:focus ~ label, &:not(:placeholder-shown) ~ label": {
      top: "10%",
      color: fontBlackDisabled,
      fontSize: "1.3rem",
    },
  })

  const cssLabel = css({
    fontSize: "1.4rem",
    position: "absolute",
    left: "2rem",
    top: "20%",
    transform: "translateY(-50%)",
    transition: "all .4s",
    backfaceVisibility: "hidden",
  })

  const cssError = css({
    position: "absolute",
    bottom: "-2em",
    left: "50%",
    transform: "translateX(-50%)",
    color: "red",
    fontSize: "1.2rem",
    width: "100%",
    textAlign: "center",
  })

  return (
    <div css={cssHolder}>
      <textarea
        css={cssTextarea}
        id={id}
        placeholder=" "
        name={name}
        value={value}
        onChange={handleChange}
      />
      <label css={cssLabel} htmlFor={id}>
        {placeholder}
      </label>
      {error.isError && <span css={cssError}>{error.errMsg}</span>}
    </div>
  )
}

export default FormTextareaInput
