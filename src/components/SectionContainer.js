import React from "react"
import { css } from "@emotion/core"
import { mq } from "../theme"

const SectionContainer = ({ className, children }) => {
  const cssSection = css({
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
    position: "relative",

    // [mq[0]]: {
    //   maxWidth: "768px",
    // },

    // [mq[1]]: {
    //   maxWidth: "996px",
    // },
    [mq[2]]: {
      maxWidth: "1336px",
      borderRadius: "4px",
    },
  })

  return (
    <section css={cssSection} className={className}>
      {children}
    </section>
  )
}

export default SectionContainer
