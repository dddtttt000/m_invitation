import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { NavermapsProvider } from "react-naver-maps"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const customTheme = createTheme({
  palette: {
    background: { default: "#ffffff" },
    primary: { main: "#0E13E5" },
  },
})
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <NavermapsProvider ncpClientId="a51ubs0ntl">
      <ThemeProvider theme={customTheme}>
        <App />
      </ThemeProvider>
    </NavermapsProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
