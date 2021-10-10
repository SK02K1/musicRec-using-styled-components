import { StlyedGenreBtnContainer } from "./styles/GenreBtnContainer.styled";
import { getMusicDB } from "../data/MusicDB";
import { GenreBtn } from "./GenreBtn";

const musicCollection = getMusicDB();

export const GenreBtnContainer = () => {
  return (
    <StlyedGenreBtnContainer>
      {Object.keys(musicCollection).map((genre) => {
        return <GenreBtn btnName={genre} />;
      })}
    </StlyedGenreBtnContainer>
  );
};
