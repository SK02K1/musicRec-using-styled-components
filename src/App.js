import { GlobalStyles } from "./components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { darkMode, lightMode } from "./data/themes.js";
import { useState } from "react";

export default function App() {
  const [appTheme, setAppTheme] = useState(lightMode);
  return (
    <div className="App">
      <ThemeProvider theme={appTheme}>
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
}
