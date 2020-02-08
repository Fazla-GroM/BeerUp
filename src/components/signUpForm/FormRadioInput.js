import React from "react"
import { css } from "@emotion/core"
import { fontBlackPrimary, colorPrimary } from "../../theme"

const FormRadioInput = ({ id, name, value }) => {
  const cssHolder = css({
    "& input": {
      display: "none",

      "&:checked + label": {
        "&>:first-of-type": {
          "&::after": {
            backgroundColor: colorPrimary,
          },
        },
      },
    },
    "&:not(:last-of-type)": {
      paddingBottom: "1rem",
    },
  })

  const cssLabel = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: "1.4rem",
  })

  const cssRadioBtn = css({
    width: "1.8rem",
    height: "1.8rem",
    borderRadius: "50%",
    border: "2px solid grey",
    position: "relative",
    marginRight: "1rem",

    "&::after": {
      position: "absolute",
      content: "' '",
      width: "1rem",
      height: "1rem",
      borderRadius: "50%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      backgroundColor: "transparent",
      transition: "background-color .4s",
    },
  })

  const cssValue = css({
    color: fontBlackPrimary,
  })

  return (
    <div css={cssHolder}>
      <input type="radio" name={name} id={id} value={value} />
      <label css={cssLabel} htmlFor={id}>
        <span css={cssRadioBtn}></span>
        <span css={cssValue}>{value}</span>
      </label>
    </div>
  )
}

export default FormRadioInput
