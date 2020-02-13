import React, { useState } from "react"
import { css } from "@emotion/core"
import { useDispatch } from "react-redux"
import { setActiveCrate } from "../redux/crates/cratesActions"
import {
  fontBlackPrimary,
  fontBlackSecondary,
  colorSecondary,
  mq,
} from "../theme"
import BeerCrate from "./BeerCrate"

const TabMenu = ({ data, activeTabIndex }) => {
  const dispatch = useDispatch()
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
    dispatch(setActiveCrate(activeIndex))
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
      <div key={activeTab.index} css={cssTabContent}>
        <BeerCrate beerSelector={activeTab.selector} />
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
    transition: "all 0.4s",
    position: "relative",

    "&:hover::after": {
      width: "100%",
      backgroundColor: colorSecondary,
    },

    "&::after": {
      content: "''",
      position: "absolute",
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
      height: "4px",
      width: isActive ? "100%" : "0",
      backgroundColor: isActive ? colorSecondary : "transparent",
      borderRadius: "10rem",
      transition: "all .4s",
    },
  })

  return (
    <button onClick={() => handleTabs(index)} css={cssTabButton}>
      {label}
    </button>
  )
}
