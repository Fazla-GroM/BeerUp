import React from "react"
import { css } from "@emotion/core"

const SectionContainer = ({ className, children }) => {
  const cssSection = css({
    width: "100%",
    maxWidth: "1336px",
    position: "relative",
  })

  return (
    <section css={cssSection} className={className}>
      {children}
    </section>
  )
}

export default SectionContainer
