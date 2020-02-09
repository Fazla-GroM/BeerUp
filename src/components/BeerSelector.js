import React from "react"
import { css } from "@emotion/core"
import SectionContainer from "./SectionContainer"
import Swiper from "react-id-swiper"
import TabMenu from "./TabMenu"
import BeerCard from "./BeerCard"
import { backgroundWhite, fontBlackPrimary, mq } from "../theme"
import capImage from "../assets/cap.svg"
import "swiper/css/swiper.css"

const BeerSelector = ({ beerListTitle, className }) => {
  const cssBeerSelector = css({
    backgroundColor: backgroundWhite,
    marginTop: "-2rem",
    padding: "4rem 0",

    [mq[0]]: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: "4rem 0",
    },

    ".swiper-container": {
      [mq[0]]: {
        display: "none !important",
      },
    },

    ".swiper-wrapper": {
      boxSizing: "border-box",
      padding: "3.5rem 0",
    },

    ".swiper-slide": {
      height: "auto",
    },
  })

  const cssTitle = css({
    color: fontBlackPrimary,
    fontWeight: "600",
    fontSize: "2.4rem",
    textAlign: "center",
    textTransform: "capitalize",
    [mq[0]]: {
      textAlign: "left",
    },
  })

  const cssBeerList = css({
    ".grid": {
      display: "none",
    },
    [mq[0]]: {
      padding: "0 1.5rem 0 3rem",
      flex: "1",
      ".grid": {
        paddingTop: "2rem",
        display: "grid",
        gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
        gridTemplateColumns: "1fr 1fr",
        gridColumnGap: "1.5rem",
        gridRowGap: "1.5rem",
      },
    },
    [mq[2]]: {
      ".grid": {
        gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      },
      flex: "2",
    },
  })

  const cssCrates = css({
    [mq[0]]: {
      flex: "1",
      padding: "0 3rem 0 1.5rem",
    },

    [mq[2]]: {
      flex: "1",
    },
  })

  const cssCap = css({
    transform: "translateX(-50%) rotate(180deg)",
    position: "absolute",
    left: "50%",
    bottom: "-10px",
  })

  return (
    <SectionContainer css={cssBeerSelector} className={className}>
      <div css={cssBeerList}>
        <h3 css={cssTitle}>{beerListTitle}</h3>
        <Swiper {...swiperParams}>
          <div>
            <BeerCard />
          </div>

          <div>
            <BeerCard />
          </div>

          <div>
            <BeerCard />
          </div>
        </Swiper>
        <div className="grid">
          <BeerCard /> <BeerCard /> <BeerCard /> <BeerCard /> <BeerCard />{" "}
          <BeerCard /> <BeerCard /> <BeerCard /> <BeerCard />
        </div>
      </div>
      <div css={cssCrates}>
        <h3 css={cssTitle}>Crate</h3>
        <TabMenu data={fakeData} activeTabIndex={0} />
      </div>
      <img css={cssCap} src={capImage} alt="Yellow Beer Cap" />
    </SectionContainer>
  )
}

export default BeerSelector

const swiperParams = {
  centeredSlides: true,
  freeMode: true,
  slidesPerView: 1.5,
  spaceBetween: 15,
  rebuildOnUpdate: true,
}

const fakeData = [
  {
    label: "One",
  },
  {
    label: "Two",
  },
  {
    label: "Three",
  },
]
