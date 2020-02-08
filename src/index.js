import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "emotion-theming"
import { theme } from "./theme"
import App from "./App"

render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("App")
)

if (module.hot) {
  module.hot.accept()
}
