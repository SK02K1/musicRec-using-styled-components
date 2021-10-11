import { StyledMainContainer } from "./styles/MainContainer.styled";
import { GenreBtnContainer } from "../components/GenreBtnContainer";
import { useState } from "react";
import { MainHeader } from "./MainHeader";
import { getMusicDB } from "../data/MusicDB";
import { AlbumCard } from "../components/AlbumCard";

const musicCollection = getMusicDB();

export const MainContainer = () => {
  const [genre, setGenre] = useState("Select from the above options 👆");
  return (
    <StyledMainContainer>
      <GenreBtnContainer
        genreBtnHandler={(newGenre) => setGenre(newGenre)}
        musicCollection={musicCollection}
      />
      <MainHeader genreName={genre} />
      {musicCollection[genre] !== undefined
        ? musicCollection[genre].map(({ name, artist, albumArt }) => {
            return (
              <AlbumCard name={name} artist={artist} albumArt={albumArt} />
            );
          })
        : ""}
    </StyledMainContainer>
  );
};
