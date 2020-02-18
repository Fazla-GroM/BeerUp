// import HomePage from "../pages/HomePage"
// import FavoritesPage from "../pages/FavoritesPage"
// import SignUpPage from "../pages/SignUpPage"
import NoMatchPage from "../pages/NoMatchPage"
import loadable from "@loadable/component"

const HomePage = loadable(() =>
  import(/* webpackPrefetch: true */ "../pages/HomePage")
)

const FavoritesPage = loadable(() =>
  import(/* webpackPrefetch: true */ "../pages/FavoritesPage")
)
const SignUpPage = loadable(() =>
  import(/* webpackPrefetch: true */ "../pages/SignUpPage")
)

export const mainRoutes = [
  {
    path: "/",
    isExact: true,
    Component: HomePage,
  },
  {
    path: "/favorites",
    Component: FavoritesPage,
  },
  {
    path: "/sign-up",
    Component: SignUpPage,
  },
  {
    path: "*",
    Component: NoMatchPage,
  },
]

export const mainLinks = [
  {
    path: "/",
    name: "Home",
    isExact: true,
  },
  {
    path: "/favorites",
    name: "Favorites",
  },
  {
    path: "sign-up",
    name: "Join",
  },
]
