import React from "react"
import { Global } from "@emotion/core"
import { globalStyles } from "./theme"
import { Route, Switch } from "react-router-dom"
import { mainRoutes } from "./routes/routes"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Global styles={globalStyles} />
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
