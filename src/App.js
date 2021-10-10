import { GlobalStyles } from "./components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightMode } from "./data/themes.js";
import { useState } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { GenreBtnContainer } from "./components/GenreBtnContainer";

export default function App() {
  const [appTheme, setAppTheme] = useState(lightMode);
  return (
    <div className="App">
      <ThemeProvider theme={appTheme}>
        <GlobalStyles />
        <Nav appThemeHandler={(themeName) => setAppTheme(themeName)} />
        <Hero />
        <GenreBtnContainer />
      </ThemeProvider>
    </div>
  );
}
