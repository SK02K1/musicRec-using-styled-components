import { StyledButton } from "./styles/Button.styled";

export const GenreBtn = ({ btnName, genreBtnHandler }) => {
  return (
    <StyledButton onClick={() => genreBtnHandler(btnName)}>
      {btnName}
    </StyledButton>
  );
};
