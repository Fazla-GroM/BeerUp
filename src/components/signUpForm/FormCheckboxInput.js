import React from "react"
import { css } from "@emotion/core"
import { colorPrimary, fontBlackPrimary } from "../../theme"

const FormCheckboxInput = ({ id, name, content, value, handleChange }) => {
  const cssHolder = css({
    "& input": {
      display: "none",

      "&:checked + label": {
        "&>:first-of-type": {
          "&::after": {
            borderColor: colorPrimary,
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

  const cssCheckBtn = css({
    width: "1.8rem",
    height: "1.8rem",
    borderRadius: "4px",
    border: "2px solid grey",
    position: "relative",
    marginRight: "1rem",

    "&::after": {
      position: "absolute",
      content: "' '",
      width: "1rem",
      height: "2rem",
      top: "10%",
      left: "80%",
      transform: "translate(-50%,-50%) rotate(45deg)",
      borderColor: "transparent",
      borderBottom: "2px solid transparent",
      borderRight: "2px solid transparent",
      transition: "border-color .4s",
    },
  })

  const cssValue = css({
    color: fontBlackPrimary,
  })
  return (
    <div css={cssHolder}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={value}
        onChange={handleChange}
      />
      <label css={cssLabel} htmlFor={id}>
        <span css={cssCheckBtn}></span>
        <span css={cssValue}>{content}</span>
      </label>
    </div>
  )
}

export default FormCheckboxInput
