import { GlobalStyles } from "./components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightMode } from "./data/themes.js";
import { useState } from "react";
import { Nav } from "./components/Nav";

export default function App() {
  const [appTheme, setAppTheme] = useState(lightMode);
  return (
    <div className="App">
      <ThemeProvider theme={appTheme}>
        <GlobalStyles />
        <Nav appThemeHandler={(themeName) => setAppTheme(themeName)} />
      </ThemeProvider>
    </div>
  );
}
