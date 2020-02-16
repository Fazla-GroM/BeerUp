import HomePage from "../pages/HomePage"
import FavoritesPage from "../pages/FavoritesPage"
import SignUpPage from "../pages/SignUpPage"
import NoMatchPage from "../pages/NoMatchPage"

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
