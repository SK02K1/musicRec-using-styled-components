import { Logo } from "./Logo";
import { StyledNav } from "./styles/Nav.styled";
import { ToggleButton } from "./ToggleButton";

export const Nav = ({ appThemeHandler }) => {
  return (
    <StyledNav>
      <Logo title="MusicRec" />
      <ToggleButton
        appThemeHandler={(themeName) => appThemeHandler(themeName)}
      />
    </StyledNav>
  );
};
