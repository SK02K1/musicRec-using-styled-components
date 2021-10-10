import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
  --manrope: Manrope, Arial, Helvetica, sans-serif;
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
}

a {
  text-decoration: none;
}

button {
  border: none;
  cursor: pointer;
}
`;
