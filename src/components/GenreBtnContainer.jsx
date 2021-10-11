import { StlyedGenreBtnContainer } from "./styles/GenreBtnContainer.styled";
import { GenreBtn } from "./GenreBtn";

export const GenreBtnContainer = ({ genreBtnHandler, musicCollection }) => {
  return (
    <StlyedGenreBtnContainer>
      {Object.keys(musicCollection).map((genre) => {
        return (
          <GenreBtn
            genreBtnHandler={(newGenre) => genreBtnHandler(genre)}
            key={genre}
            btnName={genre}
          />
        );
      })}
    </StlyedGenreBtnContainer>
  );
};
