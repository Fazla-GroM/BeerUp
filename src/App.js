import React from "react"
import { Global } from "@emotion/core"
import { globalStyles } from "./theme"
import { Route, Switch } from "react-router-dom"
import { mainRoutes } from "./routes/routes"
import { useSelector } from "react-redux"
import { selectIsMobileNavOpen } from "./redux/globals/globalsSelectors"
import { Transition } from "react-transition-group"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MobileNav from "./components/MobileNav"

const App = () => {
  const isMobileNavOpen = useSelector(selectIsMobileNavOpen)

  return (
    <>
      <Global styles={globalStyles} />
      <Transition unmountOnExit in={isMobileNavOpen} timeout={{ exit: 400 }}>
        {state => (
          <MobileNav transitionStyle={{ ...transitionStyles[state] }} />
        )}
      </Transition>
      <Header />
      <Switch>
        {mainRoutes.map(({ path, isExact, Component }) => (
          <Route key={path} path={path} exact={isExact ? isExact : false}>
            <main>
              <Component />
            </main>
          </Route>
        ))}
      </Switch>
      <Footer />
    </>
  )
}

export default App

const transitionStyles = {
  entering: {
    opacity: "0",
    transform: "translate3d(-100%,0,0)",
  },
  entered: {
    opacity: "1",
    transform: "translate3d(0,0,0)",
  },
  exiting: {
    opacity: "0",
    transform: "translate3d(-100%,0,0)",
  },
  exited: {
    opacity: "0",
    transform: "translate3d(-100%,0,0)",
  },
}
