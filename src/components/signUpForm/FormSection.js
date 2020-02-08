import React from "react"
import { css } from "@emotion/core"
import { fontBlackPrimary } from "../../theme"

const FormSection = ({ title, children, className }) => {
  const cssFormSection = css({
    width: "100%",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
    padding: "4rem 0 3rem 0",
  })

  const cssTitle = css({
    fontWeight: "600",
    color: fontBlackPrimary,
    textTransform: "uppercase",
    paddingBottom: "2rem",
  })

  return (
    <div css={cssFormSection} className={className}>
      {title && <h4 css={cssTitle}>{title}</h4>}
      {children}
    </div>
  )
}

export default FormSection
