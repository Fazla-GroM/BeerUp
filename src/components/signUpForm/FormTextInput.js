import React from "react"
import { css } from "@emotion/core"
import { fontBlackDisabled, backgroundWhite, mq } from "../../theme"

const FormTextInput = ({
  id,
  placeholder,
  type,
  name,
  value,
  handleChange,
  error,
  isRequired,
  isFocused,
}) => {
  const cssHolder = css({
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "3rem",

    [mq[0]]: {
      width: "60%",
    },
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

  const cssRequired = css({
    fontSize: "1.2rem",
    color: "red",
    position: "absolute",
    top: "50%",
    right: ".5rem",
    transform: "translateY(-50%)",
  })

  return (
    <div css={cssHolder}>
      <input
        css={cssInput}
        type={type}
        id={id}
        placeholder=" "
        name={name}
        value={value}
        onChange={handleChange}
        autoFocus={isFocused}
      />

      <label css={cssLabel} htmlFor={id}>
        {placeholder}
      </label>
      {isRequired && <span css={cssRequired}>&#10033;</span>}
      {error.isError && <span css={cssError}>{error.errMsg}</span>}
    </div>
  )
}

export default FormTextInput
