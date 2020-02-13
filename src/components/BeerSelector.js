import React, { useEffect } from "react"
import { css } from "@emotion/core"
import { Transition } from "react-transition-group"
import { backgroundWhite, fontBlackPrimary, mq } from "../theme"
import { useDispatch, useSelector } from "react-redux"
import { selectBeerModal } from "../redux/globals/globalsSelectors"
import {
  selectCrateOne,
  selectCrateTwo,
  selectCrateThree,
} from "../redux/crates/cratesSelectors"
import "swiper/css/swiper.css"
import SectionContainer from "./SectionContainer"
import Swiper from "react-id-swiper"
import TabMenu from "./TabMenu"
import BeerCard from "./BeerCard"
import capImage from "../assets/cap.svg"
import useMediaQuery from "../hooks/useMediaQuery"
import BeerModal from "./BeerModal"

const BeerSelector = ({
  beerListTitle,
  className,
  getBeerListData,
  selectBeerListData,
}) => {
  const isMobile = useMediaQuery("(max-width:767px)")
  const dispatch = useDispatch()
  const beerListData = useSelector(selectBeerListData)
  const beerModal = useSelector(selectBeerModal)

  const getInitialBeers = () => {
    if (!beerListData.results.length) {
      dispatch(getBeerListData(beerListData.pageToFetch))
    }
  }

  useEffect(() => {
    getInitialBeers()
  }, [])

  const cssBeerSelector = css({
    backgroundColor: backgroundWhite,
    marginTop: "-2rem",
    padding: "4rem 1.5rem",

    [mq[0]]: {
      display: "flex",
      padding: "4rem",
    },

    [mq[2]]: {
      padding: "6rem 10rem",
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
    [mq[0]]: {
      marginLeft: "5rem",
    },

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
    <>
      <Transition unmountOnExit in={beerModal.isOpen} timeout={{ exit: 400 }}>
        {state => (
          <BeerModal
            transitionStyle={{ ...beerModalTransitionStyles[state] }}
          />
        )}
      </Transition>
      <SectionContainer css={cssBeerSelector} className={className}>
        <div css={cssBeers}>
          <h3 css={cssTitle}>{beerListTitle}</h3>
          {isMobile && (
            <Swiper {...swiperParams}>
              {beerListData.results.map(beer => (
                <div key={beer.id}>
                  <BeerCard data={beer} />
                </div>
              ))}
            </Swiper>
          )}
          {!isMobile && (
            <div css={cssBeerGrid}>
              {beerListData.results.map(beer => (
                <BeerCard key={beer.id} data={beer} />
              ))}
            </div>
          )}
        </div>
        <div css={cssCrates}>
          <h3 css={cssTitle}>Crate</h3>
          <TabMenu data={tabMenuData} activeTabIndex={0} />
        </div>

        <img css={cssCap} src={capImage} alt="Yellow Beer Cap" />
      </SectionContainer>
    </>
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

const tabMenuData = [
  {
    label: "one",
    selector: selectCrateOne,
  },
  {
    label: "two",
    selector: selectCrateTwo,
  },
  {
    label: "three",
    selector: selectCrateThree,
  },
]

const beerModalTransitionStyles = {
  entering: {
    opacity: "0",
    transform: "scale(0)",
  },
  entered: {
    opacity: "1",
    transform: "scale(1)",
  },
  exiting: {
    opacity: "0",
    transform: "scale(0)",
  },
  exited: {
    transform: "scale(0)",

    opacity: "0",
  },
}
