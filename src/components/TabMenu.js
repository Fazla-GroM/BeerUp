import React, { useState } from "react"
import { css } from "@emotion/core"
import {
  fontBlackPrimary,
  fontBlackSecondary,
  fontBlackDisabled,
  colorSecondary,
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
  })

  const cssBtnList = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",

    "& li": {},
  })

  const cssTabContent = css({
    width: "100%",
    height: "40rem",
    padding: "2rem 3rem",
  })

  const cssCrate = css({
    backgroundImage: `url(${crateImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  })

  const cssQuote = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: fontBlackSecondary,
    fontSize: "1.4rem",

    "& cite": {
      marginTop: "1.5rem",
      color: fontBlackDisabled,
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
        <div css={cssCrate}></div>
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
    color: isActive ? fontBlackPrimary : fontBlackDisabled,
    cursor: "pointer",
    outline: "none",
    padding: "1rem 2rem",
    borderBottom: `4px solid ${isActive ? colorSecondary : "transparent"}`,
    transition: "all 0.4s",
  })

  return (
    <button onClick={() => handleTabs(index)} css={cssTabButton}>
      {label}
    </button>
  )
}
