import { darkMode, lightMode } from "../data/themes";
import { StyledButton } from "./styles/Button.styled";

let isDarkModeEnabled = false;

export const ToggleButton = ({ appThemeHandler }) => {
  const toggleBtnClickHandler = () => {
    let themeName = isDarkModeEnabled ? lightMode : darkMode;
    appThemeHandler(themeName);
    isDarkModeEnabled = !isDarkModeEnabled;
  };
  return (
    <StyledButton onClick={toggleBtnClickHandler}>
      {isDarkModeEnabled ? "Light Mode" : "Dark Mode"}
    </StyledButton>
  );
};
