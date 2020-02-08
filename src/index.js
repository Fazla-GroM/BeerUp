import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "emotion-theming"
import { theme } from "./theme"
import { Provider } from "react-redux"
import store from "./redux/store"
import App from "./App"

render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("App")
)

if (module.hot) {
  module.hot.accept()
}
