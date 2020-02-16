import React from "react"
import { Global } from "@emotion/core"
import { globalStyles } from "./theme"
import { Route, Switch, useLocation, useHistory } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { mainRoutes } from "./routes/routes"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  const location = useLocation()

  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          classNames="page"
          timeout={pageTransitionTimeout}
          unmountOnExit
        >
          <Switch location={location}>
            {mainRoutes.map(({ path, isExact, Component }) => (
              <Route key={path} path={path} exact={isExact ? isExact : false}>
                <div style={{ width: "100%" }}>
                  <main>
                    <Component />
                  </main>
                  <Footer />
                </div>
              </Route>
            ))}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

export default App

const pageTransitionTimeout = {
  appear: 400,
  enter: 700,
  exit: 400,
}
