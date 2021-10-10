import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
  --manrope: Manrope, Arial, Helvetica, sans-serif;
  --bg-color: ${({
    theme: {
      colors: { bg }
    }
  }) => bg};
  --text-color: ${({
    theme: {
      colors: { primaryText }
    }
  }) => primaryText};
}

@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  font-family: var(--manrope);
  font-weight: 400;
  background-color: var(--bg-color);
  color: var(--text-color);
}

a {
  text-decoration: none;
  color: var(--text-color);
}

button {
  border: none;
  cursor: pointer;
}
`;
