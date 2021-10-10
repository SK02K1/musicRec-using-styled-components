import { StyledMainContainer } from "./styles/MainContainer.styled";
import { GenreBtnContainer } from "../components/GenreBtnContainer";
import { useState } from "react";

export const MainContainer = () => {
  const [genre, setGenre] = useState("Romantic");
  return (
    <StyledMainContainer>
      <GenreBtnContainer genreBtnHandler={(newGenre) => setGenre(newGenre)} />
      <h2>{genre}</h2>
    </StyledMainContainer>
  );
};
