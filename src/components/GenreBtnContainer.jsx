import { StlyedGenreBtnContainer } from "./styles/GenreBtnContainer.styled";
import { getMusicDB } from "../data/MusicDB";
import { GenreBtn } from "./GenreBtn";

const musicCollection = getMusicDB();

export const GenreBtnContainer = ({ genreBtnHandler }) => {
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
