import React, { useState } from "react"
import { css } from "@emotion/core"
import {
  fontBlackPrimary,
  fontBlackSecondary,
  fontBlackDisabled,
  colorSecondary,
  mq,
} from "../theme"
import crateImg from "../assets/crate.svg"

const TabMenu = ({ data, activeTabIndex }) => {
  const [{ tabData, activeTab }, setActiveTab] = useState({
    activeTab: { ...data[activeTabIndex], index: activeTabIndex },
    tabData: data,
  })

  const handleTabs = activeIndex => {
    setActiveTab(state => {
      return {
        ...state,
        activeTab: { ...state.tabData[activeIndex], index: activeIndex },
      }
    })
  }

  const cssTabMenu = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  })

  const cssBtnList = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",

    [mq[0]]: {
      justifyContent: "flex-start",
    },

    "& li": {
      "&:not(:last-of-type)": {
        marginRight: "3rem",
      },
    },
  })

  const cssTabContent = css({
    width: "100%",
    padding: "2rem 0",
  })

  const cssCrate = css({
    width: "26.4rem",
    height: "31.7rem",
    display: "grid",
    gridTemplateRows: "repeat(5,1fr)",
    gridTemplateColumns: "repeat(4,1fr)",
    backgroundImage: `url(${crateImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "0 auto",
  })

  const cssQuote = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: fontBlackPrimary,
    fontSize: "1.4rem",

    "& cite": {
      marginTop: "1.5rem",
      color: fontBlackSecondary,
    },
  })

  return (
    <div css={cssTabMenu}>
      <ul css={cssBtnList}>
        {tabData.map((tab, index) => (
          <li key={index}>
            <TabButton
              index={index}
              handleTabs={handleTabs}
              isActive={index === activeTab.index}
              label={tab.label}
            />
          </li>
        ))}
      </ul>
      <div css={cssTabContent}>
        <div title="Empty Beer crate ready to be filled" css={cssCrate}></div>
      </div>
      <blockquote css={cssQuote}>
        Add a beer to have it appear in crate.
        <cite>&mdash; Captain Obvious</cite>
      </blockquote>
    </div>
  )
}

export default TabMenu

const TabButton = ({ label, isActive, handleTabs, index }) => {
  const cssTabButton = css({
    backgroundColor: "transparent",
    border: "none",
    fontSize: "inherit",
    fontFamily: "inherit",
    textTransform: "uppercase",
    fontWeight: "600",
    letterSpacing: ".2rem",
    color: isActive ? fontBlackPrimary : fontBlackSecondary,
    cursor: "pointer",
    outline: "none",
    padding: "0 0 1rem 0",
    borderBottom: `4px solid ${isActive ? colorSecondary : "transparent"}`,
    transition: "all 0.4s",
  })

  return (
    <button onClick={() => handleTabs(index)} css={cssTabButton}>
      {label}
    </button>
  )
}
