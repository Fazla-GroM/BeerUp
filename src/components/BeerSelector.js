import React from "react"
import { css } from "@emotion/core"
import SectionContainer from "./SectionContainer"
import Swiper from "react-id-swiper"
import TabMenu from "./TabMenu"
import BeerCard from "./BeerCard"
import { backgroundWhite, fontBlackPrimary } from "../theme"
import capImage from "../assets/cap.svg"
import "swiper/css/swiper.css"

const BeerSelector = ({ beerListTitle, className }) => {
  const cssBeerSelector = css({
    backgroundColor: backgroundWhite,
    //marginTop: "-2rem",
    display: "flex",
    flexDirection: "column",
    padding: "4rem 0",

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
  })

  const cssBeerList = css({
    width: "100%",
  })

  const cssCrates = css({
    width: "100%",
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
          <div>
            <BeerCard />
          </div>
        </Swiper>
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
