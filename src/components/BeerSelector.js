import React from "react"
import { css } from "@emotion/core"
import SectionContainer from "./SectionContainer"
import Swiper from "react-id-swiper"
import TabMenu from "./TabMenu"
import BeerCard from "./BeerCard"
import { backgroundWhite, fontBlackPrimary, mq } from "../theme"
import capImage from "../assets/cap.svg"
import "swiper/css/swiper.css"
import useMediaQuery from "../hooks/useMediaQuery"

const BeerSelector = ({ beerListTitle, className }) => {
  const isMobile = useMediaQuery("(max-width:767px)")
  console.log({ isMobile })

  const cssBeerSelector = css({
    backgroundColor: backgroundWhite,
    marginTop: "-2rem",
    padding: "4rem 1.5rem",

    [mq[0]]: {
      display: "flex",
      padding: "4rem",
    },

    [mq[2]]: {
      padding: "6rem 15rem",
    },

    ".swiper-container": {
      margin: "0 -1.5rem",

      [mq[0]]: {
        display: "none",
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
      marginBottom: "3rem",
    },
  })

  const cssBeerGrid = css({
    display: "none",

    [mq[0]]: {
      display: "grid",
      gridTemplateRows: "repeat(5,1fr)",
      gridTemplateColumns: "1fr 1fr",
      rowGap: "1.5rem",
      columnGap: "1.5rem",
    },

    [mq[2]]: {
      gridTemplateColumns: "repeat(4,1fr)",
      gridTemplateRows: "auto",
    },
  })
  const cssBeers = css({
    flex: "1",
  })

  const cssCrates = css({
    marginLeft: "5rem",

    [mq[2]]: {
      marginLeft: "10rem",
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
      <div css={cssBeers}>
        <h3 css={cssTitle}>{beerListTitle}</h3>
        {isMobile && (
          <Swiper {...swiperParams}>
            {fakeBeers.map(beer => (
              <div key={beer.id}>
                <BeerCard />
              </div>
            ))}
          </Swiper>
        )}
        {!isMobile && (
          <div css={cssBeerGrid}>
            {fakeBeers.map(beer => (
              <BeerCard key={beer.id} />
            ))}
          </div>
        )}
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

const fakeBeers = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
  {
    id: 11,
  },
  {
    id: 12,
  },
  {
    id: 13,
  },
  {
    id: 14,
  },
  {
    id: 15,
  },
  {
    id: 16,
  },
  {
    id: 17,
  },
  {
    id: 18,
  },
  {
    id: 19,
  },
  {
    id: 20,
  },
  {
    id: 21,
  },
  {
    id: 22,
  },
]
